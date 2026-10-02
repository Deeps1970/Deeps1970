export type RiskLevel = "LOW RISK" | "MEDIUM RISK" | "HIGH RISK" | "CRITICAL";

export interface AnalysisResult {
  score: number;
  level: RiskLevel;
  threatType: string;
  indicators: string[];
  explanation: string;
  recommendation: string;
  domain?: string | undefined;
  input: string;
  kind: "message" | "url" | "screenshot";
}

const URGENCY_WORDS = [
  "urgent", "immediately", "within 24 hours", "act now", "expires", "suspended",
  "blocked", "verify now", "last chance", "final notice", "limited time",
];

const CREDENTIAL_WORDS = [
  "password", "otp", "one-time password", "cvv", "pin", "card number",
  "account number", "login", "sign in", "credentials", "ssn", "aadhaar", "pan",
];

const BRAND_WORDS = [
  "sbi", "hdfc", "icici", "axis", "paytm", "phonepe", "gpay", "google pay",
  "amazon", "flipkart", "irctc", "lic", "income tax", "rbi", "npci", "bank",
];

const SCAM_PATTERNS: { pattern: RegExp; type: string }[] = [
  { pattern: /kyc/i, type: "KYC Scam" },
  { pattern: /upi|refund|cashback/i, type: "UPI Fraud" },
  { pattern: /job|hiring|work from home|part.?time/i, type: "Job Scam" },
  { pattern: /invest|returns|trading|crypto|double your/i, type: "Investment Scam" },
  { pattern: /delivery|courier|package|customs/i, type: "Delivery Scam" },
  { pattern: /lottery|winner|prize|won/i, type: "Lottery Scam" },
];

export function extractUrls(text: string): string[] {
  const matches = text.match(/https?:\/\/[^\s]+|www\.[^\s]+|[a-z0-9-]+\.(com|in|net|org|xyz|top|link|click|info)(\/[^\s]*)?/gi);
  return matches ? Array.from(new Set(matches)) : [];
}

export function extractDomain(url: string): string {
  try {
    const withProto = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    return new URL(withProto).hostname;
  } catch {
    return url;
  }
}

function isSuspiciousDomain(domain: string): boolean {
  const suspiciousTld = /\.(xyz|top|link|click|info|icu|buzz|rest)$/i.test(domain);
  const hasHyphenBrand = /(sbi|hdfc|icici|paytm|amazon|bank|kyc|verify|secure|update)[.-]/i.test(domain);
  const longSubdomain = domain.split(".").length > 3;
  return suspiciousTld || hasHyphenBrand || longSubdomain;
}

function levelForScore(score: number): RiskLevel {
  if (score >= 85) return "CRITICAL";
  if (score >= 60) return "HIGH RISK";
  if (score >= 30) return "MEDIUM RISK";
  return "LOW RISK";
}

export function analyzeMessage(text: string): AnalysisResult {
  const lower = text.toLowerCase();
  const urls = extractUrls(text);
  const indicators: string[] = [];
  let score = 8;

  const urgency = URGENCY_WORDS.filter((w) => lower.includes(w));
  if (urgency.length) {
    score += 22;
    indicators.push("Urgency manipulation");
  }

  const credentials = CREDENTIAL_WORDS.filter((w) => lower.includes(w));
  if (credentials.length) {
    score += 26;
    indicators.push("Credential request");
  }

  const brands = BRAND_WORDS.filter((w) => lower.includes(w));
  if (brands.length) {
    score += 18;
    indicators.push("Brand impersonation");
  }

  if (urls.length) {
    score += 16;
    indicators.push("Suspicious URL");
    const domains = urls.map(extractDomain);
    if (domains.some(isSuspiciousDomain)) {
      score += 12;
      indicators.push("Deceptive domain name");
    }
  }

  let threatType = "Unclassified";
  for (const { pattern, type } of SCAM_PATTERNS) {
    if (pattern.test(text)) {
      threatType = type;
      score += 10;
      break;
    }
  }
  if (threatType === "Unclassified" && credentials.length && brands.length) {
    threatType = "Phishing";
  }

  if (/dear (customer|user|sir|madam)/i.test(text)) {
    score += 6;
    indicators.push("Generic greeting");
  }

  score = Math.min(98, Math.max(4, score));
  const level = levelForScore(score);

  if (!indicators.length) indicators.push("No strong phishing indicators detected");

  const explanation =
    level === "LOW RISK"
      ? "This message does not contain strong phishing signals, but always verify unexpected requests through official channels."
      : "This message creates urgency and asks you to verify your account through an external URL — a classic phishing pattern designed to steal your credentials.";

  const recommendation =
    level === "LOW RISK"
      ? "Stay cautious. If the message claims to be from an organization, confirm it through their official app or website before acting."
      : "Do not click the link or provide credentials. Verify the request through the official website or application.";

  return {
    score,
    level,
    threatType,
    indicators,
    explanation,
    recommendation,
    domain: urls[0] ? extractDomain(urls[0]) : undefined,
    input: text,
    kind: "message",
  };
}

export function analyzeUrl(url: string): AnalysisResult {
  const domain = extractDomain(url);
  const indicators: string[] = [];
  let score = 10;

  if (isSuspiciousDomain(domain)) {
    score += 40;
    indicators.push("Deceptive or lookalike domain");
  }
  if (!/^https:/i.test(url)) {
    score += 15;
    indicators.push("No HTTPS encryption");
  }
  if (/@/.test(url)) {
    score += 20;
    indicators.push("URL contains '@' redirect trick");
  }
  if (/\d{1,3}(\.\d{1,3}){3}/.test(url)) {
    score += 25;
    indicators.push("Raw IP address used as host");
  }
  if (url.length > 75) {
    score += 10;
    indicators.push("Unusually long URL");
  }
  if (/(login|verify|secure|update|confirm|account)/i.test(url)) {
    score += 12;
    indicators.push("Credential-themed path keywords");
  }

  score = Math.min(97, score);
  const level = levelForScore(score);
  if (!indicators.length) indicators.push("No obvious suspicious URL traits");

  return {
    score,
    level,
    threatType: level === "LOW RISK" ? "Unclassified" : "Phishing URL",
    indicators,
    explanation:
      level === "LOW RISK"
        ? "The URL structure looks ordinary, but a clean-looking link can still lead to a malicious page."
        : "This URL shows traits commonly used in phishing campaigns, such as a lookalike domain or credential-themed path.",
    recommendation:
      level === "LOW RISK"
        ? "Open the site only if you trust the sender, and never enter credentials on a page you reached through a message link."
        : "Do not open this link. Navigate to the official website by typing the address yourself.",
    domain,
    input: url,
    kind: "url",
  };
}

export function analyzeScreenshot(fileName: string): AnalysisResult {
  // Mock OCR-based analysis for the prototype
  const score = 88;
  return {
    score,
    level: "CRITICAL",
    threatType: "Phishing",
    indicators: [
      "Brand impersonation",
      "Suspicious URL",
      "Urgency manipulation",
      "Credential request",
    ],
    explanation:
      "The screenshot contains a message impersonating a trusted brand, creating urgency and directing you to an external link to verify your account.",
    recommendation:
      "Do not click the link or provide credentials. Verify the request through the official website or application.",
    input: fileName,
    kind: "screenshot",
  };
}

export function saveResult(result: AnalysisResult) {
  sessionStorage.setItem("thoondilguard-result", JSON.stringify(result));
}

export function loadResult(): AnalysisResult | null {
  try {
    const raw = sessionStorage.getItem("thoondilguard-result");
    return raw ? (JSON.parse(raw) as AnalysisResult) : null;
  } catch {
    return null;
  }
}

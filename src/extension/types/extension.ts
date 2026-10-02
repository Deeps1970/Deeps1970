export type ExtensionAssessment = "high-concern" | "needs-verification" | "no-strong-warning";

export interface ExtensionAnalysisResult {
  assessment: ExtensionAssessment;
  score: number;
  summary: string;
  observedFindings: string[];
  unverified: string[];
  recommendedActions: string[];
  indicators: string[];
  urlSignals: string[];
  domain: string;
}

export interface DemoPage {
  label: string;
  title: string;
  url: string;
}

export interface CachedPageCheck {
  url: string;
  result: ExtensionAnalysisResult;
  checkedAt: string;
}

export interface ExtensionReportDraft {
  category: string;
  description: string;
}

export const DEMO_PAGES: DemoPage[] = [
  {
    label: "High concern",
    title: "Account verification required",
    url: "https://suspicious-site.example/verify-account",
  },
  {
    label: "Needs verification",
    title: "Customer account portal",
    url: "https://review-site.example/account",
  },
  {
    label: "No strong warning signs",
    title: "Example Domain",
    url: "https://example.com/",
  },
  {
    label: "Error state",
    title: "Temporary analysis error",
    url: "https://error-site.example/",
  },
  {
    label: "Unsupported page",
    title: "Browser settings page",
    url: "chrome://settings/",
  },
];

export const REPORT_CATEGORIES = [
  "Phishing",
  "Fake KYC",
  "Payment Scam",
  "Impersonation",
  "Job Scam",
  "Investment Scam",
  "Other",
] as const;

import type { ExtensionAnalysisResult } from "../types/extension";

export class UnsupportedPageError extends Error {
  constructor() {
    super("This page type is not supported by the extension prototype.");
    this.name = "UnsupportedPageError";
  }
}

export class MockAnalysisError extends Error {
  constructor() {
    super("The mock analysis service could not complete the request.");
    this.name = "MockAnalysisError";
  }
}

/** UI-only mock. This service does not fetch the page or contact an API. */
export async function analyzeExtensionPage(url: string): Promise<ExtensionAnalysisResult> {
  await new Promise((resolve) => setTimeout(resolve, 1400));

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(url);
  } catch {
    throw new MockAnalysisError();
  }

  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
    throw new UnsupportedPageError();
  }
  if (parsedUrl.hostname === "error-site.example") {
    throw new MockAnalysisError();
  }

  const domain = parsedUrl.hostname;
  if (domain.includes("suspicious") || domain.includes("phish")) {
    return {
      assessment: "high-concern",
      score: 86,
      summary:
        "This page contains indicators commonly associated with phishing or fraud. This mock assessment is not a confirmed finding.",
      observedFindings: [
        "Suspicious domain structure",
        "Urgency or credential request pattern",
        "Possible brand impersonation",
      ],
      unverified: ["Website ownership could not be independently confirmed."],
      recommendedActions: [
        "Do not enter passwords or OTPs.",
        "Do not submit banking information.",
        "Verify the website through the organization’s official app or website.",
      ],
      indicators: [
        "Lookalike-style hostname",
        "Credential-focused page path",
        "Urgent account language",
      ],
      urlSignals: ["The hostname uses a demo domain associated with a suspicious pattern."],
      domain,
    };
  }

  if (domain.includes("review")) {
    return {
      assessment: "needs-verification",
      score: 48,
      summary:
        "We found some signals worth checking, but there is not enough evidence to classify this page as malicious.",
      observedFindings: [
        "Account-related page path",
        "Page ownership is not confirmed in this demo",
      ],
      unverified: ["The operator and purpose of this page have not been independently verified."],
      recommendedActions: [
        "Open the service from its official app or a saved bookmark.",
        "Do not share credentials until you confirm the destination.",
      ],
      indicators: ["Account-related URL path"],
      urlSignals: ["The URL path refers to an account page."],
      domain,
    };
  }

  return {
    assessment: "no-strong-warning",
    score: 12,
    summary: "No strong warning signs were identified by this check.",
    observedFindings: ["No strong warning signs identified in the mock check."],
    unverified: ["This check does not establish who operates the website or guarantee its safety."],
    recommendedActions: ["Continue to use normal caution."],
    indicators: [],
    urlSignals: ["No notable URL structure signal was identified by this mock check."],
    domain,
  };
}

import { analyzeMessage, analyzeUrl, type AnalysisResult } from "@/lib/mock-analysis";

export type Assessment = "high-concern" | "needs-verification" | "no-strong-warning-signs";
export type CitizenAnalysis = AnalysisResult & {
  assessment: Assessment;
  summary: string;
  unverified: string[];
  actions: string[];
};
export type CitizenReport = {
  reportId: string;
  category: string;
  area: string;
  submittedAt: string;
  status: string;
  lastUpdated: string;
  summary: string;
};
export type ReviewedAlert = {
  alertId: string;
  title: string;
  area: string;
  category: string;
  status: "Reviewed Alert";
  observedPattern: string;
  residentAction: string;
  reviewedAt: string;
};

const reportsKey = "thoondilguard-reports";
export async function analyzeCitizenContent(
  input: string,
  kind: "message" | "url" | "screenshot",
): Promise<CitizenAnalysis> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  const result = kind === "url" ? analyzeUrl(input) : analyzeMessage(input);
  const assessment: Assessment =
    result.score >= 60
      ? "high-concern"
      : result.score >= 25
        ? "needs-verification"
        : "no-strong-warning-signs";
  return {
    ...result,
    kind,
    assessment,
    summary:
      assessment === "high-concern"
        ? "Several indicators commonly associated with phishing or impersonation were observed."
        : assessment === "needs-verification"
          ? "Some details deserve a closer look. The available signals are not conclusive."
          : "No strong warning signs were found in the submitted content. This does not guarantee it is safe.",
    unverified: [
      "The sender’s identity and intent have not been independently verified.",
      "This demo does not check live website reputation or confirm whether a campaign is active.",
    ],
    actions:
      assessment === "high-concern"
        ? [
            "Do not open the link or reply.",
            "Never share an OTP, password, PIN, or full bank credentials.",
            "Verify through the service’s official app or a number you already trust.",
          ]
        : [
            "Verify unexpected requests through an official channel.",
            "Do not share passwords, PINs, or OTPs.",
          ],
  };
}
export function createMockReport(
  report: Omit<CitizenReport, "reportId" | "submittedAt" | "lastUpdated" | "status">,
): CitizenReport {
  const created: CitizenReport = {
    ...report,
    reportId: `THG-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    submittedAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    status: "Received",
  };
  const all = getMockReports();
  sessionStorage.setItem(reportsKey, JSON.stringify([created, ...all]));
  return created;
}
export function getMockReports(): CitizenReport[] {
  const demo: CitizenReport[] = [
    {
      reportId: "THG-2026-4K2M8P",
      category: "Phishing",
      area: "Adyar",
      submittedAt: "2026-09-29T08:15:00Z",
      lastUpdated: "2026-09-29T12:00:00Z",
      status: "Under review",
      summary: "Message impersonating a delivery service",
    },
    {
      reportId: "THG-2026-7D9Q1A",
      category: "Job scam",
      area: "Velachery",
      submittedAt: "2026-09-27T10:20:00Z",
      lastUpdated: "2026-09-28T10:20:00Z",
      status: "Received",
      summary: "Unrelated part-time job offer requesting a deposit",
    },
    {
      reportId: "THG-2026-2N5W3C",
      category: "Payment scam",
      area: "Guindy",
      submittedAt: "2026-09-24T14:45:00Z",
      lastUpdated: "2026-09-30T09:00:00Z",
      status: "Reviewed",
      summary: "Suspicious payment request",
    },
  ];
  try {
    return [
      ...(JSON.parse(sessionStorage.getItem(reportsKey) ?? "[]") as CitizenReport[]),
      ...demo,
    ];
  } catch {
    return demo;
  }
}
export const reviewedAlerts: ReviewedAlert[] = [
  {
    alertId: "alert-delivery",
    title: "Delivery fee request messages",
    area: "Adyar · Guindy",
    category: "Delivery scam",
    status: "Reviewed Alert",
    observedPattern:
      "Messages claim a parcel is on hold and request a small redelivery fee through an unfamiliar link.",
    residentAction:
      "Do not open the link. Check delivery status directly through the courier’s official app or website.",
    reviewedAt: "2 Oct 2026, 09:30",
  },
  {
    alertId: "alert-kyc",
    title: "Account verification warnings",
    area: "Velachery · Perungudi",
    category: "Phishing",
    status: "Reviewed Alert",
    observedPattern:
      "Messages use urgent account language and direct recipients to a third-party verification page.",
    residentAction:
      "Do not share credentials or OTPs. Contact your provider using a trusted number or official app.",
    reviewedAt: "1 Oct 2026, 16:10",
  },
];

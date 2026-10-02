import { createFileRoute } from "@tanstack/react-router";
import { ThreatCategoryCard, type ThreatCategory } from "@/components/ThreatCategoryCard";
import { RecentReports, type RecentReport } from "@/components/RecentReports";
import { AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/intelligence")({
  head: () => ({
    meta: [
      { title: "Threat Intelligence — ThoondilGuard" },
      { name: "description", content: "Aggregated fraud intelligence: active scam categories, recent reports and common indicators." },
      { property: "og:title", content: "Threat Intelligence — ThoondilGuard" },
      { property: "og:description", content: "Aggregated fraud intelligence: active scam categories, recent reports and common indicators." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: IntelligencePage,
});

// Sample data for the prototype dashboard.
const CATEGORIES: ThreatCategory[] = [
  { name: "KYC Scam", reports: 1284, trend: "rising" },
  { name: "Bank Impersonation", reports: 1097, trend: "rising" },
  { name: "UPI Fraud", reports: 943, trend: "stable" },
  { name: "Delivery Scam", reports: 618, trend: "rising" },
  { name: "Job Scam", reports: 452, trend: "stable" },
  { name: "Investment Scam", reports: 389, trend: "falling" },
  { name: "Refund Scam", reports: 274, trend: "stable" },
];

const RECENT: RecentReport[] = [
  {
    category: "KYC Scam",
    summary: "SMS claiming SBI KYC is expiring, linking to a lookalike verification page asking for Aadhaar and OTP.",
    time: "12 min ago",
    level: "CRITICAL",
  },
  {
    category: "UPI Fraud",
    summary: "Fake cashback message requesting a 'refund' UPI PIN entry on a cloned payment screen.",
    time: "41 min ago",
    level: "HIGH RISK",
  },
  {
    category: "Delivery Scam",
    summary: "Courier redelivery fee page imitating a postal service, collecting card details for a ₹25 fee.",
    time: "1 hr ago",
    level: "HIGH RISK",
  },
  {
    category: "Job Scam",
    summary: "Work-from-home offer asking for a refundable 'registration deposit' before the first task.",
    time: "3 hrs ago",
    level: "MEDIUM RISK",
  },
  {
    category: "Bank Impersonation",
    summary: "Call-recording phishing email urging account verification due to 'unusual login activity'.",
    time: "5 hrs ago",
    level: "HIGH RISK",
  },
];

const COMMON_INDICATORS = [
  "Urgency manipulation",
  "Credential or OTP request",
  "Lookalike domain names",
  "Generic greetings",
  "Advance-fee or deposit demands",
  "Too-good-to-be-true returns",
];

function IntelligencePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-xl font-bold tracking-tight">Threat Intelligence</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Aggregated view of scam activity reported through ThoondilGuard.
      </p>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Active scam categories
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <ThreatCategoryCard key={c.name} category={c} />
          ))}
        </div>
      </section>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Common indicators
          </h2>
          <ul className="mt-3 space-y-2 rounded-xl border border-border bg-card p-5">
            {COMMON_INDICATORS.map((indicator) => (
              <li key={indicator} className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertTriangle className="h-4 w-4 shrink-0 text-foreground" />
                {indicator}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Recent reported scams
          </h2>
          <div className="mt-3">
            <RecentReports reports={RECENT} />
          </div>
        </section>
      </div>
    </main>
  );
}

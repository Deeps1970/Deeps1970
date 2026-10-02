import type { RiskLevel } from "@/lib/mock-analysis";

const levelStyles: Record<RiskLevel, string> = {
  "LOW RISK": "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  "MEDIUM RISK": "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300",
  "HIGH RISK": "border-orange-300 bg-orange-50 text-orange-800 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-300",
  CRITICAL: "border-red-300 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-300",
};

export function RiskScore({ score, level }: { score: number; level: RiskLevel }) {
  return (
    <div className={`rounded-xl border p-6 text-center ${levelStyles[level]}`}>
      <p className="text-xs font-medium uppercase tracking-widest opacity-80">Risk Score</p>
      <p className="mt-1 text-5xl font-bold tabular-nums">
        {score}
        <span className="text-xl font-medium opacity-70"> / 100</span>
      </p>
      <p className="mt-3 inline-block rounded-full border border-current px-4 py-1 text-sm font-semibold tracking-wide">
        {level}
      </p>
    </div>
  );
}

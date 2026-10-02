export interface ThreatCategory {
  name: string;
  reports: number;
  trend: "rising" | "stable" | "falling";
}

const trendLabel = { rising: "Rising", stable: "Stable", falling: "Falling" } as const;
const trendStyle = {
  rising: "text-red-700 dark:text-red-400",
  stable: "text-muted-foreground",
  falling: "text-emerald-700 dark:text-emerald-400",
} as const;

export function ThreatCategoryCard({ category }: { category: ThreatCategory }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">{category.name}</h3>
        <span className={`text-xs font-medium ${trendStyle[category.trend]}`}>
          {trendLabel[category.trend]}
        </span>
      </div>
      <p className="mt-2 text-2xl font-bold tabular-nums">{category.reports.toLocaleString()}</p>
      <p className="text-xs text-muted-foreground">reports this week</p>
    </div>
  );
}

export interface RecentReport {
  category: string;
  summary: string;
  time: string;
  level: string;
}

export function RecentReports({ reports }: { reports: RecentReport[] }) {
  return (
    <div className="rounded-xl border border-border bg-card">
      <h3 className="border-b border-border px-5 py-3 text-sm font-semibold">Recent reported scams</h3>
      <ul className="divide-y divide-border">
        {reports.map((report, i) => (
          <li key={i} className="px-5 py-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium">{report.category}</span>
              <span className="shrink-0 text-xs text-muted-foreground">{report.time}</span>
            </div>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{report.summary}</p>
            <span className="mt-1.5 inline-block rounded-full border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground">
              {report.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

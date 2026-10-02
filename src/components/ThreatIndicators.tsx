import { AlertTriangle } from "lucide-react";

export function ThreatIndicators({ indicators }: { indicators: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="text-sm font-semibold">Detected Indicators</h3>
      <ul className="mt-3 space-y-2">
        {indicators.map((indicator) => (
          <li key={indicator} className="flex items-center gap-2 text-sm text-muted-foreground">
            <AlertTriangle className="h-4 w-4 shrink-0 text-foreground" />
            {indicator}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { ShieldCheck, Info } from "lucide-react";

export function RecommendationCard({
  explanation,
  recommendation,
}: {
  explanation: string;
  recommendation: string;
}) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold">
          <Info className="h-4 w-4" />
          Why is this suspicious?
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{explanation}</p>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold">
          <ShieldCheck className="h-4 w-4" />
          Recommended Action
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{recommendation}</p>
      </div>
    </div>
  );
}

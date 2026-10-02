import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ShieldCheck } from "lucide-react";
import { reviewedAlerts } from "@/services/citizen-services";
export const Route = createFileRoute("/alerts")({ component: AlertsPage });
function AlertsPage() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-800">
          South Chennai · Demo data
        </p>
        <h1 className="mt-2 text-3xl font-bold">Local threat alerts</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          These alerts are reviewed platform information. A community submission is not a confirmed
          campaign.
        </p>
        <div className="mt-6 space-y-4">
          {reviewedAlerts.map((a) => (
            <article key={a.alertId} className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-700 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-900">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Reviewed Alert
                  </span>
                  <h2 className="mt-3 text-xl font-semibold">{a.title}</h2>
                  <p className="mt-1 flex items-center gap-1 text-sm text-slate-600">
                    <MapPin className="h-4 w-4" />
                    {a.area} · {a.category}
                  </p>
                </div>
                <p className="text-xs text-slate-500">Reviewed {a.reviewedAt}</p>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-700">{a.observedPattern}</p>
              <Link
                to="/alerts/$id"
                params={{ id: a.alertId }}
                className="mt-4 inline-block text-sm font-semibold text-sky-900 underline"
              >
                View alert details
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Community submissions are handled separately and are never shown as reviewed alerts.
        </p>
      </main>
    </>
  );
}

import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { MapPin, ShieldCheck } from "lucide-react";
import { reviewedAlerts } from "@/services/citizen-services";
export const Route = createFileRoute("/alerts/$id")({ component: AlertDetailPage });
function AlertDetailPage() {
  const { id } = useParams({ from: "/alerts/$id" });
  const alert = reviewedAlerts.find((a) => a.alertId === id);
  return (
    <>
      <main className="mx-auto max-w-3xl px-4 py-10">
        {!alert ? (
          <>
            <h1 className="text-2xl font-bold">Alert not found</h1>
            <Link to="/alerts" className="mt-4 inline-block underline">
              Back to local alerts
            </Link>
          </>
        ) : (
          <>
            <Link to="/alerts" className="text-sm font-medium text-sky-900 underline">
              ← Scam Alerts
            </Link>
            <article className="mt-5 rounded-xl border bg-white p-5 sm:p-7">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-700 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-900">
                <ShieldCheck className="h-3.5 w-3.5" />
                Reviewed Alert
              </span>
              <h1 className="mt-4 text-2xl font-bold">{alert.title}</h1>
              <p className="mt-2 flex items-center gap-1 text-sm text-slate-600">
                <MapPin className="h-4 w-4" />
                {alert.area} · {alert.category}
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Reviewed {alert.reviewedAt} · Demo platform information
              </p>
              <section className="mt-7 border-t pt-5">
                <h2 className="font-semibold">Observed pattern</h2>
                <p className="mt-2 leading-7 text-slate-700">{alert.observedPattern}</p>
              </section>
              <section className="mt-6">
                <h2 className="font-semibold">Common indicators</h2>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-700">
                  <li>Unexpected urgency or time pressure</li>
                  <li>Request to use a link sent in a message</li>
                  <li>Request for payment or sensitive credentials</li>
                </ul>
              </section>
              <section className="mt-6 rounded-lg border border-sky-200 bg-sky-50 p-4">
                <h2 className="font-semibold">What residents can do</h2>
                <p className="mt-2 text-sm leading-6">{alert.residentAction}</p>
              </section>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/"
                  className="rounded-lg bg-sky-900 px-4 py-2.5 text-sm font-medium text-white"
                >
                  Check a message
                </Link>
                <Link to="/report" className="rounded-lg border px-4 py-2.5 text-sm font-medium">
                  Report this pattern
                </Link>
              </div>
              <p className="mt-5 text-xs text-slate-500">
                This reviewed alert contains no private citizen information.
              </p>
            </article>
          </>
        )}
      </main>
    </>
  );
}

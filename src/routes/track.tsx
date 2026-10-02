import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, CircleCheck, Clock3, Inbox } from "lucide-react";
import { getMockReports, type CitizenReport } from "@/services/citizen-services";
export const Route = createFileRoute("/track")({ component: TrackPage });
function TrackPage() {
  const [id, setId] = useState("");
  const [report, setReport] = useState<CitizenReport | null>(null);
  const [searched, setSearched] = useState(false);
  const lookup = () => {
    setSearched(true);
    setReport(
      getMockReports().find((r) => r.reportId.toLowerCase() === id.trim().toLowerCase()) ?? null,
    );
  };
  const steps = ["Received", "Under review", "Reviewed"];
  const current = report ? steps.indexOf(report.status) : -1;
  return (
    <>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-800">
          Report status
        </p>
        <h1 className="mt-2 text-3xl font-bold">Track my report</h1>
        <p className="mt-2 text-slate-600">
          Enter the THG reference ID shown after submission. No account is required.
        </p>
        <div className="mt-6 flex gap-2">
          <label htmlFor="report-id" className="sr-only">
            THG reference ID
          </label>
          <input
            id="report-id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && lookup()}
            placeholder="e.g. THG-2026-4K2M8P"
            className="min-w-0 flex-1 rounded-lg border px-3 py-3"
          />
          <button
            onClick={lookup}
            className="flex items-center gap-2 rounded-lg bg-sky-900 px-4 py-3 font-medium text-white"
          >
            <Search className="h-4 w-4" />
            Look up
          </button>
        </div>
        {searched &&
          (!report ? (
            <p
              role="status"
              className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm"
            >
              No report matched that reference. Check the ID and try again.
            </p>
          ) : (
            <section className="mt-6 rounded-xl border bg-white p-5 shadow-sm">
              <div className="flex flex-wrap justify-between gap-3">
                <div>
                  <p className="font-mono text-sm font-semibold">{report.reportId}</p>
                  <h2 className="mt-1 text-lg font-semibold">
                    {report.category} · {report.area}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">{report.summary}</p>
                </div>
                <span className="h-fit rounded-full border bg-slate-50 px-3 py-1 text-sm font-medium">
                  {report.status}
                </span>
              </div>
              <ol className="mt-7 grid gap-3 sm:grid-cols-3">
                {steps.map((step, i) => (
                  <li
                    key={step}
                    className={`rounded-lg border p-4 ${i <= current ? "border-emerald-700 bg-emerald-50" : "bg-slate-50"}`}
                  >
                    <div className="flex items-center gap-2">
                      {i < current ? (
                        <CircleCheck className="h-4 w-4 text-emerald-800" />
                      ) : i === current ? (
                        <Clock3 className="h-4 w-4 text-sky-800" />
                      ) : (
                        <Inbox className="h-4 w-4 text-slate-500" />
                      )}
                      <span className="font-medium">{step}</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-600">
                      {i === 0
                        ? "Submission recorded"
                        : i === current
                          ? "Current workflow status"
                          : "Next workflow stage"}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs text-slate-500">
                Last updated: {new Date(report.lastUpdated).toLocaleString()}
              </p>
            </section>
          ))}
      </main>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { CitizenReport } from "@/services/citizen-services";
export const Route = createFileRoute("/report-submitted")({ component: SubmittedPage });
function SubmittedPage() {
  const [report, setReport] = useState<CitizenReport | null>(null);
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("thoondilguard-latest-report");
      if (raw) setReport(JSON.parse(raw) as CitizenReport);
    } catch {
      setReport(null);
    }
  }, []);
  return (
    <>
      <main className="mx-auto max-w-xl px-4 py-12">
        <div className="rounded-xl border bg-white p-6 text-center shadow-sm sm:p-10">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-800" />
          <h1 className="mt-4 text-2xl font-bold">Report received</h1>
          <p className="mt-2 text-slate-600">
            Your report is in the demo review workflow. A submission does not automatically create a
            public alert.
          </p>
          {report && (
            <div className="mt-6 rounded-lg bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Your reference ID</p>
              <p className="mt-1 font-mono text-xl font-bold">{report.reportId}</p>
              <p className="mt-2 text-sm text-slate-600">
                Keep this ID to check the report status.
              </p>
            </div>
          )}
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/track" className="rounded-lg bg-sky-900 px-4 py-3 font-medium text-white">
              Track my report
            </Link>
            <Link to="/" className="rounded-lg border px-4 py-3 font-medium">
              Return to check portal
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

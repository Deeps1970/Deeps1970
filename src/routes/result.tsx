import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Flag, RotateCcw } from "lucide-react";
import { loadResult, type AnalysisResult } from "@/lib/mock-analysis";
import type { Assessment } from "@/services/citizen-services";
export const Route = createFileRoute("/result")({ component: ResultPage });
function ResultPage() {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const found = loadResult();
    if (!found) {
      navigate({ to: "/" });
      return;
    }
    setResult(found);
  }, [navigate]);
  if (!result) return null;
  const assessment: Assessment =
    result.score >= 60
      ? "high-concern"
      : result.score >= 25
        ? "needs-verification"
        : "no-strong-warning-signs";
  const title =
    assessment === "high-concern"
      ? "High concern"
      : assessment === "needs-verification"
        ? "Needs verification"
        : "No strong warning signs found";
  const color =
    assessment === "high-concern"
      ? "border-red-300 bg-red-50 text-red-950"
      : assessment === "needs-verification"
        ? "border-amber-300 bg-amber-50 text-amber-950"
        : "border-emerald-300 bg-emerald-50 text-emerald-950";
  const scoreColor =
    assessment === "high-concern"
      ? "bg-red-700"
      : assessment === "needs-verification"
        ? "bg-amber-600"
        : "bg-emerald-700";
  const actions =
    assessment === "high-concern"
      ? [
          "Do not open the link or reply.",
          "Never share an OTP, password, PIN, or full bank credentials.",
          "Verify through the service’s official app or a trusted phone number.",
        ]
      : [
          "Verify unexpected requests through an official channel.",
          "Do not share passwords, PINs, or OTPs.",
        ];
  return (
    <>
      <main className="mx-auto max-w-3xl px-4 py-8">
        <Link to="/" className="text-sm font-medium text-sky-900 underline">
          ← Check another message
        </Link>
        <section
          aria-label="Risk score"
          className={`mt-5 rounded-xl border p-5 text-center sm:p-6 ${color}`}
        >
          <p className="text-xs font-semibold uppercase tracking-widest">Risk score</p>
          <p className="mt-1 flex items-baseline justify-center gap-2">
            <span className="text-5xl font-bold tabular-nums">{result.score}</span>
            <span className="text-lg font-medium opacity-75">/ 100</span>
          </p>
          <span className="mt-3 inline-flex rounded-full border border-current px-4 py-1 text-sm font-semibold">
            {title}
          </span>
          <div
            className="mx-auto mt-4 h-2 max-w-md overflow-hidden rounded-full bg-white/80"
            role="meter"
            aria-label="Risk score out of 100"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={result.score}
          >
            <div
              className={`h-full rounded-full ${scoreColor}`}
              style={{ width: `${result.score}%` }}
            />
          </div>
          <p className="mt-3 text-xs opacity-80">
            Prototype signal score, not a probability or a definitive verdict.
          </p>
        </section>
        <section className={`mt-5 rounded-xl border p-5 sm:p-6 ${color}`}>
          <p className="text-xs font-semibold uppercase tracking-widest">
            Demo assessment · not a definitive verdict
          </p>
          <h1 className="mt-2 text-2xl font-bold">{title}</h1>
          <p className="mt-2 leading-6">
            {assessment === "high-concern"
              ? "Several indicators commonly associated with phishing or impersonation were observed."
              : assessment === "needs-verification"
                ? "Some details deserve a closer look. The available signals are not conclusive."
                : "No strong warning signs were found in the submitted content. This does not guarantee it is safe."}
          </p>
        </section>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <section className="rounded-xl border bg-white p-5">
            <h2 className="font-semibold">What we observed</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {result.indicators.map((x) => (
                <li key={x} className="flex gap-2">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t pt-3 text-sm leading-6 text-slate-600">
              {result.explanation}
            </p>
          </section>
          <section className="rounded-xl border bg-white p-5">
            <h2 className="font-semibold">What remains unverified</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              <li>The sender’s identity and intent have not been independently verified.</li>
              <li>This demo does not check live website reputation or confirm active campaigns.</li>
            </ul>
            <h2 className="mt-5 font-semibold">What to do next</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {actions.map((x) => (
                <li key={x} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-800" />
                  {x}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <section className="mt-4 rounded-xl border bg-slate-50 p-5">
          <h2 className="font-semibold">Why this result?</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            The demo checks for familiar signals such as urgency, credential requests, and unusual
            link structure. These clues can help explain risk, but they do not establish who sent a
            message or whether a site is malicious.
          </p>
        </section>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/report"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-900 px-4 py-3 font-semibold text-white"
          >
            <Flag className="h-4 w-4" />
            Report this message
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border bg-white px-4 py-3 font-medium"
          >
            <RotateCcw className="h-4 w-4" />
            Check another message
          </Link>
          <Link
            to="/alerts"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-sky-900"
          >
            Scam Alerts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </>
  );
}

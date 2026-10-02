import { Link } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2, ExternalLink, ShieldCheck, X } from "lucide-react";
import type { DemoPage, ExtensionAnalysisResult, ExtensionAssessment } from "../types/extension";

const assessmentLabels: Record<ExtensionAssessment, string> = {
  "high-concern": "High concern",
  "needs-verification": "Needs verification",
  "no-strong-warning": "No strong warning signs found",
};

const assessmentStyles: Record<ExtensionAssessment, string> = {
  "high-concern": "border-red-300 bg-red-50 text-red-950",
  "needs-verification": "border-amber-300 bg-amber-50 text-amber-950",
  "no-strong-warning": "border-emerald-300 bg-emerald-50 text-emerald-950",
};

export function ExtensionHeader() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 pb-3">
      <div className="flex items-center gap-2 font-semibold tracking-tight text-slate-950">
        <ShieldCheck aria-hidden="true" className="h-5 w-5 text-sky-900" />
        <span>ThoondilGuard</span>
        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
          EXTENSION PREVIEW
        </span>
      </div>
      <Link
        to="/"
        aria-label="Close extension preview"
        className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-800"
      >
        <X aria-hidden="true" className="h-4 w-4" />
      </Link>
    </header>
  );
}

export function PrivacyNotice({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex gap-2 rounded-lg border border-sky-200 bg-sky-50 p-3 text-xs leading-5 text-sky-950">
      <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
      <p>
        <strong>Manual check only.</strong>{" "}
        {compact
          ? "Nothing is scanned automatically. Analysis starts only when you click Check This Page."
          : "ThoondilGuard does not monitor your browsing. This prototype uses the URL only after you request a check."}
      </p>
    </div>
  );
}

export function CurrentPageCard({ page }: { page: DemoPage }) {
  let hostname = page.url;
  try {
    hostname = new URL(page.url).hostname || page.url;
  } catch {
    // The browser settings demo is intentionally not an HTTP URL.
  }
  return (
    <section
      aria-labelledby="extension-current-page"
      className="rounded-lg border border-slate-200 bg-white p-3"
    >
      <p
        id="extension-current-page"
        className="text-[11px] font-semibold uppercase tracking-wider text-slate-500"
      >
        Current page
      </p>
      <h2 className="mt-1 truncate text-sm font-semibold text-slate-950" title={page.title}>
        {page.title}
      </h2>
      <p className="mt-0.5 text-xs font-medium text-slate-700">{hostname}</p>
      <p className="mt-1 truncate text-xs text-slate-500" title={page.url}>
        {page.url}
      </p>
    </section>
  );
}

export function AssessmentBadge({ assessment }: { assessment: ExtensionAssessment }) {
  const Icon = assessment === "no-strong-warning" ? CheckCircle2 : AlertTriangle;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${assessmentStyles[assessment]}`}
    >
      <Icon aria-hidden="true" className="h-3.5 w-3.5" />
      {assessmentLabels[assessment]}
    </span>
  );
}

export function AnalysisProgress({ step }: { step: number }) {
  const steps = ["Reading page address", "Checking suspicious indicators", "Preparing assessment"];
  return (
    <section
      aria-live="polite"
      aria-label="Manual page check in progress"
      className="rounded-lg border border-slate-200 bg-white p-4"
    >
      <h2 className="text-sm font-semibold">Checking this page…</h2>
      <p className="mt-1 text-xs text-slate-600">Manual check requested by you</p>
      <ol className="mt-4 space-y-3">
        {steps.map((label, index) => (
          <li
            key={label}
            className={`flex items-center gap-2 text-xs ${index <= step ? "text-slate-900" : "text-slate-400"}`}
          >
            <span className="flex h-4 w-4 items-center justify-center">
              {index < step ? (
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-emerald-700" />
              ) : index === step ? (
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-sky-800" />
              ) : (
                <span className="h-2 w-2 rounded-full bg-slate-300" />
              )}
            </span>
            {label}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function FindingsList({ items }: { items: string[] }) {
  return (
    <ul className="mt-1.5 space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-xs leading-4 text-slate-700">
          <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ExtensionFooter() {
  return (
    <footer className="border-t border-slate-200 pt-3 text-center text-[11px] text-slate-500">
      Manual check only · No browsing history is collected
      <span className="mt-1 block">
        Prototype preview · Installable browser download is not available yet
      </span>
    </footer>
  );
}

export function AssessmentSummary({ result }: { result: ExtensionAnalysisResult }) {
  const statusColor =
    result.assessment === "high-concern"
      ? "border-red-300 bg-red-50"
      : result.assessment === "needs-verification"
        ? "border-amber-300 bg-amber-50"
        : "border-emerald-300 bg-emerald-50";
  const scoreColor =
    result.assessment === "high-concern"
      ? "bg-red-700"
      : result.assessment === "needs-verification"
        ? "bg-amber-600"
        : "bg-emerald-700";
  return (
    <section className={`rounded-lg border p-3 ${statusColor}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <AssessmentBadge assessment={result.assessment} />
        <span className="text-xs font-semibold tabular-nums text-slate-700">
          {result.score}/100
        </span>
      </div>
      <div
        className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/80"
        role="meter"
        aria-label="Mock risk score out of 100"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={result.score}
      >
        <div
          className={`h-full rounded-full ${scoreColor}`}
          style={{ width: `${result.score}%` }}
        />
      </div>
      <p className="mt-2 text-xs leading-4 text-slate-800">{result.summary}</p>
    </section>
  );
}

export function OpenWebsiteLink() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-1 text-xs font-medium text-sky-900 underline underline-offset-2"
    >
      Open ThoondilGuard <ExternalLink aria-hidden="true" className="h-3 w-3" />
    </Link>
  );
}

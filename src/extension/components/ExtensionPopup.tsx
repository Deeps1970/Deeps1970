import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, Check } from "lucide-react";
import { createMockReport } from "@/services/citizen-services";
import { saveResult, type AnalysisResult } from "@/lib/mock-analysis";
import {
  analyzeExtensionPage,
  MockAnalysisError,
  UnsupportedPageError,
} from "../services/mockExtensionAnalysis";
import {
  type CachedPageCheck,
  type DemoPage,
  type ExtensionAnalysisResult,
  type ExtensionReportDraft,
  DEMO_PAGES,
  REPORT_CATEGORIES,
} from "../types/extension";
import {
  AnalysisProgress,
  AssessmentBadge,
  AssessmentSummary,
  CurrentPageCard,
  ExtensionFooter,
  ExtensionHeader,
  FindingsList,
  OpenWebsiteLink,
  PrivacyNotice,
} from "./PopupParts";

type PopupView =
  | "default"
  | "already-checked"
  | "loading"
  | "result"
  | "details"
  | "report"
  | "report-submitted"
  | "error"
  | "unsupported";

const cacheKey = "thoondilguard-extension-checks";

function readChecks(): CachedPageCheck[] {
  try {
    return JSON.parse(sessionStorage.getItem(cacheKey) ?? "[]") as CachedPageCheck[];
  } catch {
    return [];
  }
}

function getCachedCheck(url: string) {
  return readChecks().find((check) => check.url === url);
}

function toWebsiteResult(page: DemoPage, result: ExtensionAnalysisResult): AnalysisResult {
  const level: AnalysisResult["level"] =
    result.score >= 85
      ? "CRITICAL"
      : result.score >= 60
        ? "HIGH RISK"
        : result.score >= 30
          ? "MEDIUM RISK"
          : "LOW RISK";
  return {
    score: result.score,
    level,
    threatType: result.assessment === "high-concern" ? "Possible phishing" : "Website indicators",
    indicators:
      result.indicators.length > 0 ? result.indicators : ["No strong warning signs identified"],
    explanation: result.summary,
    recommendation: result.recommendedActions.join(" "),
    domain: result.domain,
    input: page.url,
    kind: "url",
  };
}

export function ExtensionPopup() {
  const navigate = useNavigate();
  const [page, setPage] = useState<DemoPage>(DEMO_PAGES[0]!);
  const [view, setView] = useState<PopupView>("default");
  const [result, setResult] = useState<ExtensionAnalysisResult | null>(null);
  const [checkedAt, setCheckedAt] = useState("");
  const [progressStep, setProgressStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [category, setCategory] = useState<string>(REPORT_CATEGORIES[0]);
  const [description, setDescription] = useState("");
  const [reportId, setReportId] = useState("");

  useEffect(() => {
    const cached = getCachedCheck(page.url);
    if (cached) {
      setResult(cached.result);
      setCheckedAt(cached.checkedAt);
      setView("already-checked");
    }
  }, [page.url]);

  const selectDemoPage = (url: string) => {
    const nextPage = DEMO_PAGES.find((item) => item.url === url);
    if (!nextPage) return;
    setPage(nextPage);
    setResult(null);
    setCheckedAt("");
    setErrorMessage("");
    setView("default");
  };

  const checkThisPage = async () => {
    setView("loading");
    setProgressStep(0);
    setErrorMessage("");
    const progressTimer = window.setInterval(() => {
      setProgressStep((current) => Math.min(2, current + 1));
    }, 460);
    try {
      const analysis = await analyzeExtensionPage(page.url);
      const timestamp = new Date().toISOString();
      const cached: CachedPageCheck = { url: page.url, result: analysis, checkedAt: timestamp };
      const otherChecks = readChecks().filter((check) => check.url !== page.url);
      sessionStorage.setItem(cacheKey, JSON.stringify([cached, ...otherChecks]));
      setResult(analysis);
      setCheckedAt(timestamp);
      setView("result");
    } catch (error) {
      if (error instanceof UnsupportedPageError) {
        setView("unsupported");
      } else {
        setErrorMessage(
          error instanceof MockAnalysisError
            ? "Unable to check this page right now."
            : "The check could not be completed. Please try again.",
        );
        setView("error");
      }
    } finally {
      window.clearInterval(progressTimer);
    }
  };

  const checkAgain = () => {
    sessionStorage.setItem(
      cacheKey,
      JSON.stringify(readChecks().filter((check) => check.url !== page.url)),
    );
    setResult(null);
    setView("default");
    void checkThisPage();
  };

  const submitReport = (draft: ExtensionReportDraft) => {
    if (!result) return;
    const report = createMockReport({
      category: draft.category,
      area: "Browser extension",
      summary: draft.description.trim() || `Suspicious page reported: ${result.domain}`,
    });
    sessionStorage.setItem("thoondilguard-latest-report", JSON.stringify(report));
    setReportId(report.reportId);
    setView("report-submitted");
  };

  const openFullAnalysis = () => {
    if (!result) return;
    saveResult(toWebsiteResult(page, result));
    navigate({ to: "/result" });
  };

  return (
    <main className="mx-auto w-full max-w-[400px] px-3 py-4 sm:px-4">
      <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm sm:p-4">
        <ExtensionHeader />
        <PrivacyNotice compact />
        <CurrentPageCard page={page} />

        {view === "default" && (
          <>
            <button
              type="button"
              onClick={() => void checkThisPage()}
              className="w-full rounded-lg bg-sky-900 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
            >
              CHECK THIS PAGE
            </button>
            <p className="text-center text-[11px] text-slate-600">
              This page is analyzed only when you ask ThoondilGuard to check it.
            </p>
            <DemoPagePicker page={page} onSelect={selectDemoPage} />
          </>
        )}

        {view === "already-checked" && result && (
          <>
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <p className="text-sm font-semibold">This page was checked recently.</p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                <AssessmentBadge assessment={result.assessment} />
                <span className="text-[11px] text-slate-500">
                  Last checked {new Date(checkedAt).toLocaleTimeString()}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={checkAgain}
                className="rounded-lg bg-sky-900 px-3 py-2.5 text-xs font-semibold text-white hover:bg-sky-800"
              >
                CHECK AGAIN
              </button>
              <button
                type="button"
                onClick={() => setView("details")}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-xs font-semibold hover:bg-slate-100"
              >
                VIEW DETAILS
              </button>
            </div>
            <DemoPagePicker page={page} onSelect={selectDemoPage} />
          </>
        )}

        {view === "loading" && <AnalysisProgress step={progressStep} />}

        {view === "result" && result && (
          <>
            <AssessmentSummary result={result} />
            <CompactSection title="What we observed" items={result.observedFindings.slice(0, 3)} />
            <CompactSection title="What remains unverified" items={result.unverified.slice(0, 1)} />
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                What to do next
              </h2>
              <p className="mt-1.5 text-xs leading-4 text-slate-700">
                {result.recommendedActions[0] ?? "Continue to use normal caution."}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setView("details")}
                className="rounded-lg bg-sky-900 px-3 py-2.5 text-xs font-semibold text-white hover:bg-sky-800"
              >
                VIEW DETAILS
              </button>
              <button
                type="button"
                onClick={() => setView("report")}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-xs font-semibold hover:bg-slate-100"
              >
                REPORT
              </button>
            </div>
          </>
        )}

        {view === "details" && result && (
          <>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setView("result")}
                aria-label="Back to assessment"
                className="rounded-md p-1 text-slate-600 hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-800"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              </button>
              <h2 className="text-sm font-semibold">Check details</h2>
            </div>
            <AssessmentSummary result={result} />
            <CompactSection
              title="Observed indicators"
              items={result.indicators.length ? result.indicators : result.observedFindings}
            />
            <CompactSection title="URL / domain signals" items={result.urlSignals} />
            <CompactSection title="What remains unverified" items={result.unverified} />
            <CompactSection title="Recommended action" items={result.recommendedActions} />
            <button
              type="button"
              onClick={openFullAnalysis}
              className="w-full rounded-lg bg-sky-900 px-3 py-2.5 text-xs font-semibold text-white hover:bg-sky-800"
            >
              OPEN FULL ANALYSIS
            </button>
            <button
              type="button"
              onClick={() => setView("report")}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-xs font-semibold hover:bg-slate-100"
            >
              REPORT
            </button>
          </>
        )}

        {view === "report" && (
          <ReportPanel
            page={page}
            category={category}
            description={description}
            onCategoryChange={setCategory}
            onDescriptionChange={setDescription}
            onBack={() => setView(result ? "result" : "default")}
            onSubmit={() => submitReport({ category, description })}
          />
        )}

        {view === "report-submitted" && (
          <section
            role="status"
            className="space-y-3 rounded-lg border border-emerald-300 bg-emerald-50 p-4"
          >
            <div className="flex items-center gap-2 text-emerald-950">
              <Check aria-hidden="true" className="h-5 w-5" />
              <h2 className="text-sm font-semibold">Report received.</h2>
            </div>
            <p className="text-xs leading-5 text-slate-700">
              Use this reference ID to track your report in ThoondilGuard.
            </p>
            <p className="rounded-md border border-emerald-200 bg-white p-2 text-center font-mono text-sm font-bold text-slate-950">
              {reportId}
            </p>
            <button
              type="button"
              onClick={() => navigate({ to: "/track" })}
              className="w-full rounded-lg bg-sky-900 px-3 py-2.5 text-xs font-semibold text-white hover:bg-sky-800"
            >
              TRACK THIS REPORT
            </button>
            <OpenWebsiteLink />
          </section>
        )}

        {view === "error" && (
          <section
            role="alert"
            className="space-y-3 rounded-lg border border-red-300 bg-red-50 p-4"
          >
            <div className="flex items-start gap-2 text-red-950">
              <AlertTriangle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              <div>
                <h2 className="text-sm font-semibold">Unable to check this page right now.</h2>
                <p className="mt-1 text-xs text-slate-700">
                  {errorMessage} No technical details are shared in this preview.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => void checkThisPage()}
              className="w-full rounded-lg bg-sky-900 px-3 py-2.5 text-xs font-semibold text-white hover:bg-sky-800"
            >
              TRY AGAIN
            </button>
            <OpenWebsiteLink />
          </section>
        )}

        {view === "unsupported" && (
          <section className="space-y-3 rounded-lg border border-amber-300 bg-amber-50 p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-amber-900"
              />
              <div>
                <h2 className="text-sm font-semibold">
                  This page can’t be checked from the extension.
                </h2>
                <p className="mt-1 text-xs leading-5 text-slate-700">
                  Browser settings and other non-web pages are not supported. You can open
                  ThoondilGuard and paste a public URL to analyze it.
                </p>
              </div>
            </div>
            <OpenWebsiteLink />
          </section>
        )}

        <ExtensionFooter />
      </div>
    </main>
  );
}

function DemoPagePicker({ page, onSelect }: { page: DemoPage; onSelect: (url: string) => void }) {
  return (
    <details className="rounded-md border border-slate-200 bg-white px-3 py-2">
      <summary className="cursor-pointer text-[11px] font-medium text-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-800">
        Preview another mock state
      </summary>
      <label htmlFor="demo-page" className="mt-2 block text-[11px] text-slate-600">
        Demo page
      </label>
      <select
        id="demo-page"
        value={page.url}
        onChange={(event) => onSelect(event.target.value)}
        className="mt-1 w-full rounded-md border border-slate-300 bg-white px-2 py-2 text-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-800"
      >
        {DEMO_PAGES.map((item) => (
          <option key={item.url} value={item.url}>
            {item.label}
          </option>
        ))}
      </select>
      <p className="mt-1 text-[10px] text-slate-500">
        Demo-only outcomes; no page is contacted or scanned.
      </p>
    </details>
  );
}

function CompactSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-3">
      <h2 className="text-[11px] font-semibold uppercase tracking-wide text-slate-700">{title}</h2>
      <FindingsList items={items} />
    </section>
  );
}

function ReportPanel({
  page,
  category,
  description,
  onCategoryChange,
  onDescriptionChange,
  onBack,
  onSubmit,
}: {
  page: DemoPage;
  category: string;
  description: string;
  onCategoryChange: (category: string) => void;
  onDescriptionChange: (description: string) => void;
  onBack: () => void;
  onSubmit: () => void;
}) {
  return (
    <section className="space-y-3 rounded-lg border border-slate-200 bg-white p-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back from report"
          className="rounded-md p-1 text-slate-600 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-800"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        </button>
        <h2 className="text-sm font-semibold">Report this suspicious page</h2>
      </div>
      <label
        htmlFor="extension-report-category"
        className="block text-xs font-medium text-slate-700"
      >
        Category
      </label>
      <select
        id="extension-report-category"
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        className="-mt-2 w-full rounded-md border border-slate-300 bg-white px-2.5 py-2 text-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-800"
      >
        {REPORT_CATEGORIES.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <p className="text-[11px] text-slate-600">
        Page: <span className="break-all font-medium text-slate-800">{page.url}</span>
      </p>
      <label
        htmlFor="extension-report-description"
        className="block text-xs font-medium text-slate-700"
      >
        Short description <span className="font-normal">(optional)</span>
      </label>
      <textarea
        id="extension-report-description"
        value={description}
        maxLength={160}
        onChange={(event) => onDescriptionChange(event.target.value)}
        rows={2}
        placeholder="Describe the suspicious pattern only."
        className="-mt-2 w-full resize-none rounded-md border border-slate-300 px-2.5 py-2 text-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-800"
      />
      <p className="rounded-md border border-amber-300 bg-amber-50 p-2 text-[11px] leading-4 text-amber-950">
        Do not include passwords, OTPs, PINs, or complete banking credentials. This mock report is
        not automatically made public.
      </p>
      <button
        type="button"
        onClick={onSubmit}
        className="w-full rounded-lg bg-sky-900 px-3 py-2.5 text-xs font-semibold text-white hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
      >
        CONTINUE TO REPORT
      </button>
    </section>
  );
}

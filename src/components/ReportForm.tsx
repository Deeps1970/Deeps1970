import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AlertTriangle, Send } from "lucide-react";
import { createMockReport } from "@/services/citizen-services";

const AREAS = [
  "Guindy",
  "Velachery",
  "Adyar",
  "Tambaram",
  "Sholinganallur",
  "Perungudi",
  "Saidapet",
];
const CATEGORIES = [
  "Phishing",
  "Fake KYC",
  "Payment scam",
  "Job scam",
  "Delivery scam",
  "Investment scam",
  "Other",
];
function redact(text: string) {
  return text
    .replace(
      /\b(?:otp|one[- ]time (?:password|code)|password|passcode|pin|cvv)\s*(?:is|:|=)?\s*[\w-]+/gi,
      "[redacted sensitive detail]",
    )
    .replace(
      /\b(?:account(?: number)?|card(?: number)?|banking credentials)\s*(?:is|:|=)?\s*[\w -]{4,24}/gi,
      "[redacted financial detail]",
    )
    .replace(/\b\d{6}\b/g, "[redacted code]")
    .replace(/\b(?:\d[ -]*?){13,19}\b/g, "[redacted number]")
    .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "[redacted email]");
}

function redactUrl(value: string) {
  return value.replace(
    /([?&](?:otp|token|password|pin|key|code|session)=)[^&#\s]+/gi,
    "$1[redacted]",
  );
}
export function ReportForm({
  initialMessage = "",
  initialUrl = "",
}: {
  initialMessage?: string;
  initialUrl?: string;
}) {
  const [area, setArea] = useState<string>("Guindy");
  const [category, setCategory] = useState<string>("Phishing");
  const [message, setMessage] = useState(redact(initialMessage));
  const [url, setUrl] = useState(initialUrl);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [reviewing, setReviewing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const submit = () => {
    if (!consent) {
      setError("Please confirm you have removed information you do not want to share.");
      return;
    }
    const report = createMockReport({
      area,
      category,
      summary: message.trim().slice(0, 120) || `Link report: ${url}`,
    });
    sessionStorage.setItem("thoondilguard-latest-report", JSON.stringify(report));
    setSubmitted(true);
    navigate({ to: "/report-submitted" });
  };
  if (submitted) return null;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!reviewing) {
          if (!consent) {
            setError("Please confirm you have removed information you do not want to share.");
            return;
          }
          setReviewing(true);
          setError("");
          return;
        }
        submit();
      }}
      className="space-y-5 rounded-xl border bg-white p-4 shadow-sm sm:p-6"
    >
      <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <div className="flex gap-2">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          <p>
            <strong>Privacy reminder:</strong> Never include a live OTP, password, PIN, full card
            number, or complete banking credentials. Your report is a demo submission and will not
            automatically publish an alert.
          </p>
        </div>
      </div>
      {reviewing ? (
        <>
          <h2 className="text-lg font-semibold">Review your redacted report</h2>
          <div className="space-y-3 rounded-lg bg-slate-50 p-4 text-sm">
            <p>
              <strong>Area:</strong> {area}
            </p>
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Incident details:</strong> {message.trim() || "Not provided"}
            </p>
            <p>
              <strong>Link:</strong> {url || "Not provided"}
            </p>
          </div>
          <p className="text-sm text-slate-600">
            This demo stores the summary locally in this browser. It is not sent to an authority and
            does not create an alert.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => setReviewing(false)}
              className="rounded-lg border px-4 py-3 font-medium"
            >
              Edit report
            </button>
            <button
              type="submit"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-sky-900 px-4 py-3 font-semibold text-white"
            >
              <Send className="h-4 w-4" />
              Submit report
            </button>
          </div>
          {error && (
            <p role="alert" className="text-sm text-red-700">
              {error}
            </p>
          )}
        </>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="area" className="text-sm font-medium">
                Area
              </label>
              <select
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="mt-1.5 w-full rounded-lg border bg-white px-3 py-2.5"
              >
                {AREAS.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
              <p className="mt-1 text-xs text-slate-500">South Chennai demo locations</p>
            </div>
            <div>
              <label htmlFor="category" className="text-sm font-medium">
                Report category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1.5 w-full rounded-lg border bg-white px-3 py-2.5"
              >
                {CATEGORIES.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="report-message" className="text-sm font-medium">
              Message or incident details{" "}
              <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <textarea
              id="report-message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(redact(e.target.value))}
              placeholder="Share only details needed to understand the suspicious pattern."
              className="mt-1.5 w-full rounded-lg border px-3 py-3"
            />
            <p className="mt-1 text-xs text-slate-500">
              Possible six-digit codes, long numbers, and email addresses are redacted in this demo
              preview.
            </p>
          </div>
          <div>
            <label htmlFor="report-url" className="text-sm font-medium">
              Suspicious link <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <input
              id="report-url"
              value={url}
              onChange={(e) => setUrl(redactUrl(e.target.value))}
              placeholder="https://…"
              className="mt-1.5 w-full rounded-lg border px-3 py-2.5"
            />
          </div>
          <label className="flex items-start gap-3 rounded-lg border p-3 text-sm">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-sky-900"
            />
            <span>
              I reviewed the content and removed sensitive information. I understand this submission
              is not automatically a public alert.
            </span>
          </label>
          {error && (
            <p role="alert" className="text-sm text-red-700">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-900 px-4 py-3 font-semibold text-white hover:bg-sky-800"
          >
            Review redacted report
          </button>
        </>
      )}
    </form>
  );
}

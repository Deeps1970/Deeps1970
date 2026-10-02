import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Link2 } from "lucide-react";
import { analyzeUrl, saveResult } from "@/lib/mock-analysis";

export const Route = createFileRoute("/url")({
  head: () => ({
    meta: [
      { title: "URL Analyzer — ThoondilGuard" },
      { name: "description", content: "Check a suspicious URL for phishing traits before you open it." },
      { property: "og:title", content: "URL Analyzer — ThoondilGuard" },
      { property: "og:description", content: "Check a suspicious URL for phishing traits before you open it." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: UrlPage,
});

function UrlPage() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onAnalyze = () => {
    if (!url.trim()) {
      setError("Paste a URL to analyze.");
      return;
    }
    saveResult(analyzeUrl(url.trim()));
    navigate({ to: "/result" });
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-xl font-bold tracking-tight">URL Analyzer</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Check a link for phishing traits before you open it.
      </p>
      <div className="mt-6 rounded-xl border border-border bg-card p-4 sm:p-6">
        <input
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => e.key === "Enter" && onAnalyze()}
          placeholder="Paste a suspicious URL..."
          className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
        />
        {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
        <button
          onClick={onAnalyze}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Link2 className="h-4 w-4" />
          Analyze URL
        </button>
      </div>
    </main>
  );
}

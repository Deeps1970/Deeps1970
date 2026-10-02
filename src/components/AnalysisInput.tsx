import { useState } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { ScanSearch, ImageUp, Link2 } from "lucide-react";
import { analyzeMessage, saveResult } from "@/lib/mock-analysis";

export function AnalysisInput() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onAnalyze = () => {
    if (!text.trim()) {
      setError("Paste a message or link to analyze.");
      return;
    }
    saveResult(analyzeMessage(text.trim()));
    navigate({ to: "/result" });
  };

  return (
    <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setError("");
        }}
        rows={6}
        placeholder="Paste a suspicious message or link..."
        className="w-full resize-y rounded-lg border border-input bg-background p-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
      <div className="mt-4 flex flex-col gap-3">
        <button
          onClick={onAnalyze}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ScanSearch className="h-4 w-4" />
          Analyze Threat
        </button>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          or
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link
            to="/screenshot"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            <ImageUp className="h-4 w-4" />
            Upload Screenshot
          </Link>
          <Link
            to="/url"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            <Link2 className="h-4 w-4" aria-hidden="true" />
            Analyze URL
          </Link>
        </div>
      </div>
    </div>
  );
}

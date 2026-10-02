import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ReportForm } from "@/components/ReportForm";
import { loadResult } from "@/lib/mock-analysis";

export const Route = createFileRoute("/report")({
  head: () => ({
    meta: [
      { title: "Report a Scam — ThoondilGuard" },
      {
        name: "description",
        content: "Report a phishing message or scam to warn others. No account required.",
      },
      { property: "og:title", content: "Report a Scam — ThoondilGuard" },
      {
        property: "og:description",
        content: "Report a phishing message or scam to warn others. No account required.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ReportPage,
});

function ReportPage() {
  const [prefill, setPrefill] = useState<{ message: string; url: string } | null>(null);

  useEffect(() => {
    const result = loadResult();
    if (result) {
      setPrefill({
        message: result.kind === "message" ? result.input : "",
        url: result.domain ?? "",
      });
    } else {
      setPrefill({ message: "", url: "" });
    }
  }, []);

  if (!prefill) return null;

  return (
    <>
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-xl font-bold tracking-tight">Report a Scam</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Share a redacted report for review. No account required; submitting does not automatically
          create a public alert.
        </p>
        <div className="mt-6">
          <ReportForm initialMessage={prefill.message} initialUrl={prefill.url} />
        </div>
      </main>
    </>
  );
}

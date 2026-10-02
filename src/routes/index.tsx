import { createFileRoute } from "@tanstack/react-router";
import { AnalysisInput } from "@/components/AnalysisInput";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ThoondilGuard — Check before you click" },
      {
        name: "description",
        content:
          "Free privacy-focused phishing and fraud detection. Analyze suspicious messages, links and screenshots instantly — no signup required.",
      },
      { property: "og:title", content: "ThoondilGuard — Check before you click" },
      {
        property: "og:description",
        content:
          "Analyze suspicious messages, links and screenshots for phishing and fraud. Free, no account needed.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Check before you click.</h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Analyze suspicious messages, links and screenshots for phishing and fraud.
        </p>
      </div>
      <div className="mt-8">
        <AnalysisInput />
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Free forever. No account. Your input is analyzed locally in this prototype.
      </p>
    </main>
  );
}

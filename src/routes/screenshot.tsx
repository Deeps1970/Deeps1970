import { createFileRoute } from "@tanstack/react-router";
import { ScreenshotUploader } from "@/components/ScreenshotUploader";

export const Route = createFileRoute("/screenshot")({
  head: () => ({
    meta: [
      { title: "Screenshot Analyzer — ThoondilGuard" },
      { name: "description", content: "Upload a screenshot of a suspicious message and check it for phishing and fraud." },
      { property: "og:title", content: "Screenshot Analyzer — ThoondilGuard" },
      { property: "og:description", content: "Upload a screenshot of a suspicious message and check it for phishing and fraud." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ScreenshotPage,
});

function ScreenshotPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-xl font-bold tracking-tight">Screenshot Analyzer</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Upload a screenshot of a suspicious message, email or website.
      </p>
      <div className="mt-6">
        <ScreenshotUploader />
      </div>
    </main>
  );
}

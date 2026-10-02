import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ImageUp, X, ScanSearch } from "lucide-react";
import { saveResult } from "@/lib/mock-analysis";
import { analyzeCitizenContent } from "@/services/citizen-services";

export function ScreenshotUploader() {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);
  const [extractedText, setExtractedText] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const acceptFile = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    setFileName(file.name);
    setExtractedText(
      "[Demo text extraction] Please enter or correct the visible message text here before analysis.",
    );
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const clear = () => {
    setPreview(null);
    setFileName("");
    setExtractedText("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const onAnalyze = async () => {
    if (!extractedText.trim() || extractedText.startsWith("[Demo text extraction]")) {
      setError("Review or replace the sample text with the words shown in your screenshot.");
      return;
    }
    setBusy(true);
    const result = await analyzeCitizenContent(extractedText, "screenshot");
    saveResult(result);
    navigate({ to: "/result" });
  };

  return (
    <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => acceptFile(e.target.files?.[0])}
      />
      {preview ? (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={preview}
              alt="Screenshot preview"
              className="max-h-96 w-full object-contain bg-background"
            />
          </div>
          <p className="truncate text-xs text-muted-foreground">{fileName}</p>
          <div>
            <label htmlFor="extracted-text" className="text-sm font-medium">
              Extracted text — review and correct
            </label>
            <textarea
              id="extracted-text"
              rows={5}
              value={extractedText}
              onChange={(e) => {
                setExtractedText(e.target.value);
                setError("");
              }}
              className="mt-1.5 w-full rounded-lg border border-input bg-background p-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              OCR is simulated in this prototype. Nothing is extracted automatically.
            </p>
            {error && (
              <p role="alert" className="mt-2 text-sm text-destructive">
                {error}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={onAnalyze}
              disabled={busy}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ScanSearch className="h-4 w-4" />
              {busy ? "Analyzing sample…" : "Analyze reviewed text"}
            </button>
            <button
              onClick={clear}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <X className="h-4 w-4" />
              Remove image
            </button>
          </div>
        </div>
      ) : (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            acceptFile(e.dataTransfer.files?.[0]);
          }}
          className={`flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed px-6 py-12 text-center transition-colors ${
            dragging ? "border-primary bg-accent" : "border-border"
          }`}
        >
          <ImageUp className="h-8 w-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Drag and drop a screenshot here, or</p>
          <button
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            Upload Screenshot
          </button>
        </div>
      )}
    </div>
  );
}

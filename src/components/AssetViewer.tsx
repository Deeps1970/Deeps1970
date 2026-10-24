import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download } from "lucide-react";
import { useEffect } from "react";
import { toDirectDropboxImageUrl } from "@/data/portfolioAssets";

export type AssetViewerItem = {
  url: string;
  title: string;
  kind?: "image" | "pdf" | "auto";
};

interface AssetViewerProps {
  asset: AssetViewerItem | null;
  onClose: () => void;
}

const detectKind = (url: string): "image" | "pdf" => {
  const lower = url.split("?")[0].toLowerCase();
  if (/\.(png|jpe?g|gif|webp|svg|bmp)$/.test(lower)) return "image";
  if (lower.includes("licdn.com") || lower.includes("media.licdn")) return "image";
  return "pdf";
};

// Build a Dropbox URL that serves raw bytes (no attachment header) so Google
// Docs Viewer can fetch and render it.
const toDropboxRawUrl = (url: string): string => {
  try {
    const u = new URL(url);
    if (u.hostname.includes("dropbox.com") || u.hostname.includes("dropboxusercontent.com")) {
      u.hostname = "dl.dropboxusercontent.com";
      u.searchParams.delete("dl");
      u.searchParams.set("raw", "1");
      return u.toString();
    }
  } catch {
    // ignore
  }
  return url;
};

const buildPdfEmbedUrl = (url: string): string => {
  const raw = toDropboxRawUrl(url);
  return `https://docs.google.com/viewer?url=${encodeURIComponent(raw)}&embedded=true`;
};

const AssetViewer = ({ asset, onClose }: AssetViewerProps) => {
  useEffect(() => {
    if (!asset) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [asset, onClose]);

  const direct = asset ? toDirectDropboxImageUrl(asset.url) ?? asset.url : "";
  const kind = asset ? (asset.kind && asset.kind !== "auto" ? asset.kind : detectKind(direct)) : "image";
  const embedSrc = kind === "pdf" && asset ? buildPdfEmbedUrl(asset.url) : direct;

  return (
    <AnimatePresence>
      {asset && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed z-50 inset-0 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-5xl h-[85vh] bg-card rounded-xl border border-border shadow-2xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-border bg-card/95 backdrop-blur">
                <h3 className="text-sm font-medium text-foreground truncate">{asset.title}</h3>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={direct}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
                  >
                    <ExternalLink size={12} />
                    Open
                  </a>
                  <a
                    href={direct}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
                  >
                    <Download size={12} />
                    Download
                  </a>
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-md border border-border hover:bg-muted transition-colors"
                    aria-label="Close"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-muted/30 overflow-auto flex items-center justify-center">
                {kind === "image" ? (
                  <img
                    src={direct}
                    alt={asset.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <iframe
                    src={embedSrc}
                    title={asset.title}
                    className="w-full h-full border-0 bg-white"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AssetViewer;
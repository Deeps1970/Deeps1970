import { Link } from "@tanstack/react-router";
import { Download, ShieldCheck } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex min-h-14 max-w-5xl flex-wrap items-center justify-between gap-y-2 px-4 py-2 sm:flex-nowrap">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <span>ThoondilGuard</span>
        </Link>
        <nav
          aria-label="Primary navigation"
          className="flex w-full flex-wrap items-center justify-center gap-1 text-sm sm:w-auto sm:justify-end"
        >
          <Link
            to="/"
            className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-medium", "aria-current": "page" }}
            activeOptions={{ exact: true }}
          >
            Analyze
          </Link>
          <Link
            to="/intelligence"
            className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-medium", "aria-current": "page" }}
          >
            Threat Intelligence
          </Link>
          <Link
            to="/report"
            className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-medium", "aria-current": "page" }}
          >
            Report Scam
          </Link>
          <Link
            to="/track"
            className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-medium", "aria-current": "page" }}
          >
            Track Report
          </Link>
          <Link
            to="/alerts"
            className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-medium", "aria-current": "page" }}
          >
            Scam Alerts
          </Link>
          <Link
            to="/extension"
            className="ml-1 inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            Get Browser Extension
          </Link>
        </nav>
      </div>
    </header>
  );
}

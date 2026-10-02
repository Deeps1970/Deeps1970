import { createFileRoute } from "@tanstack/react-router";
import { ExtensionPopup } from "@/extension/components/ExtensionPopup";

export const Route = createFileRoute("/extension")({ component: ExtensionPopup });

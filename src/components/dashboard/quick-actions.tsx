import { ButtonLink } from "@/app/components/ui/button-link";
import { StatusChip } from "./status-chip";
import type { QuickAction, Tone } from "./types";

const toneLabels: Record<Tone, string> = {
  neutral: "Available",
  positive: "Ready",
  warning: "Needs review",
  critical: "Needs attention",
};

export function QuickActions({ actions }: { actions: QuickAction[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {actions.map((action) => (
        <div
          key={action.title}
          className="group rounded-[24px] border border-white/10 bg-slate-900/80 p-5 motion-safe:transition hover:border-cyan-300/40 hover:bg-slate-900 flex flex-col justify-between"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-white">{action.title}</h3>
              <p className="helper-text mt-2">
                {action.description}
              </p>
            </div>
            <StatusChip tone={action.tone}>{toneLabels[action.tone]}</StatusChip>
          </div>
          <div className="mt-6 flex justify-end">
            <ButtonLink href={action.href} variant="secondary" size="md">
              View {action.title}
            </ButtonLink>
          </div>
        </div>
      ))}
    </div>
  );
}

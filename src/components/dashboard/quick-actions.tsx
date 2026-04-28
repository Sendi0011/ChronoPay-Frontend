import Link from "next/link";

import { StatusChip } from "./status-chip";
import type { QuickAction, Tone } from "./types";

const toneLabels: Record<Tone, string> = {
  neutral: "Available",
  positive: "Ready",
  warning: "Needs review",
  critical: "Needs attention",
};

function toElementId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function QuickActions({ actions }: { actions: QuickAction[] }) {
  return (
    <div
      className="grid gap-4 md:grid-cols-3"
      role="list"
      aria-label="Quick actions"
    >
      {actions.map((action, index) => {
        const actionId = `quick-action-${toElementId(action.title)}-${index + 1}`;
        const titleId = `${actionId}-title`;
        const positionId = `${actionId}-position`;
        const descriptionId = `${actionId}-description`;
        const statusId = `${actionId}-status`;
        const statusLabel = toneLabels[action.tone];

        return (
          <div key={`${action.title}-${index}`} role="listitem">
            <Link
              href={action.href}
              className="group block h-full rounded-[24px] border border-white/10 bg-slate-900/80 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-labelledby={`${titleId} ${positionId}`}
              aria-describedby={`${descriptionId} ${statusId}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 id={titleId} className="text-lg font-semibold text-white">
                    {action.title}
                  </h3>
                  <span id={positionId} className="sr-only">
                    workflow {index + 1} of {actions.length}
                  </span>
                  <p
                    id={descriptionId}
                    className="mt-2 text-sm leading-6 text-slate-300"
                  >
                    {action.description}
                  </p>
                </div>
                <StatusChip
                  id={statusId}
                  tone={action.tone}
                  aria-label={`${action.title} workflow status: ${statusLabel}`}
                >
                  {statusLabel}
                </StatusChip>
              </div>
              <p
                className="mt-5 text-sm font-medium text-cyan-200 transition group-hover:text-cyan-100"
                aria-hidden="true"
              >
                Open workflow
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

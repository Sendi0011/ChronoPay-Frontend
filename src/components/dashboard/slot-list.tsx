import { StatusChip } from "./status-chip";
import type { Slot } from "./types";

function mapTone(status: Slot["status"]) {
  if (status === "Healthy") {
    return "positive";
  }

  if (status === "Tight") {
    return "warning";
  }

  return "critical";
}

function toElementId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function SlotList({ slots }: { slots: Slot[] }) {
  return (
    <ul className="space-y-3" aria-label="Available time slots">
      {slots.map((slot, index) => {
        const slotId = `slot-${toElementId(slot.id)}-${index + 1}`;
        const titleId = `${slotId}-title`;
        const windowId = `${slotId}-window`;
        const statusId = `${slotId}-status`;
        const demandId = `${slotId}-demand`;
        const rateId = `${slotId}-rate`;
        const slotPosition = `${index + 1} of ${slots.length}`;

        return (
          <li
            key={`${slot.id}-${index}`}
            className="rounded-[22px] border border-white/10 bg-white/5 p-4"
            aria-label={`${slot.title} time slot ${slotPosition}`}
            aria-describedby={`${windowId} ${statusId} ${demandId} ${rateId}`}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 id={titleId} className="text-base font-semibold text-white">
                  {slot.title}
                </h3>
                <p id={windowId} className="mt-1 text-sm text-slate-300">
                  {slot.window}
                </p>
              </div>
              <StatusChip
                id={statusId}
                tone={mapTone(slot.status)}
                aria-label={`Availability for ${slot.title}: ${slot.status}`}
                aria-live="polite"
                aria-atomic="true"
              >
                {slot.status}
              </StatusChip>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-400">
              <span id={demandId}>{slot.demand}</span>
              <span className="text-slate-600" aria-hidden="true">
                •
              </span>
              <span id={rateId}>{slot.rate}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

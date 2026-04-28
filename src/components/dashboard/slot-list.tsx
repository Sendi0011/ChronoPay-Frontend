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

function SlotState({
  filtered,
  filterLabel,
}: {
  filtered: boolean;
  filterLabel?: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-5 py-8 text-center">
      <p className="text-sm font-semibold text-white">
        {filtered ? "No slots match these filters." : "No time slots listed yet."}
      </p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
        {filtered
          ? `Try widening ${filterLabel ?? "the current filters"} to bring more availability back into view.`
          : "Add an availability block when you are ready to sell or reserve time."}
      </p>
    </div>
  );
}

export function SlotList({
  slots,
  totalSlotCount = slots.length,
  filterLabel,
}: {
  slots: Slot[];
  totalSlotCount?: number;
  filterLabel?: string;
}) {
  if (slots.length === 0) {
    return (
      <SlotState filtered={totalSlotCount > 0} filterLabel={filterLabel} />
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[46rem]">
        <div
          className="grid grid-cols-[minmax(14rem,1.7fr)_8rem_8.5rem_9rem_7.5rem] items-center gap-4 px-4 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
          aria-hidden="true"
        >
          <span>Slot</span>
          <span>Day</span>
          <span>Time</span>
          <span>Rate</span>
          <span>Status</span>
        </div>
        <ul className="space-y-3" aria-label="Available time slots">
          {slots.map((slot) => (
            <li
              key={slot.id}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-cyan-300/30 hover:bg-white/[0.07]"
            >
              <div className="grid grid-cols-[minmax(14rem,1.7fr)_8rem_8.5rem_9rem_7.5rem] items-center gap-4">
                <div className="min-w-0">
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <h3 className="min-w-0 break-words text-sm font-semibold leading-6 text-white">
                      {slot.title}
                    </h3>
                    {slot.isNextAvailable ? (
                      <span className="shrink-0 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-100">
                        Next
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 truncate text-xs text-slate-400">
                    {slot.demand}
                  </p>
                </div>
                <span
                  className="text-sm font-medium text-slate-300"
                  aria-label={`Date: ${slot.dateLabel}`}
                >
                  {slot.dateLabel}
                </span>
                <span
                  className="font-mono text-sm tabular-nums text-slate-200"
                  aria-label={`Time: ${slot.timeRange}`}
                >
                  {slot.timeRange}
                </span>
                <span
                  className="font-mono text-sm tabular-nums text-slate-200"
                  aria-label={`Rate: ${slot.rate}`}
                >
                  {slot.rate}
                </span>
                <StatusChip tone={mapTone(slot.status)}>{slot.status}</StatusChip>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

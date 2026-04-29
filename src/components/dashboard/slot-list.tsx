import { StatusChip } from "./status-chip";
import { Tooltip } from "@/app/components/ui/tooltip";
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
    <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-5 py-8 text-center">
      <p className="text-sm font-semibold text-white">
        {slots.length === 0 ? "No time slots listed yet." : "Slots listed"}
      </p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
        Add an availability block when you are ready to sell or reserve time.
      </p>
    </div>
  );
}

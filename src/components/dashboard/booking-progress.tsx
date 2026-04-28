import type { BookingStage } from "./types";

function toElementId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function BookingProgress({ stages }: { stages: BookingStage[] }) {
  const maxValue = Math.max(...stages.map((stage) => stage.value), 1);

  return (
    <div
      className="space-y-5"
      role="list"
      aria-label="Booking progress by stage"
      aria-live="polite"
    >
      {stages.map((stage, index) => {
        const stageId = `booking-stage-${toElementId(stage.label)}-${index + 1}`;
        const labelId = `${stageId}-label`;
        const valueId = `${stageId}-value`;

        return (
          <div
            key={`${stage.label}-${index}`}
            role="listitem"
            aria-labelledby={labelId}
            aria-describedby={valueId}
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <p id={labelId} className="text-sm font-medium text-white">
                {stage.label}
              </p>
              <p id={valueId} className="text-sm text-slate-300" aria-atomic="true">
                {stage.value} bookings
              </p>
            </div>
            <div className="h-2.5 rounded-full bg-white/10" aria-hidden="true">
              <div
                className="h-2.5 rounded-full bg-[linear-gradient(90deg,#67e8f9,#22c55e)]"
                style={{ width: `${(stage.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { StatusChip } from "./status-chip";
import { Tooltip } from "@/app/components/ui/tooltip";
import type { WalletSnapshot } from "./types";

export function WalletCard({ wallet }: { wallet: WalletSnapshot }) {
  return (
    <article className="rounded-[24px] border border-cyan-400/20 bg-[linear-gradient(160deg,rgba(14,116,144,0.18),rgba(15,23,42,0.92))] p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm text-cyan-100/80">Primary wallet</p>
          <p className="mt-3 truncate text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {wallet.balance}
          </p>
        </div>
        <StatusChip tone="neutral">secured</StatusChip>
      </div>
      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between gap-4 text-sm">
          <dt className="text-slate-300 flex items-center gap-2">
            Pending escrow
            <Tooltip content="Time tokens held in escrow for active bookings. Released upon completion or cancellation." />
          </dt>
          <dd className="font-medium text-white">{wallet.pending}</dd>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <dt className="text-slate-300 flex items-center gap-2">
            Next payout
            <Tooltip content="Scheduled release of earnings from completed time token transactions." />
          </dt>
          <dd className="font-medium text-white">{wallet.nextPayout}</dd>
        </div>
      </dl>
      <p className="mt-6 text-sm text-cyan-100/75">{wallet.status}</p>
    </article>
  );
}

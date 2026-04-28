import { StatusChip } from "./status-chip";
import type { WalletSnapshot } from "./types";

export function WalletCard({ wallet }: { wallet: WalletSnapshot }) {
  const titleId = "primary-wallet-title";
  const balanceId = "primary-wallet-balance";
  const securityId = "primary-wallet-security";
  const statusId = "primary-wallet-sync-status";

  return (
    <article
      className="rounded-[24px] border border-cyan-400/20 bg-[linear-gradient(160deg,rgba(14,116,144,0.18),rgba(15,23,42,0.92))] p-5"
      aria-labelledby={titleId}
      aria-describedby={`${balanceId} ${securityId} ${statusId}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p id={titleId} className="text-sm text-cyan-100/80">
            Primary wallet
          </p>
          <p
            id={balanceId}
            className="mt-3 text-3xl font-semibold tracking-tight text-white"
            aria-live="polite"
            aria-atomic="true"
          >
            {wallet.balance}
          </p>
        </div>
        <StatusChip
          id={securityId}
          tone="neutral"
          aria-label="Primary wallet security status: secured"
        >
          secured
        </StatusChip>
      </div>
      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between gap-4 text-sm">
          <dt className="text-slate-300">Pending escrow</dt>
          <dd className="font-medium text-white">{wallet.pending}</dd>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <dt className="text-slate-300">Next payout</dt>
          <dd className="font-medium text-white">{wallet.nextPayout}</dd>
        </div>
      </dl>
      <p
        id={statusId}
        className="mt-6 text-sm text-cyan-100/75"
        aria-live="polite"
        aria-atomic="true"
      >
        {wallet.status}
      </p>
    </article>
  );
}

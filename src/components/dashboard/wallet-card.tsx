import { StatusChip } from "./status-chip";
import type { WalletSnapshot } from "./types";

const statusTone = {
  connected: "positive",
  disconnected: "warning",
  error: "critical",
} as const;

const actionLabel = {
  connected: "Review wallet",
  disconnected: "Connect wallet",
  error: "Retry connection",
} as const;

const statusCopy = {
  connected:
    "Your wallet is linked for viewing balance and payout details. No transfers happen without your explicit authorization.",
  disconnected:
    "Connect your Stellar wallet to start minting and managing time-token bookings in ChronoPay.",
  error:
    "Wallet connection was interrupted. Retry to refresh your connection before continuing.",
} as const;

function truncateAddress(address: string) {
  if (address.length <= 24) {
    return address;
  }

  return `${address.slice(0, 10)}…${address.slice(-10)}`;
}

export function WalletCard({ wallet }: { wallet: WalletSnapshot }) {
  const showDetails = wallet.connection === "connected";

  return (
    <article className="rounded-[24px] border border-cyan-400/20 bg-[linear-gradient(160deg,rgba(14,116,144,0.18),rgba(15,23,42,0.92))] p-6 shadow-lg shadow-slate-950/20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm text-cyan-100/80">
            {showDetails ? "Primary wallet" : "Stellar wallet"}
          </p>
          {wallet.address ? (
            <p className="mt-2 text-sm text-slate-300">
              {truncateAddress(wallet.address)}
            </p>
          ) : null}
          <p className="mt-4 text-3xl font-semibold tracking-tight text-white">
            {showDetails ? wallet.balance : "Wallet data unavailable"}
          </p>
        </div>

        <StatusChip tone={statusTone[wallet.connection]}>
          {wallet.connection === "connected"
            ? "Connected"
            : wallet.connection === "error"
            ? "Connection issue"
            : "Disconnected"}
        </StatusChip>
      </div>

      {showDetails ? (
        <dl className="mt-6 space-y-4 text-sm text-slate-200">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-slate-300">Pending escrow</dt>
            <dd className="font-medium text-white">{wallet.pending}</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-slate-300">Next payout</dt>
            <dd className="font-medium text-white">{wallet.nextPayout}</dd>
          </div>
        </dl>
      ) : null}

      <p className="mt-6 text-sm leading-6 text-cyan-100/75">{statusCopy[wallet.connection]}</p>
      <button
        type="button"
        className="mt-5 inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-zinc-200"
      >
        {actionLabel[wallet.connection]}
      </button>
      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-500">
        {wallet.status}
      </p>
    </article>
  );
}

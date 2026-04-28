# chronopay-frontend

Next.js dashboard and Stellar wallet integration for **ChronoPay** - time tokenization and scheduling on the Stellar network.

## What's in this repo

- **Next.js 16** (App Router) with TypeScript and Tailwind CSS
- ChronoPay landing and dashboard starter pages
- Ready for Stellar wallet connection and time token UI

## Prerequisites

- Node.js 20+
- npm

## Setup

```bash
# Clone the repo (or use your fork)
git clone <repo-url>
cd chronopay-frontend

# Install dependencies
npm install

# Lint
npm run lint

# Build
npm run build

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start dev server (Turbopack) |
| `npm run build` | Production build             |
| `npm run start` | Start production server      |
| `npm run lint`  | Run ESLint                   |
| `npm test`      | Lint + build (CI)            |

## Project layout

- `src/app/` - App Router pages such as `page.tsx` and `dashboard/page.tsx`
- `src/components/dashboard/` - Reusable dashboard overview building blocks
- `src/app/layout.tsx` - Root layout and metadata
- `public/` - Static assets

## Responsive layout rules

The dashboard is designed mobile-first with Tailwind CSS breakpoints. Key rules of thumb:

| Concern | Rule |
| --- | --- |
| **Base width** | Minimum supported width is 320 px (iPhone SE). All layouts must not overflow or hide content below this. |
| **Panel padding** | `p-4` at base, `sm:p-5` at 640 px, `xl:p-6` at 1280 px — keeps content from touching edges on small screens. |
| **Metric cards** | `grid-cols-1` below 640 px, `sm:grid-cols-2` from 640 px — always stack cleanly, never truncate values. |
| **Quick actions** | `grid-cols-1` → `sm:grid-cols-2` → `md:grid-cols-3` — three breakpoints prevent the 1→3 jump that wastes space on tablet. |
| **Wallet + Booking panels** | Stack (`grid-cols-1`) by default, side-by-side (`lg:grid-cols-2`) from 1024 px — priority order is wallet first. |
| **Slot list** | Title `div` uses `min-w-0` + `truncate` so long slot names never break the layout; status chip stays on its own line below 768 px. |
| **Wallet balance** | `text-2xl` at base, `sm:text-3xl` at 640 px with `min-w-0 truncate` — large XLM numbers don't overflow at 320 px. |
| **Section spacing** | `space-y-6` at base, `sm:space-y-8`, `md:space-y-10` — reduces vertical scroll fatigue on small screens. |
| **Header/main padding** | `px-4` at base, `sm:px-6` from 640 px — consistent 16 px gutter on mobile. |
| **Long text** | Use `min-w-0` on flex children that contain text to prevent flex blowout. Prefer `truncate` for single-line labels; `leading-6` for multi-line detail copy. |

## Dashboard design notes

- The overview is split into small presentational components so the UI is easy to review and extend.
- Key metrics, wallet status, booking progress, and quick actions stay visible without sacrificing mobile readability.
- Loading, empty, and error states are treated as first-class layout states to avoid abrupt page shifts.
- Interactive elements include visible focus rings and semantic headings to support keyboard and screen-reader use.

## UX copywriting pass (FE-DESIGN-030)

The dashboard copy was updated to improve clarity, trust, and scan speed:

- Stronger intent labels (for example, `Connect Wallet` and `View booking details`)
- State-aware microcopy for loading and empty states
- Added helper text to explain booking and wallet flow in plain language

Scope is intentionally lightweight and contained to `src/app/dashboard/page.tsx` for easy review.

## Contributing

1. Fork the repo and create a branch from `main`.
2. Install deps: `npm install`. Run lint and build: `npm run lint && npm run build`.
3. Make changes; keep lint and build green.
4. Open a pull request. CI must pass (lint, build).

## CI/CD

On every push and pull request to `main`, GitHub Actions runs:

- **Install**: `npm ci`
- **Lint**: `npm run lint`
- **Build**: `npm run build`

## License

MIT

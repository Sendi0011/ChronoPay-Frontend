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

## Dashboard design notes

- The overview is split into small presentational components so the UI is easy to review and extend.
- Key metrics, wallet status, booking progress, and quick actions stay visible without sacrificing mobile readability.
- Loading, empty, and error states are treated as first-class layout states to avoid abrupt page shifts.
- Interactive elements include visible focus rings and semantic headings to support keyboard and screen-reader use.

## Screen reader labeling guidelines

- Prefer visible text as the accessible name, then add hidden context or `aria-label` only when repeated labels would otherwise be ambiguous.
- Pair dashboard cards, panels, and list items with `aria-labelledby` and `aria-describedby` so values, helper copy, and status chips are announced with the right context.
- Give repeated controls unique names, especially workflow links and state buttons. Include position or state only when it helps distinguish similar items.
- Status chips should describe the thing they qualify, such as wallet security, slot availability, or workflow state. Avoid announcing decorative helper text twice.
- Use `aria-live="polite"` with `aria-atomic="true"` for dynamic dashboard values such as balances, booking counts, sync state, and slot availability.
- Mark decorative icons, separators, skeleton blocks, and repeated visual CTAs with `aria-hidden="true"` when nearby labels already communicate the same action.
- Security assumption: these changes are UI-only accessible-name and description updates. They do not alter wallet connection logic, transaction handling, API calls, authorization, or persisted user data.

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

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

### Above-the-fold spacing (laptop viewports)

The dashboard is tuned so the title, intro copy, wallet card, and at least the heading of the time-slots section land above the fold on common laptop screens without feeling cramped.

**Viewport targets**

| Class           | Width × height (CSS px) | Tailwind tier |
| --------------- | ----------------------- | ------------- |
| Small laptop    | 1280 × 720              | `lg`          |
| Standard laptop | 1366 × 768 / 1440 × 900 | `lg` / `xl`   |
| Large laptop    | 1920 × 1080             | `2xl`         |

After accounting for typical browser chrome (~120 px), short laptops have ~600 px of usable height, which is the constraint we optimize for.

**Spacing decisions** (see `src/app/dashboard/page.tsx`)

- `<main>` vertical padding scales `py-6` → `md:py-8` → `xl:py-12` (was a flat `py-16`). Reclaims ~64 px on short screens while keeping breathing room on larger displays.
- Section gap scales `space-y-5` → `md:space-y-6` → `xl:space-y-8` (was `space-y-10`). Tightens stack density at md/lg without crowding hierarchy at xl+.
- Card padding scales `p-4` → `md:p-5` → `xl:p-6` (was a flat `p-6`). Keeps card density appropriate to viewport.
- Header padding scales `py-3` → `md:py-4`, trimming a few pixels off the top bar on short screens.
- Title-to-description gap dropped from `mt-2` to `mt-1`; in-card heading-to-body gaps dropped from `mb-2`/`mb-4` to `mb-1.5`/`mb-3` so each card stays compact.

The breakpoints follow Tailwind defaults (`md` ≥ 768 px, `xl` ≥ 1280 px). Width is used as a proxy for height because Tailwind's height-based variants are not in this project, and on real laptops width and height correlate well enough for this use case. Short screens, page zoom, and the appearance of a vertical scrollbar are all handled by the same default-tier (compact) values, since they all reduce effective viewport height or width.

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

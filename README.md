# Siri Finance

> **Smart Loans. Faster Decisions.**

Siri Finance is a production-ready fintech loan aggregation platform built with Next.js 14, TypeScript, Tailwind CSS, and Prisma. Compare personal loans from top Indian banks and NBFCs, calculate EMIs, and apply online.

---

## Features

- Smart loan comparison engine — 9 lenders (SBI, HDFC, ICICI, Axis, Kotak, Yes Bank, Bajaj Finance, Tata Capital, Fullerton India)
- Eligibility check based on salary and CIBIL score
- Live EMI calculator with visual breakdown
- Lead capture via Formspree (no backend required)
- Admin dashboard with mock lead data
- Mobile-responsive design
- 100% free service

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL + Prisma ORM |
| Forms | Formspree |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- PostgreSQL database (use [Supabase](https://supabase.com) or [Neon](https://neon.tech) free tier)

### 1. Clone and Install

```bash
git clone https://github.com/yourusername/siri-finance.git
cd siri-finance
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
DATABASE_URL=postgresql://user:password@host:5432/sirifinance
NEXT_PUBLIC_SITE_NAME=Siri Finance
```

### 3. Setup Database

```bash
npx prisma db push
npx prisma generate
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
siri-finance/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles
│   ├── loans/
│   │   └── page.tsx            # Loan comparison with filters
│   ├── emi-calculator/
│   │   └── page.tsx            # EMI calculator page
│   ├── apply/
│   │   └── page.tsx            # Loan application form
│   └── admin/
│       └── page.tsx            # Admin dashboard (mock data)
├── components/
│   ├── Navbar.tsx              # Sticky navigation bar
│   ├── Footer.tsx              # Site footer
│   ├── HeroSection.tsx         # Hero with eligibility sliders
│   ├── LoanCard.tsx            # Individual loan offer card
│   ├── LoanOffers.tsx          # Featured loans grid
│   ├── LoanFilters.tsx         # Sidebar filters (rate, amount)
│   ├── EmiCalculator.tsx       # Interactive EMI calculator
│   ├── LeadForm.tsx            # Formspree lead capture form
│   ├── WhyChooseUs.tsx         # Benefits section
│   └── TestimonialsSection.tsx # Customer testimonials
├── lib/
│   ├── loanEngine.ts           # Loan data + filtering logic
│   └── utils.ts                # EMI formula + formatting helpers
└── prisma/
    └── schema.prisma           # Lead model
```

---

## Available Scripts

```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open Prisma database GUI
npx prisma db push   # Push schema to database
```

---

## Deployment to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial Siri Finance setup"
git branch -M main
git remote add origin https://github.com/yourusername/siri-finance.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repository
3. Add environment variables:
   - `DATABASE_URL` — your PostgreSQL connection string
   - `NEXT_PUBLIC_SITE_NAME` — `Siri Finance`
4. Click **Deploy**

Your app will be live at `https://sirifinance.vercel.app`

> **Tip:** For a free PostgreSQL database, use [Neon](https://neon.tech) — it has a Vercel integration.

---

## Formspree Integration

The lead form submits to `https://formspree.io/f/xjgjjedp`.

Fields captured:
- `name` — full name
- `email` — email address
- `phone` — mobile number
- `salary` — monthly salary (₹)
- `loanAmount` — required loan amount (₹)
- `creditScore` — CIBIL score (300–900)
- `bank` — selected lender (optional)

---

## Loan Engine Logic

```
IF salary < ₹25,000 → Show NBFC loans only (bank loans hidden)
IF creditScore > 750 → Show low-interest loans (max rate 15%)
IF creditScore < minCreditScore → Hide that lender
Sorted by: Featured first, then lowest interest rate
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `NEXT_PUBLIC_SITE_NAME` | No | Site display name |

---

## License

MIT © 2024 Siri Finance Technologies Pvt. Ltd.

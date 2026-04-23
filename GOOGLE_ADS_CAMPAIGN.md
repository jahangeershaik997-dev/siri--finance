# Siri Finance — Google Ads Campaign Plan

## Campaign Settings
- **Type:** Search Campaign
- **Goal:** Leads (Form submissions)
- **Name:** Siri Finance — Personal Loans India
- **Budget:** ₹500–₹1,000/day (start low, scale up)
- **Bidding:** Maximize Conversions (after 30 leads), else Manual CPC
- **Location:** India (or target specific states: Telangana, Andhra, Karnataka, Maharashtra)
- **Language:** English + Telugu + Hindi
- **Networks:** Search only (uncheck Display Network)

---

## Ad Group 1: Personal Loan General

### Keywords
```
[personal loan]
[personal loan online]
"personal loan India"
"apply personal loan"
"personal loan apply online"
+personal +loan +instant
+personal +loan +apply
```

### Headlines (use all 15)
1. Smart Loans. Faster Decisions.
2. Compare 50+ Loan Offers
3. Personal Loans from 10.25% p.a.
4. Apply for Personal Loan Now
5. Free Loan Eligibility Check
6. Get Loan Approved in 24 Hours
7. No Collateral Required
8. Loans up to ₹50 Lakhs
9. 100% Free Service
10. Instant Online Application
11. Best Personal Loan Offers
12. Talk to Our Loan Expert
13. Low EMI Personal Loans
14. Trusted by 2 Lakh+ Indians
15. Apply Now — Takes 2 Minutes

### Descriptions (use all 4)
1. Compare personal loan offers from SBI, HDFC, ICICI & 47 more lenders. Lowest rates from 10.25% p.a. Free eligibility check. No CIBIL impact. Apply now!
2. Find the best personal loan for your salary & CIBIL score. Our experts match you with 50+ lenders instantly. Call: 70958 99552 or apply online.
3. Personal loans up to ₹50 lakhs. Flexible tenure up to 7 years. Salary-based eligibility. Free comparison. Get matched in 60 seconds.
4. Siri Finance — India's loan aggregator. Compare rates from top banks & NBFCs. Our advisors call you within 24 hrs. Completely free service.

---

## Ad Group 2: Low Interest Rate Loans

### Keywords
```
[lowest interest rate personal loan]
[personal loan low interest]
"cheapest personal loan India"
"personal loan 10 percent interest"
+low +interest +personal +loan
+best +interest +rate +personal +loan
```

### Headlines
1. Loans from 10.25% Interest p.a.
2. Lowest Interest Rate Loans
3. Save ₹50,000+ on Interest
4. Compare Interest Rates Now
5. HDFC Loan at 10.25% p.a.

### Descriptions
1. Get personal loans at the lowest interest rates in India. HDFC from 10.25%, SBI from 10.5%. Compare & pick the best. Free service.
2. High CIBIL score? Get exclusive low-interest offers from top banks. Free eligibility check. Apply in 2 minutes. No CIBIL impact.

---

## Ad Group 3: Instant / Quick Loans

### Keywords
```
[instant personal loan]
[quick personal loan]
"same day personal loan"
"personal loan instant approval"
+instant +loan +approval
+quick +personal +loan +online
```

### Headlines
1. Instant Loan Approval Online
2. Same Day Loan Disbursal
3. Quick Personal Loan — Apply Now
4. Loan Approved in Minutes
5. Paperless Instant Loan

### Descriptions
1. Get instant personal loan approval from HDFC, ICICI & Bajaj Finance. Apply online in 2 minutes. Disbursal within 24 hours. Free service.
2. Pre-approved offers for salaried employees. Instant eligibility check. No paperwork. Loan in your account by tomorrow. Apply now.

---

## Ad Group 4: Salaried Personal Loan

### Keywords
```
[personal loan for salaried]
"salaried employee personal loan"
"personal loan salary 25000"
+personal +loan +salaried +employee
+salary +based +personal +loan
```

### Headlines
1. Personal Loan for Salaried Staff
2. Salary ₹25,000+? Get Loan Now
3. Salaried Employee Loan Offers
4. Instant Loan on Salary Slip
5. Low Salary? NBFCs Available

---

## Ad Group 5: EMI Calculator (Informational)

### Keywords
```
[personal loan emi calculator]
[loan emi calculator]
"emi calculator personal loan"
+emi +calculator +loan
```

### Headlines
1. Free EMI Calculator — Try Now
2. Calculate Your Loan EMI
3. Plan Your Loan Repayment
4. See EMI Before Applying
5. Free Loan Planning Tool

### Descriptions
1. Use Siri Finance free EMI calculator. Enter loan amount, rate & tenure to get exact monthly EMI. Then compare & apply for the best loan.

---

## Ad Extensions

### Sitelinks
| Title | Description | URL |
|-------|-------------|-----|
| Compare Loan Offers | 50+ banks & NBFCs | /loans |
| EMI Calculator | Free monthly EMI tool | /emi-calculator |
| Apply Now | Takes 2 minutes | /apply |
| Talk to Advisor | Call 70958 99552 | /apply |

### Callouts
- Free Service
- No CIBIL Impact  
- 50+ Lenders
- Instant Eligibility
- 100% Secure

### Call Extension
- Phone: +91 70958 99552 (Muthyala Mallesh)
- Phone: +91 90593 14625 (Jahangeer)

### Structured Snippets
- Header: Loan Types
- Values: Personal Loan, Home Loan, Business Loan, Loan Against Property

---

## Negative Keywords (add these to avoid wasted spend)
```
student loan
education loan
car loan
vehicle loan
gold loan
agricultural loan
free loan
government loan
loan waiver
subsidy
job
salary job
fresher
```

---

## Targeting Recommendations

### Demographics
- Age: 22–45
- Gender: All
- Household Income: Top 50%

### Location (priority order)
1. Hyderabad, Telangana
2. Bengaluru, Karnataka
3. Mumbai, Maharashtra
4. Chennai, Tamil Nadu
5. Delhi NCR
6. Pune, Maharashtra

### Device
- Mobile: +20% bid adjustment (most loan searches are mobile)
- Desktop: Base bid
- Tablet: -10% bid adjustment

---

## Budget & Bidding Strategy

| Phase | Duration | Budget/Day | Bidding |
|-------|----------|------------|---------|
| Learning | Week 1–2 | ₹500 | Manual CPC (₹15–25/click) |
| Optimise | Week 3–4 | ₹750 | Target CPA |
| Scale | Month 2+ | ₹1,500+ | Maximize Conversions |

### Expected Results (estimated)
- CPC: ₹15–35 per click
- CTR: 5–8%
- Conversion rate: 8–15%
- Cost per lead: ₹100–300
- Leads per day at ₹500 budget: 2–5

---

## Conversion Tracking Setup

After getting your Google Ads account:
1. Go to **Tools → Conversions → New Conversion**
2. Type: **Website**
3. Category: **Submit lead form**
4. Name: `Loan Application Submitted`
5. Copy the **Conversion ID** (AW-XXXXXXXXXX) and **Label**
6. Add to Vercel env vars:
   ```
   NEXT_PUBLIC_AW_ID=AW-XXXXXXXXXX
   NEXT_PUBLIC_AW_CONVERSION_LABEL=XXXXXXXXXXXX
   ```

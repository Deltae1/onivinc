# RFP REVIEW — Elevate Prize Foundation Response
# Date: 2026-05-01
# Reviewer: Mamba 🐍
# Deadline: May 8, 2026 (7 days)
# Contact: nate@elevateprize.org

---

## Context

The RFP is for a **YouTube series producer role** with Elevate Prize Foundation. The response is being delivered through the **onivinc.com** site (portfolio + capability statement). BRIEF.md defines the full spec.

---

## Gap Analysis: RFP Requirements vs. Current Build

| # | RFP Requirement (from BRIEF.md) | Current Status | Gap? |
|---|---|---|---|
| 1 | Portfolio section with **3–5 real YouTube production links** | ❌ Portfolio has 6 generic placeholder cards (PRJ-001 to PRJ-006) with no links, no videos, no YouTube content | 🔴 **CRITICAL** |
| 2 | **YouTube-specific production experience** highlighted | ❌ No mention of YouTube anywhere on the site. Services list broadcast/cloud/events but not YouTube/digital content | 🟠 **HIGH** |
| 3 | **Capability statement** — past performance, relevant experience | ⚠️ About section has generic copy. No formal capability statement page/section. No named clients for video production specifically | 🟠 **HIGH** |
| 4 | **Contact: real email + phone** | ✅ Footer has email (info@onivinc.com) + phone (202-743-5659) + address (2001 L St NW Suite 500) | ✅ Done |
| 5 | **Contact form functional** | ❌ Formspree endpoint is `YOUR_FORM_ID` — form does nothing | 🔴 **CRITICAL** |
| 6 | Remove FAQ section | ❌ Still present in Index.tsx | 🟡 Medium |
| 7 | Remove/consolidate QuoteForm | ❌ Still present as separate component | 🟡 Medium |
| 8 | **Pricing/scope section** (if applicable) | ❌ No pricing or engagement model visible. "Detailed case studies available on request" is the only CTA | 🟡 Medium |
| 9 | Professional presentation / design polish | ✅ Site design is strong — dark theme, terminal aesthetic, clean layout, responsive | ✅ Done |
| 10 | Client logos / social proof | ✅ 9 clients listed (USAGM, IMF, VOA, MBN, Fox, NBC, etc.) — strong roster | ✅ Done |

---

## Prioritized Punch List (This Week)

### 🔴 Must Fix Before May 8

**1. Replace portfolio placeholders with real YouTube work**
- **File:** `src/components/Portfolio.tsx`
- **Current:** 6 generic cards with no links ("Broadcast Infrastructure Overhaul," "Azure Cloud Migration," etc.)
- **Need:** 3–5 real YouTube production links. Each card should have:
  - Thumbnail or embed
  - Client/project name
  - Your role (Producer, TD, Director)
  - Link to the YouTube video
- **Elvin's pending items:** YouTube portfolio links (3–5) — **confirmed, needs his input**

**2. Fix contact form (Formspree)**
- **File:** `src/components/Contact.tsx:35`
- **Action:** Create a Formspree account → create form → replace `YOUR_FORM_ID` with real ID
- **Time:** 5 minutes

**3. Add YouTube/digital content production to Services**
- **File:** `src/components/Services.tsx`
- **Current:** SVC-01 through SVC-06 cover broadcast, cloud, consulting, training, events — but NO YouTube/digital content production
- **Need:** Either modify SVC-01 (Creative Technical Services) to explicitly mention YouTube series production, or add a new SVC-07 for Digital Content / YouTube Production
- **Suggested copy:**
  > "End-to-end YouTube series production — concept development, shooting, editing, post-production, and channel management. From single episodes to full series, we produce content that performs."

### 🟠 Should Fix Before May 8

**4. Add a Capability Statement section or downloadable PDF**
- **Current:** No formal capability statement anywhere
- **Need:** A section (or linked PDF) that covers:
  - Company overview (established 2017, DC-based)
  - Core competencies relevant to Elevate Prize (video production, storytelling, YouTube)
  - Past performance summary (named projects if possible)
  - Key personnel (Elvin's background — 10+ years, VOA, major networks)
  - DUNS/CAGE/SAM if applicable (federal work history suggests these may exist)

**5. Tailor portfolio descriptions to YouTube/Elevate Prize**
- Even if using existing broadcast work, reframe descriptions to emphasize:
  - Storytelling capability
  - Series production (not just one-off events)
  - YouTube-native skills (SEO, thumbnails, engagement metrics, retention)
  - Social impact alignment (Elevate Prize is about social entrepreneurs)

### 🟡 Nice to Have

**6. Remove FAQ component**
- Delete `<FAQ />` from `src/pages/Index.tsx`
- Delete `src/components/FAQ.tsx`

**7. Remove QuoteForm component**
- Delete `src/components/QuoteForm.tsx`

**8. Remove unused shadcn/ui components**
- 40+ components never imported — reduces bundle size

**9. Add Elevate Prize-specific landing page or section**
- A hidden route like `/elevate` that speaks directly to the RFP
- Shows you read and understood their mission
- Links to relevant portfolio pieces
- This is optional but would stand out

---

## What's Already Strong

- ✅ **Design/branding:** The terminal aesthetic is unique, memorable, and professional
- ✅ **Client list:** USAGM, IMF, VOA, Fox, NBC — impressive and relevant
- ✅ **Contact info:** Email, phone, address all present and real
- ✅ **Services breadth:** Shows versatility (production + cloud + consulting)
- ✅ **Training section:** "1,000+ professionals trained" — demonstrates scale
- ✅ **Stats:** "10K+ hrs live production, 10+ years, 9 clients" — strong social proof

---

## Pending Elvin Items (Already Known — Confirming Placement)

| Item | Where It Goes | Status |
|---|---|---|
| YouTube portfolio links (3–5 videos) | Portfolio.tsx — replace placeholder cards | ⬜ Elvin provides |
| Real email confirmed | Contact.tsx + Footer.tsx → info@onivinc.com | ✅ Already placed |
| Real phone confirmed | Footer.tsx → (202) 743-5659 | ✅ Already placed |

---

## Suggested Copy Edits

**About section — add YouTube/digital mention:**
> Current: "From live Technical Directing and AV production to Azure cloud architecture, AI integration, and cybersecurity..."
> 
> Suggested: "From live Technical Directing and **YouTube series production** to Azure cloud architecture, AI integration, and cybersecurity..."

**Portfolio section header:**
> Current: "A representative sample of engagements. Detailed case studies available on request."
> 
> Suggested: "A representative sample of engagements — **including YouTube series production and digital content**. Detailed case studies available on request."

---

## Summary

| Priority | Count | Key Items |
|---|---|---|
| 🔴 Critical | 2 | Portfolio placeholders, broken contact form |
| 🟠 High | 3 | YouTube in services, capability statement, portfolio reframing |
| 🟡 Medium | 4 | Remove FAQ/QuoteForm, unused components, Elevate-specific page |

**Bottom line:** The site looks great but doesn't yet speak to this specific RFP. The #1 blocker is real YouTube portfolio content — everything else can be fixed in a few hours of dev work. Elvin needs to provide the 3–5 YouTube links; Mamba can handle the rest.

---

*Created 2026-05-01 by Mamba 🐍 — Not legal advice; technical assessment only*

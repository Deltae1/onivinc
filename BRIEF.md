# ONIV INC — Site Redesign Build Brief
**For:** Mamba  
**Deadline:** May 8, 2026 (Elevate Prize RFP due)  
**Repo:** `/Users/es/Documents/Tech Projects/onivinc`  
**Stack:** React 18 + TypeScript + Vite + Tailwind + shadcn/ui + Framer Motion  
**Deploy:** Azure Static Web Apps → `onivinc.com`

---

## Design Direction

**Aesthetic:** Dark cinematic + bold personal brand. High-end media company feel — not a generic agency template.

- Background: near-black (`#0a0a0a` or `#0d0d0d`)
- Accent color: warm amber/gold (`#C9A84C` or similar) — pulled from old brand's olive/brown palette, elevated
- Typography: Large oversized display font for headings (Inter or Playfair Display), clean sans-serif for body
- Full-bleed hero with motion or cinematic still
- Minimal nav — 4 items max
- Sections flow: Hero → Clients → About → Services → Work/Portfolio → Training → Contact

**Reference sites:**
- Harbor (dark tones, large type, cinematic)
- Awwwards Film/TV section: https://www.awwwards.com/websites/film-tv/
- Filmmaker Portfolios: https://www.sitebuilderreport.com/inspiration/filmmaker-portfolios

---

## Reference Images (in `/src/assets/reference/`)
- `audio-mixing-console.jpg` — for Audio / Training section
- `broadcast-studio.jpg` — for hero or Creative Solutions
- `camera-operator.jpg` — for Expert Teams / Creative Solutions
- `video-editing.jpg` — for Editing service
- `podcast-streaming.jpg` — for Streaming / Training section
- `hero-bg.jpg` — existing hero (can swap with broadcast-studio.jpg)

---

## Site Structure & Content

### NAV (4 items)
Work · Services · About · Contact

---

### HERO
- Full-bleed dark cinematic image (use `broadcast-studio.jpg` or `hero-bg.jpg`)
- Overlay: dark gradient
- Headline (large, bold):
  > **ONIV INC.**
  > Creative Solutions. Expert Teams. Broadcast-Ready.
- Subhead:
  > Washington DC's premier TV & Digital Media Production firm — delivering creative technical services, cloud solutions, training, and consulting.
- CTAs: `Book a Consultation` · `View Our Work`

---

### CLIENT LOGOS (trust bar — immediately below hero)
**Section header:** "Trusted By"

Logos to include (source/recreate as SVG or PNG):
- U.S. Agency for Global Media (USAGM)
- International Monetary Fund (IMF)
- Voice of America (VOA)
- Middle East Broadcasting Networks (MBN)
- Fox Business
- 21st Century Fox
- NBC Universal
- NBC Sports Washington
- Diversity Education Institute

> These are the #1 credibility signal. Display as a horizontal scrolling logo strip or 3-column grid. Dark background, white/muted logo treatment.

---

### ABOUT / WHO WE ARE
**Headline:** Who We Are

**Body:**
> ONIV INC. is a creative solutions firm focused on differentiated strategic positioning and smart design — creating engaging content and delivering innovative solutions in IT Infrastructure for Digital Broadcast Operations, Cloud Architecture, and Cyber Security.
>
> We provide analytics-based creative technical services in Digital Media production and Live Television Broadcast programming. Our team holds expertise in Cloud Architecture, Cybersecurity, AI, Virtual Reality, Technical Directing, AudioVisual Production, Editing, Mixing, Signal Flow, Film, and Photography.
>
> One aim above all: streamline your effectiveness — through our people, processes, and technology.

**Stats row (3 across):**
- 10+ Years Experience
- 1,000+ Professionals Trained
- 9 Major Media Clients

---

### SERVICES (4 pillars)
Display as dark cards with amber accent icon

1. **Creative Solutions**
   > From day hires to full crews — production, digital media strategy, documentaries, films, elections, breaking news, sporting events, podcasts, and holiday relief. One professional or a full team, delivered.

2. **Consulting Expertise**
   > A tight-knit crew that loves what we do, achieving performance-driven results. We evaluate your people, processes, and technology — and provide recommendations that create competitive advantage.

3. **Expert Teams**
   > Based on your needs, we provide one professional, virtual techs, or a whole team alongside yours — supporting special events, productions, and long-term engagements. We also cover family events: birthdays, weddings, conferences, and graduations.

4. **Training & Support**
   > Training and technical support are core competencies. We empower media professionals across Audio, Visual, Production, Editing, and Streaming. We also provide rental equipment and production facilities with insurance coverage.

---

### WORK / PORTFOLIO
**Headline:** Our Work

**Format:** Video portfolio grid — YouTube embed thumbnails linking out, or thumbnail cards with play button overlay.

> ⚠️ Video links TBD — Elvin will provide 3–5 YouTube links. Build the component to accept an array of `{ title, description, thumbnail, url }` objects. Use placeholder cards until links are provided.

---

### TRAINING SECTION (visual strip)
5 discipline categories with real images:
- Audio → `audio-mixing-console.jpg`
- Visual → `broadcast-studio.jpg`
- Production → `camera-operator.jpg`
- Editing → `video-editing.jpg`
- Streaming → `podcast-streaming.jpg`

---

### CONTACT
**Headline:** Get In Touch

> Whether you need a day hire or an entire crew — for production, digital media strategy, tech support, training, or installation — our team is standing by with the talent to bring your vision to life.

Contact fields: Name, Email, Phone, Project Type (dropdown), Message, Submit

> ⚠️ Real contact info (email, phone) TBD — use placeholders for now. Form submission can use a mailto or Formspree endpoint.

---

### FOOTER
- Logo: ONIV INC
- Links: About · Services · Work · Contact · Tech Support
- Social: Twitter/X · Facebook · Instagram
- © All Rights Reserved | ONIV INC

---

## Key Notes for Build

1. **Client logos section is critical** — this is the most powerful trust signal and should be above the fold or immediately below the hero.
2. **Portfolio section** — build the component now with placeholder cards. Elvin will drop in real YouTube links before launch.
3. **Contact info** — use placeholder until Elvin provides real email/phone.
4. **No FAQ section** — the old site didn't have one; the current React build does. Remove it.
5. **QuoteForm** — consolidate into the Contact section. Remove as a separate component.
6. **Mobile-first** — ensure the logo strip, services grid, and portfolio grid all collapse cleanly on mobile.
7. **Performance** — lazy-load images, keep bundle lean. This is deployed to Azure Static Web Apps (free tier).
8. **RFP context** — this site will be included in an Elevate Prize Foundation proposal (YouTube series producer contract, $300K+). It needs to look world-class by May 8, 2026.

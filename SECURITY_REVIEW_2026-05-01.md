# SECURITY REVIEW — onivinc + webinfra (The Signal)
# Date: 2026-05-01
# Reviewer: Mamba 🐍
# Scope: Source-level, dependency, infra, frontend, CI/CD, DNS

---

## Platform 1: onivinc (React SPA — onivinc.com)

### 🔴 CRITICAL

**1. Formspree placeholder — form submissions go nowhere**
- **File:** `src/components/Contact.tsx:35`
- **Issue:** `https://formspree.io/f/YOUR_FORM_ID` — contact form submits to a non-existent endpoint. Any prospect filling out the form gets a silent failure.
- **Fix:** Create a Formspree form at formspree.io, get the real form ID, replace `YOUR_FORM_ID`.

### 🟠 HIGH

**2. React Router XSS via Open Redirects (CVE — GHSA-2w69-qvjg-hvjx)**
- **Dependency:** `@remix-run/router <=1.23.1` (transitive via `react-router-dom`)
- **CVSS:** 8.0 (High)
- **Fix:** `npm update react-router-dom`

**3. Rollup 4 Arbitrary File Write via Path Traversal (GHSA-mw96-cpmx-2vgc)**
- **Dependency:** `rollup 4.0.0–4.58.0` (dev dependency via Vite)
- **Severity:** High
- **Fix:** `npm audit fix` or update Vite to latest

**4. Picomatch method injection + ReDoS (2 advisories)**
- **Dependency:** `picomatch` (transitive)
- **Severity:** High
- **Fix:** `npm audit fix`

**5. CSP allows `'unsafe-inline'` for scripts**
- **File:** `staticwebapp.config.json`
- **Issue:** `script-src 'self' 'unsafe-inline'` — allows inline script execution, defeats CSP purpose for XSS protection
- **Fix:** Remove `'unsafe-inline'` from script-src. Use nonce-based or hash-based CSP. Requires refactoring any inline scripts.

### 🟡 MEDIUM

**6. PostCSS XSS via unescaped `</style>` (GHSA-qx2v-qp2m-jg93)**
- **Dependency:** `postcss <8.5.10` (dev dependency)
- **Severity:** Moderate
- **Fix:** `npm audit fix`

**7. ajv ReDoS with `$data` option (GHSA-2g4f-4pwh-qvx6)**
- **Dependency:** `ajv` (transitive)
- **Severity:** Moderate
- **Fix:** `npm audit fix`

**8. yaml Stack Overflow (GHSA-48c2-rrv3-qjmp)**
- **Dependency:** `yaml 2.0.0–2.8.2`
- **Severity:** Moderate
- **Fix:** `npm audit fix`

**9. No SRI (Subresource Integrity) on Google Fonts**
- **File:** `index.html:27-28`
- **Issue:** `fonts.googleapis.com` loaded without `integrity` attributes.
- **Note:** SRI on Google Fonts is impractical (content varies by user-agent). Self-host fonts or accept risk.

**10. FAQ component still present (BRIEF says remove)**
- **File:** `src/pages/Index.tsx:8,22` + `src/components/FAQ.tsx`
- **Issue:** BRIEF.md explicitly says "Remove it." Still imported and rendered.
- **Fix:** Remove `<FAQ />` from Index.tsx, delete `src/components/FAQ.tsx`

**11. QuoteForm component still exists (BRIEF says consolidate)**
- **File:** `src/components/QuoteForm.tsx`
- **Issue:** BRIEF says consolidate into Contact section and remove.
- **Fix:** Delete `src/components/QuoteForm.tsx`

**12. Large unused shadcn/ui component library**
- **Files:** 40+ UI components in `src/components/ui/`
- **Issue:** Most are never imported (accordion, calendar, carousel, chart, command, drawer, menubar, pagination, sidebar, etc.). Increases bundle size and attack surface.
- **Fix:** Remove unused components. Keep only what's imported.

**13. `console.error` in production**
- **File:** `src/pages/NotFound.tsx:8`
- **Issue:** Logs attempted route path to browser console on 404.
- **Fix:** Remove or guard with `import.meta.env.DEV`

### 🟢 LOW

**14. No rate limiting on contact form**
- Formspree handles server-side rate limiting. Acceptable for Free tier.

**15. Aggressive `Cache-Control: no-store` on all non-asset routes**
- Fine for security. Hurts performance slightly. Acceptable trade-off.

**16. No sitemap.xml or robots.txt**
- Minor SEO impact. Add when ready for production traffic.

---

## Platform 2: webinfra / The Signal (Static HTML — thesignal.fit)

### 🟡 MEDIUM

**1. YouTube embed uses tracking domain**
- **File:** `public/index.html:1192`
- **Issue:** Uses `https://www.youtube.com/embed/` — sets tracking cookies on visitors.
- **Fix:** Change to `https://www.youtube-nocookie.com/embed/ygw4_Q0v4GU`
- CSP already permits both domains.

**2. `enablejsapi=1` on YouTube iframe**
- **File:** `public/index.html:1192`
- **Issue:** Enables YouTube Player API — increases attack surface. Only needed for programmatic playback control.
- **Fix:** Remove `?enablejsapi=1` unless hover-to-preview JS requires it.

**3. Validation token output in Bicep template**
- **File:** `main.bicep:46`
- **Issue:** `output validationToken` — DNS validation token exposed in deployment logs.
- **Risk:** Low — only useful during initial DNS setup, logs typically private.
- **Fix:** Remove after custom domain is validated.

**4. No SRI on Google Fonts**
- Same as onivinc — accept risk or self-host.

### 🟢 LOW

**5. Sitemap referenced but missing**
- **File:** `public/robots.txt:7` → `Sitemap: https://thesignal.fit/sitemap.xml`
- `sitemap.xml` not in repo. Returns 404.
- **Fix:** Create it or remove the reference.

**6. Monolithic 1,464-line HTML file**
- Not a security issue. Simplicity is a feature for static sites.

---

## CI/CD Security (Both Platforms)

### ✅ GOOD — No Issues Found

- ✅ Secrets properly referenced via `${{ secrets.* }}` — not hardcoded
- ✅ No `pull_request_target` trigger
- ✅ No steps that echo or log secrets
- ✅ No `.env` files ever committed to git history
- ✅ No API keys, tokens, or credentials in source or git history
- ✅ Azure SWA deploy token scoped via GitHub Secrets

### 🟡 MEDIUM

**Actions versions not pinned to SHA**
- Both use `actions/checkout@v3`, `Azure/static-web-apps-deploy@v1` (tag-based)
- **Risk:** Compromised tag could inject code.
- **Fix:** Pin to full SHA (e.g., `actions/checkout@8ade135a41bc03ea155e62e844d188df1ea18608`)

---

## Infrastructure (Bicep) — Both Platforms

### ✅ GOOD — No Issues Found

- ✅ No overly permissive role assignments
- ✅ No public storage accounts
- ✅ SKU restricted via `@allowed`
- ✅ No hardcoded subscription IDs, tenant IDs, or secrets
- ✅ Parameters contain only non-sensitive infra config

---

## DNS / Domain — Manual Verification Required

Sandbox can't perform DNS lookups. **Elvin, run these:**

| Check | Command | What to look for |
|---|---|---|
| DMARC | `dig TXT _dmarc.onivinc.com` | Should have `v=DMARC1; p=reject` or `p=quarantine` |
| SPF | `dig TXT onivinc.com` | Should have `v=spf1 ... -all` |
| DKIM | Check via email provider dashboard | Should be configured if sending email |
| Stale A records | `dig A onivinc.com` / `dig A thesignal.fit` | Should point to Azure SWA; no old IPs |
| HTTPS redirect | `curl -I http://onivinc.com` | Should 301 → https:// |
| HSTS preload | Check hstspreload.org | Both domains eligible (max-age is set to 2 years) |

---

## Summary

| Severity | onivinc | webinfra | Total |
|---|---|---|---|
| 🔴 Critical | 1 | 0 | **1** |
| 🟠 High | 4 | 0 | **4** |
| 🟡 Medium | 8 | 4 | **12** |
| 🟢 Low | 3 | 2 | **5** |
| **Total** | **16** | **6** | **22** |

### Top 5 Priority Fixes

1. 🔴 Replace `YOUR_FORM_ID` in Formspree endpoint — **contact form is broken**
2. 🟠 Run `npm audit fix` — resolves 16 vulnerabilities (9 high, 7 moderate)
3. 🟠 Harden CSP — remove `'unsafe-inline'` from script-src (onivinc)
4. 🟡 Remove FAQ + QuoteForm components per BRIEF.md
5. 🟡 Switch YouTube embed to `youtube-nocookie.com` (webinfra)

---

*Created 2026-05-01 by Mamba 🐍 — Not legal advice; technical assessment only*

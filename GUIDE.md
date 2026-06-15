# Microcontroller Hub — Developer Guide

A complete walkthrough of how the project is built, why it's structured this way, and how to extend it.

---

## 1. Project Philosophy

Three principles drive every decision:

1. **Documentation feel, not dashboard feel** — layouts are wide, content-led, with a left-side TOC. No grid of calculator widgets.
2. **Beginner-first copy** — every concept is introduced in plain language before any code.
3. **Modular, dependency-free code** — anyone with a text editor and a browser can read, edit, and deploy.

---

## 2. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Markup | HTML5 | Semantic, accessible, zero build |
| Styling | CSS3 (custom properties) | Themable, no preprocessor needed |
| Logic | Vanilla JS (ES6+) | No framework, no bundler, no install step |
| Fonts | Google Fonts (Inter, JetBrains Mono) | Crisp, modern, code-friendly |
| Hosting | Any static host | GitHub Pages, Netlify, Vercel, or `file://` |

**No `package.json`. No `node_modules`. No build pipeline.** Open `index.html` and it works.

---

## 3. File Organization

### CSS — split by concern, not by page

```
variables.css   → theme tokens (colors, fonts, spacing, shadows)
base.css        → reset, typography, buttons, footer, utility classes
header.css      → site nav, mobile menu
home.css        → hero, roadmap, features, CTA
content.css     → docs layout (TOC + body), tables, callouts, code blocks
cards.css       → sensor & project card styling
responsive.css  → global breakpoints (last in cascade = highest priority)
```

Pages load only the CSS they need:

| Page | CSS imports |
|---|---|
| `index.html` | variables, base, header, home, responsive |
| `esp32.html` | variables, base, header, content, responsive |
| `sensors.html` | variables, base, header, cards, content, responsive |
| `projects.html` | variables, base, header, cards, content, responsive |
| `reference.html` | variables, base, header, content, responsive |

### JavaScript — one file per behavior

```
nav.js   → mobile hamburger toggle + outside-click dismiss
home.js  → IntersectionObserver reveal of roadmap steps
code.js  → copy-code buttons + TOC scroll-spy
```

Each file is wrapped in an IIFE, so they don't leak globals. They run in load order from the bottom of `<body>`.

---

## 4. Theming

All colors live in `--*` custom properties in `variables.css`. To re-skin the site, edit **one file**:

```css
:root {
  --bg:        #0b0f14;   /* page background */
  --surface:   #121821;   /* cards, code blocks */
  --esp32:     #00e676;   /* primary accent */
  --cyan:      #22d3ee;   /* secondary accent */
  --text:      #e6edf3;   /* body text */
  --muted:     #8b949e;   /* secondary text */
}
```

Gradients are also defined as variables, so the entire visual identity can be swapped without touching layout files.

---

## 5. Page-by-Page Walkthrough

### Home (`index.html`)

The hero uses **floating chips** with subtle animation to convey "live embedded system status" — temperature, LED, IP address. The roadmap is a vertical timeline of 5 cards; each card animates in on scroll via `home.js`.

The **features grid** auto-fits (`minmax(260px, 1fr)`) so it stays a clean responsive grid at any width.

### ESP32 (`esp32.html`)

A **two-column docs layout** (240 px sidebar + flexible body). The sidebar is a sticky table of contents. The body has 7 sections, each scroll-anchored. Code blocks include a copy button.

### Sensors (`sensors.html`)

A long single-page layout with three large **cards stacked vertically**. Each card covers: working principle, pin connections, wiring, example code, applications. Easy to scroll through on mobile.

### Projects (`projects.html`)

Same card style as sensors, but with three full project walkthroughs: difficulty tag, components list, wiring table, code, expected output, real applications.

### Reference (`reference.html`)

The most "documentation-like" page — six reference tables, all with horizontal scroll for narrow screens, plus a working I2C-scanner sketch and a UART2 example.

---

## 6. Key Components

### Code blocks

```html
<div class="code-block">
  <header>
    <span>filename.ino · description</span>
    <button class="copy-btn">Copy</button>
  </header>
  <pre><code>// your code</code></pre>
</div>
```

`code.js` automatically wires the copy button. Filename in the header helps students know which file to create in the Arduino IDE.

### Info callouts

Three variants in `content.css`:

```html
<div class="callout">...</div>            <!-- default (green) -->
<div class="callout info">...</div>        <!-- cyan -->
<div class="callout warn">...</div>        <!-- amber -->
```

Use them for tips, warnings, and "next step" pointers.

### Roadmap step

```html
<div class="roadmap-step">
  <div class="roadmap-marker">
    <div class="roadmap-dot">01</div>
    <div class="roadmap-line"></div>   <!-- skip on last step -->
  </div>
  <div class="roadmap-content">
    <h3>Step title <span class="badge">/ hint</span></h3>
    <p>Description</p>
  </div>
</div>
```

The `01`–`05` numbers come from the content; the connecting line is a CSS gradient, not an image, so it scales perfectly.

### Sensor/Project card

```html
<article class="card">
  <div class="card-icon">🌡️</div>      <!-- or .cyan for variety -->
  <h2>Title</h2>
  <p>Short description</p>
  <div class="card-meta">
    <span class="tag green">Digital</span>
    <span class="tag amber">Intermediate</span>
  </div>
  <div class="card-section">...</div>  <!-- repeat per section -->
</article>
```

Tag colors: `green`, `cyan`, `amber`, `rose` (defined in `cards.css`).

---

## 7. Responsive Strategy

Three breakpoints, all in `responsive.css`:

- **1024 px** — tablet: tighter padding
- **768 px** — mobile: hamburger menu, single-column docs (TOC collapses to a bordered box), single-column feature grid
- **480 px** — small phones: stacked hero buttons, single-column tables-of-contents

The header is **sticky** with `backdrop-filter: blur(12px)` so the dark theme reads correctly while scrolling.

---

## 8. Accessibility

- Semantic tags: `<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`
- `aria-label` on icon-only buttons (hamburger, copy)
- Visible focus rings (browser default, kept)
- Color contrast: `--text` on `--bg` = 14.7:1 (AAA)
- Reduced motion: roadmap reveal uses CSS transitions only; full `prefers-reduced-motion` support is planned

---

## 9. Adding a New Sensor

1. Copy the **DHT11** card in `sensors.html`
2. Update icon, title, description, meta tags
3. Update the 5 `card-section` blocks (working, pins, wiring, code, applications)
4. Add an entry in `CHANGELOG.md`
5. Done. No CSS changes needed — `.card` covers all variants.

## 10. Adding a New Project

Same pattern as a new sensor, in `projects.html`. Use the **Distance Meter** card as a template if you want to include a voltage-divider or threshold logic.

## 11. Adding a New Reference Table

1. Add a new `<section id="xxx">` block in `reference.html`
2. Add a link to it in the sidebar `<ul>`
3. The TOC scroll-spy (in `code.js`) will pick it up automatically.

---

## 12. Future Improvements (Roadmap)

- **v1.1.0** — BME280, MQ-2, LDR, PIR, soil moisture
- **v1.2.0** — Weather station project, IoT dashboard project
- **v1.3.0** — Search bar across all pages
- **v2.0.0** — Light theme toggle (variables already isolated, just need a `[data-theme="light"]` block)

---

## 13. Code Style

- 2-space indent
- Double quotes for HTML attributes and JS strings
- Lowercase custom property names
- Mobile-first media queries (smaller first, larger overrides)
- JS uses modern syntax (`const`, template literals, optional chaining)

---

Built for ECE students. Designed to be read, modified, and shipped. 🚀

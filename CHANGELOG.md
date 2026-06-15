# Changelog

All notable changes to **Microcontroller Hub** are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] — 2026-06-15

### 🎉 Initial Release

The first public version of **Microcontroller Hub** — a complete, brand-new educational website for ESP32 learners, built by **Shyam**.

### Added

#### Pages
- **Home** (`index.html`) — hero section with floating chips, animated 5-step learning roadmap, features grid, CTA
- **ESP32** (`esp32.html`) — what it is, features, applications, why-ESP32, pinout table, first-program guide, blink example
- **Sensors** (`sensors.html`) — detailed cards for DHT11, HC-SR04, and IR obstacle sensor with description, working principle, pin connections, ESP32 wiring, example code, and applications
- **Projects** (`projects.html`) — three full projects (Blink, Temperature Monitor, Distance Meter) with difficulty, components, wiring, code, output preview, and applications
- **Reference** (`reference.html`) — quick-reference tables for GPIO, PWM, ADC, I2C, SPI, and UART

#### Design
- Modern dark theme with ESP32-green (`#00e676`) and cyan (`#22d3ee`) accents
- Documentation-style layout (sidebar TOC + content), distinct from the calculator-style ECE Toolkit
- Inter + JetBrains Mono typography
- Sticky blurred header with active-link highlighting
- Mobile hamburger menu with outside-click dismiss
- Animated roadmap with IntersectionObserver reveal
- Pulsing LED dot, floating status chips
- Copy-to-clipboard buttons on every code block
- TOC scroll-spy on docs pages
- Fully responsive — tested down to 360 px

#### Technical
- Modular CSS split by concern (variables / base / header / home / content / cards / responsive)
- Vanilla JavaScript — no frameworks, no build step
- Pure static site — works on `file://`, GitHub Pages, Netlify, Vercel
- Semantic HTML5 with breadcrumb navigation on sub-pages
- Accessible color contrast and focus states

#### Documentation
- `README.md` — project overview, structure, run instructions
- `GUIDE.md` — architecture, code walkthrough, extension guide
- `CHANGELOG.md` — this file

---

## [Unreleased]

### Planned

- Additional sensors (BME280, MQ-2, LDR, PIR, soil moisture)
- More projects (weather station, IoT dashboard, line-follower robot)
- ESP32-CAM module
- MicroPython variant of each example
- Search bar across the site
- Dark / light theme toggle
- Printable cheat-sheet view
- Interactive GPIO pinout diagram

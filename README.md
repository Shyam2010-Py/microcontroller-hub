# Microcontroller Hub

> A structured, beginner-friendly learning platform for **ESP32**, **sensors**, and **embedded projects** — built for ECE students and electronics hobbyists.
> 
> **Author:** Shyam

![Version](https://img.shields.io/badge/version-1.0.0-00e676)
![Status](https://img.shields.io/badge/status-stable-22d3ee)
![No-build](https://img.shields.io/badge/stack-HTML%20%2B%20CSS%20%2B%20JS-0b0f14)

---

## ✨ Overview

**Microcontroller Hub** is a static educational website that walks beginners through the full ESP32 journey — from the very first blink to real sensor projects. It combines the clarity of a **documentation site** with the engagement of a **learning platform**, all wrapped in a modern dark theme with ESP32-green accents.

## 🎯 Audience

- 🎓 Diploma ECE students
- 🎓 B.Tech ECE students
- 🔌 ESP32 beginners
- 🛠️ Electronics hobbyists

## 🧭 Learning Path

```
ESP32 Basics
   ↓
Blink LED
   ↓
Sensors (DHT11, HC-SR04, IR)
   ↓
Components
   ↓
Projects (Temp Monitor, Distance Meter)
```

## 🗂 Pages

| Page | Purpose |
|---|---|
| `index.html` | Home — hero, animated roadmap, feature grid |
| `esp32.html` | ESP32 — what it is, features, pinout, first program |
| `sensors.html` | DHT11, HC-SR04, IR obstacle sensor cards |
| `projects.html` | Blink, Temperature Monitor, Distance Meter |
| `reference.html` | GPIO / PWM / ADC / I2C / SPI / UART tables |

## 🎨 Design

- **Theme:** Modern dark (`#0b0f14`) with **ESP32 green** (`#00e676`) and **cyan** (`#22d3ee`) accents
- **Typography:** Inter (UI) + JetBrains Mono (code)
- **Style:** Documentation / learning platform — *not* a calculator-style dashboard
- **Responsive:** Mobile-first, fully tested on small screens
- **Identity:** Unique to Microcontroller Hub (no shared design with ECE Toolkit)

## 🛠 Tech Stack

- Pure **HTML5**, **CSS3**, **Vanilla JavaScript**
- Google Fonts (Inter, JetBrains Mono)
- No build step · No dependencies · No frameworks
- Drop into any static host (GitHub Pages, Netlify, Vercel, local file://)

## 📁 Project Structure

```text
microcontroller-hub/
├── index.html              Home
├── esp32.html              ESP32 module
├── sensors.html            Sensor cards
├── projects.html           Project cards
├── reference.html          Pin & protocol reference
│
├── assets/
│   ├── css/
│   │   ├── variables.css   Theme tokens
│   │   ├── base.css        Reset + buttons + footer
│   │   ├── header.css      Sticky nav + mobile menu
│   │   ├── home.css        Hero + roadmap + features
│   │   ├── content.css     Docs layout + tables + code blocks
│   │   ├── cards.css       Sensor & project cards
│   │   └── responsive.css  Media queries
│   ├── js/
│   │   ├── nav.js          Mobile nav toggle
│   │   ├── home.js         Roadmap reveal animation
│   │   └── code.js         Copy-code + TOC scroll-spy
│   └── img/                (reserved for diagrams)
│
├── README.md
├── CHANGELOG.md
└── GUIDE.md
```

## 🚀 Run Locally

This is a static site — open `index.html` directly in a browser, **or** serve it:

```bash
# Python 3
cd microcontroller-hub
python3 -m http.server 8000
# open http://localhost:8000
```

```bash
# or any static server
npx serve .
```

## 📖 Documentation

- **[GUIDE.md](./GUIDE.md)** — How the project is built, how code is organized, how to extend it.
- **[CHANGELOG.md](./CHANGELOG.md)** — Version history and what changed.

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and adapt. Suggestions for new modules are welcome.

## 📜 License

Released under the **MIT License**. Free to use, modify, and ship. See `LICENSE` file for full text.

---

**Built with 💚 by Shyam for ECE students learning embedded systems.**

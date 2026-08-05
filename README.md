# K-Digitals Banks — ATM Machine Website

A fully functional front-end ATM simulator built from scratch with vanilla HTML, CSS, and JavaScript — no frameworks, no libraries beyond Font Awesome and Google Fonts.

## Overview

This project simulates a real ATM experience: a PIN-protected login screen, a dashboard with live account data, and six core banking operations, all backed by real JavaScript logic (not just static UI).

## Features

- **PIN login system** — 4-digit PIN entry with auto-advance between input boxes, wrong-PIN handling, and input clearing
- **Dashboard** with a dynamic, always-updating account summary (balance, account details)
- **Six operations**, each with real logic and validation:
  - Check Balance
  - Withdraw Money (validates against current balance)
  - Deposit Money
  - Mini Statement (reads from a JS transaction history array)
  - Change PIN (verifies old PIN, confirms new PIN)
  - Exit / Logout (with confirmation dialog)
- **Live transaction history table** — every withdrawal/deposit is logged with a real, dynamically generated timestamp, and inserted at the top of the table
- **Responsive design** — fully adapted for mobile, tablet, and desktop
- **Custom entrance animation** — the login card drops in on page load, followed by a staggered PIN box reveal
- **Color-coded UI** — each operation has a distinct accent color to guide the eye, with deliberate attention paid to visual hierarchy (e.g. toning down the Logout button so it doesn't visually dominate the page)

## Tech Stack

- HTML5 (semantic structure, accessibility attributes)
- CSS3 (Flexbox, Grid, custom properties, keyframe animations, media queries)
- Vanilla JavaScript (DOM manipulation, event handling, array/object data structures, Date API)
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) for typography

## Demo PIN

Use `1234` to log in.

## Getting Started

Clone the repo and open `index.html` in your browser — no build step or dependencies required.

```bash
git clone https://github.com/Mustafa078/Banking-website-frontend.git
cd Banking-website-frontend
```

Then open `index.html` directly, or serve it with a local dev server (e.g. VS Code's Live Server extension).

## Author

Built by [Mustafa](https://github.com/Mustafa078) as a graded assignment during a MERN stack training program — first major self-built front-end project combining semantic HTML, custom CSS design, and real JavaScript application logic.

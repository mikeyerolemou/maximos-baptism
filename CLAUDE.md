# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static HTML event invitation website for Maximos' baptism (April 14, 2026). The entire app lives in a single `index.html` file with no build tools, no dependencies, and no package manager.

## Running Locally

No build step required. Open directly or serve with any HTTP server:

```bash
open index.html
# or
python3 -m http.server 8000
```

## Architecture

All code is in `index.html`:
- **CSS** (~500 lines in `<style>` tags): Custom CSS with variables, animations, and responsive design
- **JavaScript** (~90 lines in `<script>` tags): Vanilla JS for countdown timer, modal RSVP dialog, and button ripple effects

Static assets:
- `maximos.png` — favicon/logo
- `maximos-cloud.png` — floating cloud illustration
- `baptism.ics` — downloadable iCalendar file with church and reception events

## Key Implementation Details

**CSS variables** define the color scheme in `:root` (`--ink`, `--accent`, `--card`, etc.).

**JavaScript features:**
- Countdown timer targeting `2026-04-14T12:00:00+03:00`, updating every second
- Modal dialog with embedded Google Forms iframe for RSVP (closes via backdrop click, X button, or Escape key)
- Ripple effect on buttons (respects `prefers-reduced-motion`)

**External integrations:**
- Google Fonts (Playfair Display + Inter)
- Google Forms (RSVP modal iframe)
- Google Maps (location links)
- SMS protocol link with pre-filled message

**Language:** The UI text is in Greek.

## Deployment

Drop all files (`index.html`, `maximos.png`, `maximos-cloud.png`, `baptism.ics`) on any static host. No build step needed.
Remote: `git@github.com:mikeyerolemou/maximos-baptism.git`

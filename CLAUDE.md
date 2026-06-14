# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Masahiro Yamane. Pure static HTML/CSS/JS — no build system, no package manager, no framework.

## Architecture

- `index.html` — main portfolio page (About / Career / Works / Contact sections)
- `coffee-research.html` — hobby sub-page linked from Works section
- `styles.css` — single shared stylesheet for both pages
- `script.js` — fetches latest 3 Zenn articles via `api.rss2json.com` RSS-to-JSON proxy, caches results in `localStorage` for 1 hour, and displays days-since-last-post
- `images/` — static assets (profile photo, coffee images, favicon)
- `read/` — personal reading notes in Markdown (not linked from the site)

## Content conventions

- Content is bilingual: Japanese primary, English translation in `<em>` tags on the next line
- Both pages share `styles.css` — add new styles there, not inline, unless one-off layout overrides
- The `.career-item` CSS class is reused in `coffee-research.html` for coffee entries; it is not semantically tied to career content
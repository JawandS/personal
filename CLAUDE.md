# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Jawand Singh built with Next.js 16, React 19, and TypeScript. Features advanced 3D graphics and animations using Three.js and OGL. Deployed on Railway.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Architecture

**Framework**: Next.js App Router (`app/` directory)

**Key Components** (in `components/`):
- `Antigravity.jsx` - Three.js particle animation background with mouse tracking, 570 particles in ring formations
- `CircularGallery.jsx` - OGL-based WebGL carousel with infinite scroll and bending effect
- `DecryptedText.jsx` - Animated text reveal with configurable triggers (hover, view)
- `GlareHover.jsx` - CSS-based glare/shine effect on hover

All interactive components use dynamic imports with SSR disabled due to WebGL dependencies.

**Styling**: Tailwind CSS v4 with PostCSS. Uses purple color palette defined in `globals.css` and documented in README.md.

**Component Source**: Many components adapted from [React Bits](https://reactbits.dev/)

## Path Alias

`@/*` maps to the project root (e.g., `@/components/Antigravity`)

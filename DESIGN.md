---
name: Obsidian Utility
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#45dfa4'
  on-secondary: '#003825'
  secondary-container: '#00bd85'
  on-secondary-container: '#00452e'
  tertiary: '#ffc42f'
  on-tertiary: '#402d00'
  tertiary-container: '#e1a800'
  on-tertiary-container: '#584000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#68fcbf'
  secondary-fixed-dim: '#45dfa4'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#f9bd22'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.035em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0em
  mono-metric:
    fontFamily: JetBrains Mono
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.02em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.4rem
    letterSpacing: -0.01em
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies technical mastery, deliberate restraint, and quiet high-performance utility. Built to represent a backend-strong full-stack systems engineer, it communicates rigorous architecture, clean execution, and uncompromising precision.

The visual ethos blends the high-density utility of developer workflows with the polished, dark-slate sophistication of modern craft software (Linear, Raycast, Vercel). The design eschews ornamental decoration, heavy glow gradients, and skeuomorphic excess in favor of razor-sharp 1px dividers, structured hierarchical typography, deliberate spatial rhythm, and purposeful accent hits.

Key attributes:
- **Atmosphere:** Deep obsidian space punctuated by crisp, cold geometry.
- **Audience:** Engineering leaders, technical founders, and product peers who value execution depth, performance, and attention to detail.
- **Emotional Intent:** Confident, unhurried authority, analytical clarity, and production-grade craftsmanship.

## Colors

The palette operates in strict low-reflectance space with a calibrated hierarchy of slate-infused blacks and precise semantic accents.

### Base & Surfaces
- **Canvas Base (`#0B0D11`):** Deep obsidian slate. Low glare, absolute foundation.
- **Surface Level 1 (`#14171F`):** Subtle dark slate for cards, code panels, and elevated containers.
- **Surface Level 2 / Hover (`#1A1F2C`):** Interactive resting states, hover lifts, tooltips, and contextual menus.
- **Surface Level 3 / Active (`#22293A`):** Pressed states and active tab indicators.

### Structure & Lines
- **Hairline Border (`#222735`):** Structural 1px separation. High definition without distraction.
- **Border Focus / Interactive (`#38BDF8`):** Focused inputs, active state outlines, and primary keylines.
- **Subtle Divider (`rgba(34, 39, 53, 0.6)`):** Internal component separators.

### Typography
- **Primary Text (`#F1F5F9`):** Crisp off-white. Maximum legibility for headings and primary metrics.
- **Secondary Text (`#94A3B8`):** Cool slate 400. Clear contrast for body narratives, labels, and secondary copy.
- **Muted Text (`#64748B`):** Metadata, disabled states, key hints, and decorative punctuation.

### Signals & Accents
- **Primary Accent (`#38BDF8` - Electric Cyan):** Reserved for high-value interactive focal points, selected states, and architectural highlights.
- **Live / System Status (`#34D399` - Emerald):** Operational indicators, uptime benchmarks, and completed artifacts.
- **In Development (`#FBBF24` - Amber):** Active experiments, canary builds, and pipeline markers.

## Typography

The typographic hierarchy establishes distinct roles across three functional typefaces:

1. **Headlines (`Plus Jakarta Sans`):** Selected for its modern, geometric geometry with tight letter tracking. Headings feel architectural, decisive, and structural.
2. **Reading & Interface Body (`Inter`):** Industrial, neutral, and uncolored. Inter provides high readability across lengthy technical architecture docs, case studies, and engineering breakdowns.
3. **Metadata & Code (`JetBrains Mono`):** Dedicated to technical data, execution telemetry, terminal snippets, commit hashes, and pill badges.

Font weights are deliberately constrained to Medium (500), SemiBold (600), and Bold (700) for headers and labels, while Body stays predominantly at Regular (400) to keep content unencumbered.

## Layout & Spacing

The spatial model uses an 8px base grid unit paired with a constrained fixed-width canvas (maximum `1200px`) centered on larger displays, transitioning to a fluid container on tablet and mobile viewports.

### Breakpoint Structure
- **Desktop (>= 1024px):** 12-column grid, `2.5rem` section margins, `1.5rem` column gutters.
- **Tablet (640px - 1023px):** 6-column grid, `1.75rem` margin, `1.25rem` gutter. Complex split cards fold to single-column or 2-column groups.
- **Mobile (< 640px):** 4-column fluid layout with `1.25rem` outer canvas margin, `1rem` column gutters. Toolbars and inline statistics collapse into vertical stacks.

### Density Rhythm
- **Data Densities:** Compact component padding (`space-xs` to `space-sm`) is favored inside technical logs, metrics tables, and code snippets.
- **Editorial Breathing Room:** Generous vertical rhythm (`space-xl` to `space-xl * 2`) separates distinct work archives, engineering initiatives, and case studies to maintain focus.

## Elevation & Depth

Depth in this system is driven by tonal luminosity and crisp structural outlines rather than soft, diffuse drop-shadows.

### Structural Layering
- **Level 0 (Canvas):** `#0B0D11`.
- **Level 1 (Structural Containers):** `#14171F` with a continuous `1px solid #222735` perimeter border.
- **Level 2 (Hover & Raised Elements):** `#1A1F2C` with border shifting to `#2E364A`. On interactive cards, a subtle directional top inset highlight (`inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`) simulates machined edges.
- **Level 3 (Overlays & Dropdowns):** `#14171F` background, `1px solid #2E364A`, augmented by a focused, low-spread ambient shadow: `0 12px 32px -4px rgba(0, 0, 0, 0.7)`.

### Border Integrity
Every layer interface must feature a 1px border. Never rely on color shifts alone to delineate edges. The 1px boundary provides the distinct "hardware console" feel characteristic of high-end developer tools.

## Shapes

The geometric framework is calibrated to a tight, consistent `8px` (`0.5rem`) radius across all standard interactive elements, cards, and input surfaces.

- **Standard Containers & Cards (`roundedness: 2` / `0.5rem`):** Applied uniformly to project cards, metric panels, code blocks, and modals.
- **Micro Elements (`0.25rem` / `rounded-sm`):** Reserved for technical tag badges, inline code highlights, and command-key (`KBD`) triggers.
- **Interactive Buttons (`0.5rem`):** Matches the core card radius for unified visual cohesion.
- **Status Indicators & Avatars:** Fully circular (`9999px`) to contrast sharply against the rigid rectangular geometry of the surrounding surfaces.

## Components

### Buttons
- **Primary Action:** Solid `#38BDF8` background with `#0B0D11` typography (SemiBold 600). Hover shifts to an illuminated Sky-300 (`#7DD3FC`). Active state applies a micro-scale transition (`scale: 0.98`).
- **Secondary / Technical Action:** Background `#14171F`, border `1px solid #222735`, text `#F1F5F9`. Hover state shifts surface to `#1A1F2C` and border to `#38BDF8`.
- **Ghost Action:** Transparent background, text `#94A3B8`, hover text `#F1F5F9` and surface `rgba(255, 255, 255, 0.04)`.

### Cards & Panels
- Constructed with `#14171F` fill, `1px solid #222735` border, and `0.5rem` corner radius.
- Padding follows `space-lg` (`1.5rem`) on desktop and `space-md` (`1rem`) on mobile.
- Interactive cards feature a hover lift with border transition from `#222735` to `#2E364A` and background shift to `#1A1F2C`.

### Chips & Badges
- **Technical Status Badge:** Monospace font (`JetBrains Mono`, `0.75rem`), height `24px`, horizontal padding `0.5rem`, `0.25rem` radius.
  - *Live State:* Green tint background (`rgba(52, 211, 153, 0.1)`), text `#34D399`, border `1px solid rgba(52, 211, 153, 0.25)`, accompanied by a pulsing 6px `#34D399` circular ping indicator.
  - *Build / In-Dev State:* Amber tint background (`rgba(251, 191, 36, 0.1)`), text `#FBBF24`, border `1px solid rgba(251, 191, 36, 0.25)`.
  - *Neutral Metric Chip:* Background `#0B0D11`, border `1px solid #222735`, text `#94A3B8`.

### Input Fields & Controls
- **Text Inputs:** Background `#0B0D11`, text `#F1F5F9`, border `1px solid #222735`, `0.5rem` radius. Focus ring produces `border-color: #38BDF8` and an ambient shadow `0 0 0 1px #38BDF8`. Placeholder text rendered in `#64748B`.
- **Checkboxes & Radios:** `16px` squared/circular components with `#14171F` fill and `#222735` perimeter. Checked state fills with `#38BDF8` featuring an obsidian `#0B0D11` check glyph.

### Code Panels & Metadata Tables
- Background `#0B0D11` with a dedicated `#14171F` top titlebar holding language labels and copy buttons.
- Border `1px solid #222735`. Typography uses `JetBrains Mono` at `0.875rem` with line numbers rendered in muted `#64748B`.

### Lists & Activity Feeds
- Unbordered list rows separated by subtle dividers (`rgba(34, 39, 53, 0.6)`).
- Left-aligned timestamp or commit ref in monospace, primary title in `#F1F5F9`, and right-aligned status badge.
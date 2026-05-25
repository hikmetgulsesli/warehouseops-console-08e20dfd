---
name: WarehouseOps Console
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#ffe083'
  on-secondary: '#3c2f00'
  secondary-container: '#eec200'
  on-secondary-container: '#645000'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#ffe083'
  secondary-fixed-dim: '#eec200'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 1.5rem
  gutter-dense: 0.5rem
  gutter-default: 1rem
  sidebar-width: 240px
  row-height-sm: 32px
  row-height-md: 40px
---

## Brand & Style

The design system is engineered for high-stakes industrial environments where information density and clarity are paramount. The brand personality is **utilitarian, precise, and resilient**, prioritizing operational efficiency over aesthetic flourish. 

The visual style follows a **Modern Corporate/Industrial** approach:
- **Functional Density:** Interfaces are packed with data but organized through a rigorous grid to prevent cognitive overload.
- **Reliability:** A "Dense but Calm" aesthetic achieved through muted foundation colors and high-contrast status indicators.
- **Zero Distraction:** Elimination of soft shadows, gradients, and decorative animations in favor of crisp borders and tonal layering.
- **Target Audience:** Warehouse managers, maintenance engineers, and logistics coordinators operating in high-pressure, multi-monitor environments.

## Colors

The palette is anchored in a dark-mode-first architecture to reduce eye strain during long shifts in warehouse control rooms.

- **Foundations:** The primary background uses a deep navy-slate (`#0F172A`), with tiered surfaces using slightly lighter slate tones (`#1E293B`) to establish hierarchy.
- **Action & Status:** 
  - **Safety Blue (Primary):** Used exclusively for primary actions and system-level navigation.
  - **Industrial Yellow (Warning):** High-visibility tone for non-critical alerts, maintenance timers, and pending states.
  - **Emerald (Success/Online):** Indicates active machinery, completed tasks, and healthy system status.
  - **Crimson (Error/Alert):** Reserved for hardware failures, safety breaches, and critical downtime.
- **Borders:** Subtle slate-gray borders (`#334155`) provide structural definition without adding visual noise.

## Typography

This design system utilizes **Inter** for all primary interface elements due to its exceptional legibility at small sizes and high x-height. **JetBrains Mono** is introduced for technical labels, sensor data, and timestamps to provide a distinct "industrial/readout" feel that aids in rapid data scanning.

- **Data Density:** Typography scales are kept tight. Body text is centered around 13px/14px to maximize screen real estate.
- **Monospacing:** All numerical values, including table data and countdowns, should use tabular figures or the monospaced label font to ensure columns align perfectly for comparison.
- **Hierarchy:** Contrast is achieved through weight (Medium/SemiBold) rather than dramatic size increases.

## Layout & Spacing

The layout is a **Fixed Sidebar + Fluid Content** model optimized for 1080p and 1440p displays. 

- **Grid:** A strict 4px baseline grid governs all spacing. Vertical rhythm is critical for maintaining "calm" density.
- **Information Density:** Components like data tables use a "compact" vertical padding (8px) by default, allowing for 15-20 rows to be visible above the fold.
- **Breakpoints:**
  - **Desktop (1280px+):** Full 12-column dashboard layout with persistent sidebar.
  - **Tablet (768px-1279px):** Sidebar collapses to icons; cards reflow to a 1 or 2-column stack.
  - **Mobile:** Not prioritized for the "Console," but if required, focuses exclusively on critical alerts and individual machine status cards.

## Elevation & Depth

This design system avoids traditional shadows to keep the UI feeling "grounded" and technical.

- **Tonal Layering:** Depth is conveyed through background color steps. The base is Level 0 (`#0F172A`), cards/containers are Level 1 (`#1E293B`), and active/hover states are Level 2 (`#334155`).
- **Low-Contrast Outlines:** Every container and interactive element must have a 1px solid border. This provides structural rigidity necessary for high-density layouts.
- **Focus States:** High-contrast 2px Safety Blue outlines are used for keyboard navigation and active input fields to ensure zero ambiguity.

## Shapes

The shape language is **geometric and industrial**. 

- **Radius:** A "Soft" radius (4px) is used for all standard components (buttons, inputs, cards). This is just enough to prevent the UI from feeling aggressive while maintaining a professional, engineered look.
- **Status Badges:** Use a 2px radius or remain square to differentiate them from interactive buttons.
- **Icons:** Use sharp or slightly rounded functional icon sets (stroke-based, 2px weight) to match the typography.

## Components

- **Data Tables:** The core of the system. Must feature sticky headers, zebra striping (using tonal layers), and integrated status dots. 
- **Status Badges:** Compact labels with a "Subtle Fill" (10% opacity of the status color) and a "Strong Border" (100% opacity). This ensures the color is identifiable without being overwhelming.
- **Control Buttons:** 
  - *Primary:* Solid Safety Blue.
  - *Secondary:* Ghost style with Slate-400 borders.
  - *Critical:* Solid Crimson, requiring a confirmation step.
- **Navigation Sidebar:** Darker than the main content area. Uses vertical "Active" indicators (a 3px vertical line in Safety Blue) to show the current location.
- **Input Fields:** Dark background (`#0F172A`) with a subtle border. Validation errors use Crimson text and a 1px Crimson border—never just color alone.
- **KPI Cards:** Fixed-height containers with a large monospaced value and a small trending indicator (Emerald/Crimson) in the top-right corner.
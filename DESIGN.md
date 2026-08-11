# Design System Document

## 1. Creative North Star: "Precision Architectural Editorial"
This design system moves away from the generic "grid-and-box" real estate template. Our Creative North Star is **Precision Architectural Editorial**. We treat the browser window as a high-end coffee table book, blending the raw, technical authority of construction with the sophisticated, aspirational lifestyle of luxury real estate. 

The aesthetic is driven by "Tonal Depth" and "Intentional Asymmetry." We avoid standard boxed layouts in favor of overlapping elements, oversized typography, and deep charcoal voids punctuated by surgical strikes of Lime Green. The experience should feel engineered, not just "built."

---

## 2. Colors: The High-Contrast Tonal Strategy
The palette is rooted in the "Charcoal & Lime" brand identity, but interpreted through a lens of premium UI depth.

### Surface Hierarchy & The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning. 
Structure is defined through background shifts. By nesting `surface-container` tiers, we create a "machined" feel of depth without the clutter of lines.

*   **Surface (Base):** `#131313` (The void).
*   **Surface-Container-Low:** Use for secondary sections or background breaks.
*   **Surface-Container-Highest:** Use for interactive cards to create a "lifted" feel from the charcoal base.

### The Glass & Gradient Rule
*   **Signature Textures:** For Hero CTAs and high-impact states, use a subtle linear gradient from `primary` (#a6e008) to `primary-container` (#8fc200) at a 135-degree angle. This provides a metallic, industrial sheen that feels more "premium development" than a flat green.
*   **The Glass Overlay:** Use semi-transparent `surface_variant` with a 12px-20px backdrop-blur for floating navigation or property detail overlays. This ensures the technical blueprints or property photography underneath remains visible, suggesting transparency and depth.

---

## 3. Typography: The Authoritative Voice
We utilize a dual-personality geometric sans-serif approach. **Manrope** provides the structural warmth for reading, while **Space Grotesk** offers a technical, monospace-adjacent precision for metadata and labels.

*   **Display-LG (Manrope, 3.5rem):** Set with `-0.04em` letter spacing. Use for high-impact editorial headlines.
*   **Headline-MD (Manrope, 1.75rem):** The "Workhorse" for property titles and service headers.
*   **Label-MD (Space Grotesk, 0.75rem):** Use for technical specs (e.g., "SQ FT," "LOAD BEARING," "LOT 402"). Always uppercase with `0.1em` tracking to mimic architectural blueprints.
*   **Hierarchy Note:** Use dramatic scale shifts. A `Display-LG` headline should often sit next to a `Label-MD` metadata point to create a "Technical vs. Aspirational" tension.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too "software." We use ambient light and material stacking.

*   **The Layering Principle:** To highlight a property card, place a `surface-container-highest` (#353534) element on a `surface` (#131313) background. The 3.5% difference in luminosity is enough for the eye to perceive a physical layer.
*   **Ambient Shadows:** If a floating modal is required, use a shadow with a 60px blur, 0px offset, and 6% opacity using the `on-surface` color. It should feel like a soft glow, not a drop shadow.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline-variant` at 15% opacity. It must be felt, not seen.

---

## 5. Components: Engineered Elements

### Buttons (Precision Triggers)
*   **Primary:** Solid `primary` (#a6e008) with `on-primary` (#253600) text. Corner radius: `md` (0.375rem). No shadow.
*   **Secondary:** Ghost style. `outline` color for text and a 10% opacity `outline` border. On hover, transition to a 5% `primary` tint background.
*   **Tertiary:** `Space Grotesk` uppercase text with a 2px `primary` underline that expands from the center on hover.

### Architectural Cards
*   **Rule:** Forbid divider lines.
*   **Structure:** Use a `surface-container-low` background. Images should be edge-to-edge on the top and sides, with a `sm` (0.125rem) radius to keep them looking "sharp" and "technical." 
*   **Content:** Group text using the Spacing Scale (e.g., 24px padding). Use `Space Grotesk` for technical specs at the bottom, separated by a simple background color shift rather than a line.

### Input Fields (The Blueprint Style)
*   **Default:** `surface-container-highest` background with a bottom-only `outline-variant` stroke (2px). 
*   **Focus:** The bottom stroke animates to `primary` (#a6e008). 
*   **Labels:** Use `label-md` (Space Grotesk) floating above the input, always visible to maintain an "official document" feel.

### Specialized Components: The Progress Blueprint
*   **Construction Timeline:** A vertical stepper using `primary` for completed phases and `outline-variant` for upcoming. Use high-contrast typography to emphasize the current construction "Status."

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Negative Space:** Allow large sections of `surface` (#131313) to breathe. It signals luxury and confidence.
*   **Asymmetric Layouts:** Offset images from text blocks. Let a photo of a home bleed off the edge of the screen while the technical data remains centered.
*   **Use the Lime Sparingly:** The `primary` green is a "laser sight." Use it for CTAs, status indicators, and micro-interactions, but never for large background areas.

### Don't:
*   **Don't use Rounded-Full:** Avoid `full` (pill) shapes for buttons unless they are floating action buttons. We want sharp, intentional corners (`md` or `lg`) that mirror architectural lines.
*   **Don't use Standard Dividers:** Never use a `#000` or `#FFF` line to separate content. Use a `surface-container` shift.
*   **Don't Soften the Technical:** Do not hide the technical data (square footage, materials, zoning). Elevate it using `Space Grotesk` to show the firm's dual expertise in development.

---

## 7. Roundedness Scale
| Token | Value | Application |
| :--- | :--- | :--- |
| `none` | 0px | Hard architectural edges, hero sections |
| `sm` | 0.125rem | Secondary images, small badges |
| `md` | 0.375rem | Standard Buttons, Input fields |
| `lg` | 0.5rem | Main property cards, feature blocks |
| `xl` | 0.75rem | Large overlays, modal containers |
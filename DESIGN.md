````markdown
# Design System: High-Fashion Editorial

## 1. Overview & Creative North Star

**Creative North Star: "The Digital Atelier"**

This design system is not a mere layout; it is a curated gallery. It rejects the "app-like" density of standard interfaces in favor of the rhythmic, expansive pacing of a high-fashion editorial. We move beyond the rigid, box-heavy web by embracing the **Power of the Void**—using generous white space as a structural element rather than a lack of content.

The system breaks the "template" look through:

- **Intentional Asymmetry:** Off-center typography and staggered image grids that mirror a physical magazine spread.
- **Typographic Authority:** A high-contrast relationship between razor-sharp serifs and functional sans-serifs.
- **Architectural Layering:** Replacing lines and borders with subtle shifts in tonal value to create depth.

---

## 2. Colors

Our palette is rooted in the "Stark & Muted" philosophy. We use a monochrome foundation of deep blacks and pristine whites, punctuated by "Champagne" (`secondary`) and "Vogue Blue" (`primary`) for moments of high-impact signaling.

### Tonal Strategy

- **Primary (`#0023c4`):** Use sparingly for high-action states or digital-first brand accents.
- **Secondary (`#6f5c31` / Champagne):** Our signature luxury accent. Use for subtle highlights, active states, or premium iconography.
- **Surface Strategy:** We rely on `surface` (`#f9f9f9`) and `surface-container` tiers to organize information.

### The "No-Line" Rule

**Explicit Instruction:** Traditional 1px solid borders are strictly prohibited for sectioning. Layout boundaries must be defined solely through background color shifts. For example, a `surface-container-low` hero section should sit directly against a `surface` body. If you feel the need for a line, use whitespace instead.

### The "Glass & Gradient" Rule

To elevate the experience from flat to "Couture," use semi-transparent surfaces for floating navigation and overlays.

- **Backdrop Blur:** Apply a 12px–20px blur to `surface-container-lowest` at 80% opacity.
- **Signature Textures:** Apply a subtle linear gradient from `primary` to `primary_container` on primary CTAs to provide a "silk-finish" depth that flat hex codes cannot mimic.

---

## 3. Typography

Typography is our primary design element. It is the "architecture" of the page.

### The High-Contrast Scale

- **Display & Headlines (`notoSerif`):** These are your "Vogue" moments. They should be set with tight letter-spacing (-2%) and generous leading. Use `display-lg` for hero statements to demand absolute attention.
- **Body & Titles (`inter`):** The workhorse. This sans-serif provides a modern, clean counterpoint to the romanticism of the serif. It ensures legibility in utilitarian areas of the interface.
- **Labeling (`inter`):** Set in all-caps with increased letter-spacing (+5% to +10%) for a technical, "curated" look.

---

## 4. Elevation & Depth

In this design system, depth is felt, not seen. We avoid the heavy drop-shadows of the 2010s in favor of **Tonal Layering**.

- **The Layering Principle:** Stack surfaces to create focus. An article card (`surface-container-lowest`) should sit on a background of `surface-container-low`. The 1–2% shift in hex value is enough to create "lift" without visual clutter.
- **Ambient Shadows:** If a floating element (like a luxury product modal) requires a shadow, it must be "Atmospheric." Use a blur of 40px, 0px offset, and 4% opacity using a tinted `on-surface` color. It should feel like a soft glow, not a shadow.
- **The Ghost Border Fallback:** If accessibility requires a container edge, use a "Ghost Border": `outline-variant` at 15% opacity. It should be barely perceptible—a whisper of a line.

---

## 5. Components

### Buttons

- **Primary:** Sharp 0px corners. Solid `on_primary_fixed_variant` background. Typography is `label-md`, all-caps, with 150% letter spacing.
- **Secondary:** Transparent background with a `Ghost Border`.
- **States:** On hover, the primary button should shift to a subtle gradient or increase its tonal depth. No rounded corners (`0px`)—sharpness is luxury.

### Cards & Lists

- **Rule:** Forbid the use of divider lines.
- **Execution:** Separate list items using the spacing scale (e.g., 32px vertical gaps). Use `surface-container-high` for hover states to gently "lift" the item.
- **Imagery:** Cards should be image-dominant. Text should overlay the image or sit in a high-contrast container below it.

### Input Fields

- **Styling:** Bottom-border only (`outline-variant` at 40% opacity). This mimics the minimalist aesthetic of high-end stationary.
- **Focus State:** The bottom border transitions to `primary` with a 2px weight.

### Signature Component: The "Editorial Reveal"

A specialized hover-state for images where a `surface-variant` overlay slides back to reveal the full-color high-definition photography, accompanied by a `display-sm` headline.

---

## 6. Do's and Don'ts

### Do

- **Do use "The Big Scale":** If an image is important, let it take up 80% of the viewport.
- **Do use Asymmetric Margins:** Allow text columns to be offset from the center to create a dynamic, editorial rhythm.
- **Do prioritize Whitespace:** If a section feels crowded, double the padding. Then double it again.

### Don't

- **Don't use Rounded Corners:** 0px is the standard. Rounded corners signify "friendly/consumer," while sharp corners signify "architectural/luxury."
- **Don't use Center-Aligned Body Text:** Keep body copy left-aligned for a clean, structural edge.
- **Don't use High-Opacity Shadows:** If the user can see where the shadow starts, it is too dark.
- **Don't use standard Dividers:** If you need to separate content, use a change in background color or a significant jump in the spacing scale.```
````

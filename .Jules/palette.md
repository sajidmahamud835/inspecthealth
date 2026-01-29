# Palette's Journal

## 2024-05-22 - Login Experience
**Learning:** Users lack feedback during authentication requests, which can lead to multiple clicks and frustration.
**Action:** Implementing loading states on submit buttons is a critical micro-interaction that should be standard across all forms.

## 2024-05-23 - Accessible Card Selection
**Learning:** Refactoring legacy `div` interactive elements to semantic `button` elements requires explicitly resetting CSS properties (background, width, text-align, border, font-family, color) to override browser defaults.
**Action:** Selectable UI cards should be implemented as `button` elements with `type='button'` and use the `aria-pressed` attribute to indicate selection state.

## 2024-05-24 - Accessible Calendar Grids
**Learning:** Screen readers announce empty grid slots as "button" or "dimmed" if not properly hidden, and visual "selected" states can leak into them if logic is loose.
**Action:** Explicitly set `aria-hidden="true"` and `tabIndex={-1}` on empty calendar slots, and ensure selection logic strictly verifies valid dates.

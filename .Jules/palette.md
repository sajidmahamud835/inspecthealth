# Palette's Journal

## 2024-05-22 - Login Experience
**Learning:** Users lack feedback during authentication requests, which can lead to multiple clicks and frustration.
**Action:** Implementing loading states on submit buttons is a critical micro-interaction that should be standard across all forms.

## 2024-05-23 - Accessible Card Selection
**Learning:** Refactoring legacy `div` interactive elements to semantic `button` elements requires explicitly resetting CSS properties (background, width, text-align, border, font-family, color) to override browser defaults.
**Action:** Selectable UI cards should be implemented as `button` elements with `type='button'` and use the `aria-pressed` attribute to indicate selection state.

## 2024-05-24 - Calendar Accessibility
**Learning:** Calendar day buttons containing only dates (e.g., '12') are confusing for screen readers as they lack context about the month and year.
**Action:** Always include a full date description in `aria-label` for calendar grids (e.g., "Monday, May 12, 2024") and use `aria-current="date"` for the current day.

# Palette's Journal

## 2024-05-22 - Login Experience
**Learning:** Users lack feedback during authentication requests, which can lead to multiple clicks and frustration.
**Action:** Implementing loading states on submit buttons is a critical micro-interaction that should be standard across all forms.

## 2024-05-23 - Accessible Card Selection
**Learning:** Refactoring legacy `div` interactive elements to semantic `button` elements requires explicitly resetting CSS properties (background, width, text-align, border, font-family, color) to override browser defaults.
**Action:** Selectable UI cards should be implemented as `button` elements with `type='button'` and use the `aria-pressed` attribute to indicate selection state.

## 2026-01-25 - Calendar Accessibility
**Learning:** `aria-current="date"` provides specific semantic meaning for the current day in a calendar grid, distinguishing it from merely "selected" items.
**Action:** Always use `aria-current="date"` for the "today" indicator in date pickers, separate from the user's selection state.

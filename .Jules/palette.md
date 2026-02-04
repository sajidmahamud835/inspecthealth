# Palette's Journal

## 2024-05-22 - Login Experience
**Learning:** Users lack feedback during authentication requests, which can lead to multiple clicks and frustration.
**Action:** Implementing loading states on submit buttons is a critical micro-interaction that should be standard across all forms.

## 2024-05-23 - Accessible Card Selection
**Learning:** Refactoring legacy `div` interactive elements to semantic `button` elements requires explicitly resetting CSS properties (background, width, text-align, border, font-family, color) to override browser defaults.
**Action:** Selectable UI cards should be implemented as `button` elements with `type='button'` and use the `aria-pressed` attribute to indicate selection state.

## 2026-02-04 - Calendar Accessibility
**Learning:** Custom calendar components built with buttons often lack context for screen readers. Adding verbose `aria-label` (e.g., "Monday, October 23") and `aria-current="date"` provides critical orientation that visual users get from layout.
**Action:** Always ensure date selection buttons have verbose labels and explicit state attributes, and hide empty grid slots with `aria-hidden="true"`.

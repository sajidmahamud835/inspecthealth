# Palette's Journal

## 2024-05-22 - Login Experience
**Learning:** Users lack feedback during authentication requests, which can lead to multiple clicks and frustration.
**Action:** Implementing loading states on submit buttons is a critical micro-interaction that should be standard across all forms.

## 2024-05-23 - Interactive Cards as Buttons
**Learning:** Legacy interactive elements (like doctor selection cards) are frequently implemented as `div`s; refactoring to semantic `button` elements requires explicitly resetting CSS properties (background, width, text-align, border, font, color) to override browser defaults.
**Action:** Always check `Appointment.jsx` and similar components for non-semantic interactive elements and refactor them to `button` with `type='button'` and `aria-pressed` attributes.

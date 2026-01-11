# Palette's Journal

## 2024-05-22 - Login Experience
**Learning:** Users lack feedback during authentication requests, which can lead to multiple clicks and frustration.
**Action:** Implementing loading states on submit buttons is a critical micro-interaction that should be standard across all forms.

## 2024-05-22 - Appointment Accessibility
**Learning:** Interactive cards implemented as `div`s with `onClick` are inaccessible to keyboard users and screen readers.
**Action:** Convert selection cards to `<button type="button">` and use CSS to reset styles. Add `aria-pressed` to indicate selection state.

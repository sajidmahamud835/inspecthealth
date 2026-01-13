# Palette's Journal

## 2024-05-22 - Login Experience
**Learning:** Users lack feedback during authentication requests, which can lead to multiple clicks and frustration.
**Action:** Implementing loading states on submit buttons is a critical micro-interaction that should be standard across all forms.

## 2024-05-24 - Interactive List Accessibility
**Learning:** Interactive lists implemented as `div`s with `onClick` are inaccessible to keyboard users and screen readers.
**Action:** Refactor such lists to use `button` elements with proper resets (background, border, width) and `aria-pressed` for selection state.

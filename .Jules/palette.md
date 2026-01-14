# Palette's Journal

## 2024-05-22 - Login Experience
**Learning:** Users lack feedback during authentication requests, which can lead to multiple clicks and frustration.
**Action:** Implementing loading states on submit buttons is a critical micro-interaction that should be standard across all forms.

## 2024-05-23 - Interactive Cards
**Learning:** Interactive cards implemented as `divs` break keyboard accessibility and require manual tab-index management.
**Action:** Always use `<button type="button">` for selection cards, and use CSS to reset default button styles (background, border, text-align) to maintain the visual design.

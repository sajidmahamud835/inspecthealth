# Palette's Journal

## 2024-05-22 - Login Experience
**Learning:** Users lack feedback during authentication requests, which can lead to multiple clicks and frustration.
**Action:** Implementing loading states on submit buttons is a critical micro-interaction that should be standard across all forms.
## 2024-05-23 - Interactive Cards
**Learning:** Interactive cards (like doctor selection) are often implemented as `div`s, making them inaccessible to keyboard users.
**Action:** Always use `button` or `input type="radio"` for selection cards, ensuring to reset browser default styles (border, background, text-align).

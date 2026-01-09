# Palette's Journal

## 2024-05-22 - Login Experience
**Learning:** Users lack feedback during authentication requests, which can lead to multiple clicks and frustration.
**Action:** Implementing loading states on submit buttons is a critical micro-interaction that should be standard across all forms.

## 2024-05-24 - Doctor Selection
**Learning:** Interactive cards implemented as `div`s block keyboard users.
**Action:** Refactor to `button` elements, reset styles, and add `aria-pressed`. This provides native focus, enter/space support, and semantic meaning for free.

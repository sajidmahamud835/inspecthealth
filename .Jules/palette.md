# Palette's Journal

## 2024-05-22 - Login Experience
**Learning:** Users lack feedback during authentication requests, which can lead to multiple clicks and frustration.
**Action:** Implementing loading states on submit buttons is a critical micro-interaction that should be standard across all forms.

## 2026-01-28 - Semantic Selection
**Learning:** Interactive cards implemented as `div`s exclude keyboard and screen reader users from key workflows like doctor selection.
**Action:** Replace `div`s with `button` elements (using `type="button"` and `aria-pressed`), ensuring CSS resets are applied to maintain visual fidelity.

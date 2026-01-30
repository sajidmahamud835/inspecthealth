# Palette's Journal

## 2024-05-22 - Login Experience
**Learning:** Users lack feedback during authentication requests, which can lead to multiple clicks and frustration.
**Action:** Implementing loading states on submit buttons is a critical micro-interaction that should be standard across all forms.

## 2024-05-23 - Accessible Card Selection
**Learning:** Refactoring legacy `div` interactive elements to semantic `button` elements requires explicitly resetting CSS properties (background, width, text-align, border, font-family, color) to override browser defaults.
**Action:** Selectable UI cards should be implemented as `button` elements with `type='button'` and use the `aria-pressed` attribute to indicate selection state.

## 2026-01-20 - Custom Calendar Accessibility
**Learning:** Custom calendar implementations often rely on visual cues (grid position, highlighting) which are invisible to screen readers. Buttons showing only "15" are confusing without context.
**Action:** Always provide full date context via `aria-label` (e.g., "Monday, May 15, 2024") and use `aria-current="date"` for today and `aria-pressed` for selection. Hide empty filler slots with `aria-hidden="true"`.

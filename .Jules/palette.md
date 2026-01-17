# Palette's Journal

## 2024-05-22 - Login Experience
**Learning:** Users lack feedback during authentication requests, which can lead to multiple clicks and frustration.
**Action:** Implementing loading states on submit buttons is a critical micro-interaction that should be standard across all forms.

## 2024-05-24 - Testing OAuth Popups
**Learning:** Playwright and headless browsers struggle to interact with or verify states dependent on `window.open` (like `signInWithPopup`), making E2E verification of these flows brittle.
**Action:** For popup-based auth, rely on unit tests for component state logic and mocked providers for integration tests, rather than full E2E flows.

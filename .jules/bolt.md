## 2024-05-22 - Micro-optimizations vs Measurable Impact
**Learning:** React `useMemo` for simple arithmetic or string formatting is often considered a premature optimization if not backed by profiling. While it prevents referential changes, the overhead can outweigh benefits.
**Action:** Always justify optimizations with specific scenarios (e.g., "prevents 30+ object creations per render") and verify impact. Avoid optimizing standard JS operations unless in a hot loop.

## 2026-01-19 - Controlled vs Uncontrolled Inputs in Forms
**Learning:** In simple forms without validation-on-type, switching from controlled (`useState`) to uncontrolled (`useRef`) inputs can eliminate N re-renders (where N is character count). This is a high-value, low-effort optimization for mobile responsiveness.
**Action:** Default to `useRef` for form inputs unless real-time validation or conditional rendering based on input value is required.

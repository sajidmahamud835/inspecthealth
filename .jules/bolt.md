## 2024-05-22 - Micro-optimizations vs Measurable Impact
**Learning:** React `useMemo` for simple arithmetic or string formatting is often considered a premature optimization if not backed by profiling. While it prevents referential changes, the overhead can outweigh benefits.
**Action:** Always justify optimizations with specific scenarios (e.g., "prevents 30+ object creations per render") and verify impact. Avoid optimizing standard JS operations unless in a hot loop.

## 2026-02-04 - Cumulative Layout Shift (CLS) Prevention
**Learning:** Adding explicit `width` and `height` attributes to images, even if styled with CSS, is critical for preventing Cumulative Layout Shift (CLS) as it allows the browser to reserve space before the image loads. This is especially effective when combined with `loading="lazy"` for below-the-fold content.
**Action:** Always verify image attributes on lists of items to ensure CLS protection.

## 2024-05-22 - Micro-optimizations vs Measurable Impact
**Learning:** React `useMemo` for simple arithmetic or string formatting is often considered a premature optimization if not backed by profiling. While it prevents referential changes, the overhead can outweigh benefits.
**Action:** Always justify optimizations with specific scenarios (e.g., "prevents 30+ object creations per render") and verify impact. Avoid optimizing standard JS operations unless in a hot loop.

## 2024-10-24 - Image CLS Optimization
**Learning:** Explicit `width` and `height` attributes on `<img>` tags are crucial for preventing Cumulative Layout Shift (CLS), even when CSS is used. They allow the browser to reserve the correct aspect ratio and space immediately.
**Action:** Always ensure critical images (and lazy loaded ones) have integer `width` and `height` attributes matching their display size or aspect ratio.

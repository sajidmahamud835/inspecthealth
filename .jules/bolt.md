## 2024-05-22 - Micro-optimizations vs Measurable Impact
**Learning:** React `useMemo` for simple arithmetic or string formatting is often considered a premature optimization if not backed by profiling. While it prevents referential changes, the overhead can outweigh benefits.
**Action:** Always justify optimizations with specific scenarios (e.g., "prevents 30+ object creations per render") and verify impact. Avoid optimizing standard JS operations unless in a hot loop.

## 2024-05-24 - Layout Shifts & External Images
**Learning:** External images without explicit dimensions are a guaranteed source of Cumulative Layout Shift (CLS), especially in lists (like doctor cards). CSS alone handles the *final* layout, but HTML attributes (`width`/`height`) are needed for the browser to reserve space *before* the image loads.
**Action:** Always add `width`, `height`, and `loading="lazy"` to `<img>` tags, especially when rendering lists of content where images might be below the fold.

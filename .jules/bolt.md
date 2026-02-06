## 2024-05-22 - Micro-optimizations vs Measurable Impact
**Learning:** React `useMemo` for simple arithmetic or string formatting is often considered a premature optimization if not backed by profiling. While it prevents referential changes, the overhead can outweigh benefits.
**Action:** Always justify optimizations with specific scenarios (e.g., "prevents 30+ object creations per render") and verify impact. Avoid optimizing standard JS operations unless in a hot loop.

## 2026-02-06 - Date Normalization for Render Loops
**Learning:** Optimizing `new Date()` creation in render loops (like calendars) by pre-calculating normalized timestamps (midnight) allows replacing `date.toDateString()` string comparisons with fast `date.getTime()` integer comparisons. This avoids both object allocation and string allocation.
**Action:** When working with calendar grids, always normalize the "target" dates (today, selected) once per render and use timestamp comparison.

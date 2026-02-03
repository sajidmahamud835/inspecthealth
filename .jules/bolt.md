## 2024-05-22 - Micro-optimizations vs Measurable Impact
**Learning:** React `useMemo` for simple arithmetic or string formatting is often considered a premature optimization if not backed by profiling. While it prevents referential changes, the overhead can outweigh benefits.
**Action:** Always justify optimizations with specific scenarios (e.g., "prevents 30+ object creations per render") and verify impact. Avoid optimizing standard JS operations unless in a hot loop.

## 2024-05-23 - Date Objects in Render Loops
**Learning:** In calendar components, creating `new Date()` objects inside `map` loops (e.g., for `isToday` checks) causes significant GC pressure (O(N) allocations per render). Normalizing a single `today` date object at the component level allows for O(1) integer comparisons (`getTime()`), which is ~28x faster in micro-benchmarks.
**Action:** Pre-calculate reference dates (normalized to midnight) at the top of the render function. Use `date.getTime()` for comparisons instead of `toDateString()` to avoid string allocation overhead. Avoid `useMemo` for the reference date if it risks becoming stale (e.g., crossing midnight while app is open).

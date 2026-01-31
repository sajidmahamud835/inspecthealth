## 2024-05-22 - Micro-optimizations vs Measurable Impact
**Learning:** React `useMemo` for simple arithmetic or string formatting is often considered a premature optimization if not backed by profiling. While it prevents referential changes, the overhead can outweigh benefits.
**Action:** Always justify optimizations with specific scenarios (e.g., "prevents 30+ object creations per render") and verify impact. Avoid optimizing standard JS operations unless in a hot loop.

## 2024-05-22 - Static Data Bundling
**Learning:** Fetching static JSON data from `public/` at runtime introduces unnecessary network latency and requires async state management (`useEffect`/`useState`), leading to layout shifts or loading states.
**Action:** For small, static datasets, move the JSON to `src/` and import it directly. This makes the data available synchronously at build time, eliminating the network request and simplifying the component logic.

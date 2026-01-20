## 2024-05-22 - Micro-optimizations vs Measurable Impact
**Learning:** React `useMemo` for simple arithmetic or string formatting is often considered a premature optimization if not backed by profiling. While it prevents referential changes, the overhead can outweigh benefits.
**Action:** Always justify optimizations with specific scenarios (e.g., "prevents 30+ object creations per render") and verify impact. Avoid optimizing standard JS operations unless in a hot loop.

## 2024-10-24 - Stabilizing Context Providers
**Learning:** Context Providers are only as stable as their value prop. If the value is an object created on every render (even via a custom hook), all consumers re-render, negating `React.memo` optimizations downstream. Also, `new GoogleAuthProvider()` creates a new instance every time, breaking `useCallback` dependencies.
**Action:** Always memoize the return value of custom hooks intended for Context, and trace dependencies (like provider instantiation) to ensure the memoization is effective.

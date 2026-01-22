## 2024-05-22 - Micro-optimizations vs Measurable Impact
**Learning:** React `useMemo` for simple arithmetic or string formatting is often considered a premature optimization if not backed by profiling. While it prevents referential changes, the overhead can outweigh benefits.
**Action:** Always justify optimizations with specific scenarios (e.g., "prevents 30+ object creations per render") and verify impact. Avoid optimizing standard JS operations unless in a hot loop.

## 2026-01-22 - Context Value Stability
**Learning:** Custom hooks that return objects used in Context Providers must memoize their return value. Otherwise, every render of the hook (even if state is unchanged) triggers a re-render of all Context consumers, bypassing optimizations like `React.memo`.
**Action:** Always wrap the return value of custom hooks intended for Context in `useMemo`, and ensure dependencies are also stable (e.g. `useCallback` for handlers).

## 2026-01-22 - Effect Cleanup Pitfall
**Learning:** `useEffect` cleanup functions must *execute* the cleanup logic. Returning a function that returns the cleanup function (e.g., `return () => unsubscribe;`) does nothing. This leads to memory leaks, especially with event listeners.
**Action:** Verify cleanup functions actually call the unsubscription method (e.g., `return () => unsubscribe();` or `return unsubscribe;`).

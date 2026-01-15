## 2024-05-23 - Memoizing Derived Data in Interactive Components
**Learning:** Derived data calculations (like `getDaysInMonth`) inside interactive components run on every render. In `Appointment.jsx`, selecting a date/time triggered unnecessary recalculation of the entire calendar grid.
**Action:** Use `useMemo` for any derived data that depends on stable props/state (like `currentDate`), especially in components with frequent interactions. Verify impact by counting logs.

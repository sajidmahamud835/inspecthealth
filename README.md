<div align="center">

# 🏥 InspectHealth — Modern Healthcare Services Platform

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Authentication-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)

**A responsive single-page application (SPA) focused on accessible healthcare service discovery and secure patient authentication.**

*Accessible • Secure • Responsive*

[Report Bug](https://github.com/sajidmahamud835/inspecthealth/issues) · [Request Feature](https://github.com/sajidmahamud835/inspecthealth/issues)

</div>

---

## 🔬 About The Project

**InspectHealth** addresses the need for streamlined digital patient interfaces. In the modern healthcare landscape, ease of access to service information and secure user verifiable identity are paramount.

This project implements a **Role-Based Access Control (RBAC)** prototype using Firebase, ensuring that sensitive service details are protected behind a secure login wall while maintaining a public-facing informational front. It serves as a study in balancing **User Experience (UX)** with **Data Privacy** in medical web applications.

### 🎯 Key Implementations
1.  **Protected Routes**: Route guards that intercept unauthenticated access attempts to private service pages, redirecting to login with state persistence.
2.  **Federated Identity**: Implementation of OAuth providers (Google) alongside traditional Email/Password flow to reduce friction in user onboarding.
3.  **Responsive Information Architecture**: Utilizing the Grid system of Bootstrap 5 to deliver a consistent experience across mobile, tablet, and desktop devices.

---

## ⚙️ Technical Architecture

The application is built as a client-side rendered (CSR) React application:

-   **Frontend Library**: React.js (Hooks-based architecture).
-   **Routing**: React Router v6 for dynamic navigation.
-   **Authentication & Backend**: Firebase v9 (Modular SDK) for auth and hosting.
-   **Styling**: Bootstrap 5 SCSS for rapid UI development.

---

## ✨ Features

### 🟢 Implemented Capabilities

| Component | Feature Description |
|-----------|---------------------|
| **Service Catalog** | Dynamic rendering of healthcare services from JSON data sources |
| **Authentication System** | Google Sign-In and Email/Password registration |
| **Private Routes** | "Service Details" pages are locked for non-registered users |
| **Context API** | Global state management for user sessions |
| **404 Handling** | Custom error pages for broken links |

### 🗓️ Research & Development Plan (Todo)

- [ ] **Appointment Scheduling**: Integrate a calendar library to allow users to book slots for specific services.
- [ ] **Doctor Profiles**: Detailed bio pages for medical professionals with availability status.
- [ ] **Telemedicine Interface**: (Experimental) WebRTC integration for video consultations.
- [ ] **Medical Records**: Secure storage (Firestore) for patient history (requires HIPAA compliance review).

---

## 🚀 Getting Started

### Prerequisites

-   **Node.js**: v16.0 or higher
-   **Firebase Project**: A project with Authentication enabled (Google & Email provider)

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/sajidmahamud835/inspecthealth.git
    cd inspecthealth
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configuration**
    Create a `firebase.init.js` (or `.env`) file in `src/firebase/` with your credentials:
    ```javascript
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      // ... other keys
    };
    ```

4.  **Run Development Server**
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🤝 Related Projects

Explore other components of the research portfolio:

1.  **[EasyCom](https://github.com/sajidmahamud835/easycom)** - A more advanced implementation of protected routes and user management in a commercial context.
2.  **[BankSync](https://github.com/sajidmahamud835/banksync)** - Shares the "Security First" approach, handling financial data much like health data.
3.  **[WhatsApp Bot](https://github.com/sajidmahamud835/whatsapp-bot)** - Potential integration for sending appointment reminders to patients.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

**[Sajid Mahamud](https://github.com/sajidmahamud835)**

*Full-Stack Developer • React Specialist*

</div>

# MegaBlog - Production Blogging Platform

A content management system built with React, optimized global state, and a secure backend service layer. This project focuses on production-grade form management, reusability, and clean architecture routing guards.

## Tech Stack

- **Frontend Framework:** React (Vite)
- **State Management:** Redux Toolkit & React-Redux
- **Form Architecture:** React Hook Form
- **Backend-as-a-Service:** Appwrite SDK (Auth, Database, Storage)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM

---

##  Key Architecture & Engineering Features

### 1. Reusable Component Layer (`forwardRef`)
Form elements like `Input` and `Select` dropdowns are decoupling layouts from data implementation details. By leveraging `React.forwardRef`, they directly pass physical DOM hooks up to standard validation managers without breaking component containment hooks.

### 2. State-Driven Authentication Guards
Secured routing layout wrapper (`Protected.jsx`) queries Redux global slices directly on component mount. It enforces synchronous navigation gates depending on the state of the user's live token context session.

### 3. Asynchronous Service Layer
Backend API logic is encapsulated inside dedicated vanilla JavaScript classes (`Auth.js`), keeping React UI components clean and ignorant of low-level HTTP network protocols.

---

## Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Anusha614/MegaBlog-with-chai-aur-code.git](https://github.com/Anusha614/MegaBlog-with-chai-aur-code.git)
   cd MegaBlog

# Travlr Getaways – Full Stack Web Application

## 📌 Project Overview
Travlr Getaways is a full-stack web application built to manage both customer-facing and administrative features for a travel booking platform.  
The project demonstrates skills in frontend development, backend development, database integration, secure authentication, and API interaction.

---

## 🏗️ Architecture

### Frontend Development
- Express HTML: Used for rendering static templates and server-side HTML.
- JavaScript: Added dynamic interactivity, form handling, and client-side validation.
- Single-Page Application (SPA): Implemented for smoother navigation and faster page loads by updating only the required parts of the page without a full reload.

Comparison:
- Express HTML focuses on server-side rendering.
- SPA handles client-side updates, making the app feel faster and more modern.
- JavaScript ties both approaches together by managing interactivity across components.

### Backend Development
- Built with Node.js and Express to handle routing, authentication, and API endpoints.
- Used a NoSQL MongoDB database because:
  - MongoDB stores data as flexible JSON-like documents, ideal for dynamic travel data.
  - It integrates seamlessly with Node.js.
  - Scaling and data retrieval are faster compared to traditional SQL when working with nested travel data.

---

## ⚡ Functionality

### JSON vs JavaScript
- JavaScript is the programming language used on the client and server.
- JSON (JavaScript Object Notation is a data format used to transfer structured data between the frontend and backend.
- JSON allows the backend to send structured data that the frontend can easily render in the UI.

### Refactoring & Reusable Components
Throughout the project, several sections of the code were refactored for better efficiency:
- Consolidated duplicate API routes into reusable functions.
- Created reusable UI components for travel packages and booking forms.
- Benefits:
  - Reduced code duplication.
  - Easier maintenance and debugging.
  - Improved app performance and scalability.

---

## 🧪 Testing

### API Testing & Endpoints
- Endpoints represent specific URLs the app uses for data requests.
  - Example:  
    - `GET /api/trips` → fetch available trips  
    - `POST /api/admin/login` → authenticate admin credentials
- Tested endpoints using Postman to ensure accurate data retrieval and secure requests.

### Security Layers
- Added authentication middleware to protect admin routes.
- Used bcrypt to hash passwords for secure storage.
- Implemented role-based access to ensure users cannot access administrative features.

---

## 🪞 Reflection

This course has strengthened my ability to design, build, and secure full-stack web applications.  
Key skills I developed include:
- Building Express-based APIs and connecting them to MongoDB.
- Creating responsive SPAs using dynamic JavaScript.
- Implementing secure authentication and protecting sensitive endpoints.
- Using reusable components to make applications modular and efficient.

By completing this project, I’ve grown as a developer and improved my ability to tackle real-world web application challenges. These skills make me a more competitive candidate for roles involving full-stack development UI/UX integration and secure web applications

---

## 🚀 Installation & Usage

### Clone the Repository
git clone https://github.com/MEason1205/travlr-getaways-cs-465.git
cd travlr-getaways-cs-465

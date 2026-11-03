# ProShop – MERN Stack E-commerce Application

ProShop is a full-stack e-commerce web application built using the MERN stack. It allows users to browse products, manage their shopping cart, place orders, and make payments online.

**Live Demo:** [https://proshop-08mn.onrender.com/](https://proshop-08mn.onrender.com/)

## Features

- **User Authentication:** User registration and login using JWT-based authentication.
- **Password Security:** Password hashing using bcrypt and HTTP-only cookies for secure token storage.
- **Product Browsing:** Browse available products and view their details.
- **Shopping Cart:** Add products to the cart and manage cart items.
- **Order Management:** Place orders and manage order details.
- **Payment Integration:** Integrated PayPal for online payments.
- **Protected Routes:** Restrict access to authorized users using authentication middleware.
- **REST APIs:** Backend APIs for handling users, products, carts, and orders.

## Tech Stack

**Frontend:**
- React.js
- Redux Toolkit
- Bootstrap

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB Atlas
- Mongoose

**Authentication & Security:**
- JSON Web Tokens (JWT)
- bcrypt
- HTTP-only Cookies

**Payment Gateway:**
- PayPal

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/pournima2005/Proshop-demo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Proshop-demo
   ```

3. Install backend dependencies:

   ```bash
   npm install
   ```

4. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

5. Create a `.env` file in the backend root directory and configure the required environment variables.

6. Start the backend and frontend using the scripts configured in their respective `package.json` files.

## Learning Outcomes

- Developed a full-stack application using the MERN stack.
- Gained practical experience in REST API development and integration.
- Implemented authentication and authorization using JWT.
- Managed application state using Redux Toolkit.
- Integrated an external payment gateway using PayPal.
- Worked with MongoDB for database management.

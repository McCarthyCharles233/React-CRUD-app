# React CRUD App with Vite and PostgreSQL

This project is a simple CRUD (Create, Read, Update, Delete) application built with React, powered by Vite for a fast and efficient development experience, and PostgreSQL for database management. It demonstrates how to create a full-stack web application with these technologies.

---

## Features

- **Create**: Add new records to the database.
- **Read**: Display a list of records with their details.
- **Update**: Edit existing records.
- **Delete**: Remove records from the database.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Vite Integration**: Ensures fast builds and hot module replacement.
- **PostgreSQL Integration**: Robust relational database for data storage.

---

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern build tool that is fast and lightweight.
- **CSS Modules**: Scoped styles for better maintainability.

### Backend
- **Node.js**: Runtime environment for server-side JavaScript.
- **Express.js**: Web framework for building APIs.
- **PostgreSQL**: Relational database for data persistence.

### Additional Tools
- **pg**: Node.js PostgreSQL client.
- **dotenv**: For environment variable management.

---

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16 or later)
- **PostgreSQL**

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/react-crud-vite-postgres.git
   cd react-crud-vite-postgres
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   - Create a new PostgreSQL database.
   - Run the SQL scripts located in the `/db` folder to set up the required tables.

4. **Configure environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DB_HOST=localhost
     DB_PORT=5432
     DB_USER=your_db_user
     DB_PASSWORD=your_db_password
     DB_NAME=your_db_name
     ```

5. **Start the backend server**:
   ```bash
   npm run server
   ```

6. **Start the frontend development server**:
   ```bash
   npm run dev
   ```

---


## Acknowledgments

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)


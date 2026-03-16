# 🍃 LeafNote

> The Ultimate Blogging App — write, share, and manage your blogs with ease.

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Contributing](#contributing)
- [License](#license)

---

## About

**LeafNote** is a full-stack blogging platform built with Node.js, Express, and MongoDB. It supports user authentication via JWT, image uploads with Multer, and dynamic server-side rendering using EJS templates.

---

## Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Runtime    | Node.js                        |
| Framework  | Express.js                     |
| Database   | MongoDB (Mongoose)             |
| Templating | EJS                            |
| Auth       | JWT (JSON Web Tokens)          |
| Uploads    | Multer                         |

---

## Features

- 📝 Create, edit, and delete blog posts
- 🔐 User authentication and authorization with JWT
- 🖼️ Image upload support via Multer
- 🗂️ Clean MVC folder structure (models, routes, views, middlewares)
- 🌐 Server-side rendered pages with EJS templates

---

## Project Structure

```
LeafNote/
├── middlewares/       # Auth and other middleware
├── models/            # Mongoose data models
├── public/
│   └── images/        # Static assets and uploaded images
├── routes/            # Express route handlers
├── utils/             # Helper/utility functions
├── views/             # EJS templates
├── app.js             # Express app entry point
├── connection.js      # MongoDB connection setup
├── .env.example       # Example environment variables
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/KrishhR/LeafNote.git
   cd LeafNote
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

### Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

Open `.env` and configure the following:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=8000
```

### Running the App

```bash
node app.js
```

The app will be running at `http://localhost:8000`.

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is open source. Feel free to use and modify it.

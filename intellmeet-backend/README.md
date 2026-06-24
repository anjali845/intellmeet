# IntellMeet Backend

Backend server for **IntellMeet – AI-Powered Enterprise Meeting & Collaboration Platform**, built with Node.js, Express, and MongoDB (Mongoose). This is the backend portion of a MERN stack application.

## Tech Stack

- **Node.js** + **Express.js** — REST API server
- **MongoDB** + **Mongoose** — Database and ODM
- **CORS** — Cross-origin request handling
- **dotenv** — Environment variable management
- **nodemon** — Auto-restart during development

## Folder Structure

```
backend/
├── src/
│   ├── config/           # Configuration (DB connection, etc.)
│   │   └── db.js
│   ├── controllers/       # Business logic for each route
│   │   ├── userController.js
│   │   └── meetingController.js
│   ├── middleware/        # Express middleware
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/             # Mongoose schemas/models
│   │   ├── User.js
│   │   └── Meeting.js
│   ├── routes/              # Route definitions
│   │   ├── testRoutes.js
│   │   ├── userRoutes.js
│   │   └── meetingRoutes.js
│   ├── services/             # Reusable business logic (future use)
│   ├── sockets/               # Socket.io event handlers (future use)
│   │   └── index.js
│   ├── utils/                  # Shared helper utilities
│   │   └── asyncHandler.js
│   ├── app.js                   # Express app configuration
│   └── server.js                 # Application entry point
├── .env                            # Local environment variables (not committed)
├── .env.example                     # Environment variable template
├── .eslintrc.json
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Atlas connection string

### Installation

1. Clone the repository and navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables. Copy `.env.example` to `.env` and update values as needed (a working default `.env` is already included for local development):
   ```bash
   cp .env.example .env
   ```

4. Start MongoDB locally (if not using a cloud connection string), e.g.:
   ```bash
   mongod
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

   Or run in production mode:
   ```bash
   npm start
   ```

The server will start at `http://localhost:5000` (or whatever `PORT` is set to in `.env`).

## Environment Variables

| Variable      | Description                              | Default                                     |
|---------------|-------------------------------------------|----------------------------------------------|
| `PORT`        | Port the server listens on                | `5000`                                        |
| `NODE_ENV`    | Environment mode                          | `development`                                 |
| `MONGO_URI`   | MongoDB connection string                 | `mongodb://localhost:27017/intellmeet`        |
| `CLIENT_URL`  | Allowed CORS origin (frontend URL)        | `http://localhost:3000`                       |

See `.env.example` for additional variables reserved for future features (JWT, Redis, OpenAI, etc.).

## API Endpoints

### Test

| Method | Endpoint     | Description              |
|--------|--------------|----------------------------|
| GET    | `/api/test`   | Health check / connectivity test |

**Response:**
```json
{ "success": true, "message": "Backend Working" }
```

### Users

| Method | Endpoint         | Description           |
|--------|-------------------|------------------------|
| GET    | `/api/users`        | Get all users (placeholder) |
| GET    | `/api/users/:id`     | Get a single user by ID (placeholder) |
| POST   | `/api/users`          | Create a new user (placeholder) |

**Response (`GET /api/users`):**
```json
{ "success": true, "message": "Users API Working" }
```

### Meetings

| Method | Endpoint            | Description              |
|--------|----------------------|----------------------------|
| GET    | `/api/meetings`        | Get all meetings (placeholder) |
| GET    | `/api/meetings/:id`     | Get a single meeting by ID (placeholder) |
| POST   | `/api/meetings`          | Create a new meeting (placeholder) |

**Response (`GET /api/meetings`):**
```json
{ "success": true, "message": "Meetings API Working" }
```

## Architecture Notes

This backend follows the **MVC (Model-View-Controller)** pattern adapted for a REST API (Model-Controller-Route):

- **Models** define the MongoDB schema shape (`src/models`)
- **Controllers** contain the business logic for handling requests (`src/controllers`)
- **Routes** map HTTP endpoints to controller functions (`src/routes`)
- **Middleware** handles cross-cutting concerns like auth and error handling (`src/middleware`)
- **Config** isolates environment-dependent setup like the DB connection (`src/config`)

Controllers are intentionally kept thin and wrapped with an `asyncHandler` utility (`src/utils/asyncHandler.js`) so async errors are automatically forwarded to the centralized error handler instead of requiring repetitive try/catch blocks.

## Designed for Future Extension

The codebase is structured so the following features can be added **without major refactoring**:

- **JWT Authentication** — `authMiddleware.js` already has a `protect` function wired into routes; only the verification logic needs to be implemented.
- **Refresh Tokens** — reserved fields are documented (commented) in the `User` model.
- **Role-Based Access Control (RBAC)** — `authorize()` middleware scaffold is already in place.
- **Socket.io** — `src/sockets/index.js` is scaffolded, and `server.js` uses Node's `http` module specifically so Socket.io can attach to the same server with minimal changes.
- **WebRTC Signaling** — event scaffolding noted in `src/sockets/index.js`.
- **Redis Caching** — environment variable reserved in `.env.example`; add a `services/cacheService.js` when implementing.
- **OpenAI Meeting Summaries** — environment variable reserved in `.env.example`; add a `services/aiService.js` when implementing.
- **Team Management / Task Management** — reserved (commented) fields noted in the `Meeting` and `User` models as a starting point; add new models/routes/controllers following the same pattern as `users` and `meetings`.

## Coding Standards

- CommonJS module system (`require` / `module.exports`)
- `async/await` for all asynchronous operations
- No hardcoded secrets — all configuration via environment variables
- ESLint-friendly (see `.eslintrc.json`)
- Comments included for clarity and future maintainability

## License

ISC

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Import custom middleware
const loggerMiddleware = require("./middleware/logger.middleware");

// Apply app-level middleware
app.use(loggerMiddleware);

// Import router
const todoRouter = require("./routes/todos.routes");

// Use router
app.use("/todos", todoRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

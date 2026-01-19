const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Import Routers
const userRouter = require("./routes/users.routes");
const todoRouter = require("./routes/todos.routes");

// Use Routers
app.use("/users", userRouter);
app.use("/todos", todoRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

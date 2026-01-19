const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dbPath = path.join(__dirname, "../db.json");

// Middlewares
const rateLimiter = require("../middleware/rateLimiter.middleware");
const validateTodo = require("../middleware/validateTodo.middleware");

// Helper functions
function readDB() {
  return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
}
function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

// Create Todo
router.post("/add", validateTodo, (req, res) => {
  const db = readDB();
  const newTodo = { id: Date.now().toString(), title: req.body.title };
  db.todos.push(newTodo);
  writeDB(db);
  res.status(201).json(newTodo);
});

// Get All Todos (with rate limiting)
router.get("/", rateLimiter, (req, res) => {
  const db = readDB();
  res.json(db.todos);
});

// Get Single Todo
router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find(t => t.id === req.params.todoId);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

// Update Todo
router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex(t => t.id === req.params.todoId);
  if (index === -1) return res.status(404).json({ error: "Todo not found" });
  db.todos[index] = { ...db.todos[index], ...req.body };
  writeDB(db);
  res.json(db.todos[index]);
});

// Delete Todo
router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex(t => t.id === req.params.todoId);
  if (index === -1) return res.status(404).json({ error: "Todo not found" });
  const deleted = db.todos.splice(index, 1);
  writeDB(db);
  res.json(deleted[0]);
});

module.exports = router;

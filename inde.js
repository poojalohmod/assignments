import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;
const DB_FILE = "./db.json";

app.use(express.json());

// Utility function to read DB
const readDB = () => {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data);
};

// Utility function to write DB
const writeDB = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// ✅ GET /students - Fetch all students
app.get("/students", (req, res) => {
  const students = readDB();
  res.json(students);
});

// ✅ POST /students - Add new student
app.post("/students", (req, res) => {
  const students = readDB();
  const newStudent = req.body;

  if (!newStudent.name || !newStudent.course || !newStudent.year) {
    return res.status(400).json({ message: "Invalid student data" });
  }

  newStudent.id = students.length ? students[students.length - 1].id + 1 : 1;
  students.push(newStudent);
  writeDB(students);

  res.status(201).json({ message: "Student added successfully", student: newStudent });
});

// ✅ PUT /students/:id - Update student
app.put("/students/:id", (req, res) => {
  const students = readDB();
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students[index] = { ...students[index], ...req.body };
  writeDB(students);

  res.json({ message: "Student updated successfully", student: students[index] });
});

// ✅ DELETE /students/:id - Delete student
app.delete("/students/:id", (req, res) => {
  const students = readDB();
  const id = parseInt(req.params.id);
  const filtered = students.filter((s) => s.id !== id);

  if (students.length === filtered.length) {
    return res.status(404).json({ message: "Student not found" });
  }

  writeDB(filtered);
  res.json({ message: "Student deleted successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

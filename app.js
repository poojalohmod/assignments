// app.js
import os from "os";
import fs from "fs/promises";

// --------------------
// Part A – OS Module
// --------------------
console.log("Free Memory:", os.freemem(), "bytes");
console.log("Total CPU Cores:", os.cpus().length);

// --------------------
// Part B – File System CRUD Operations
// --------------------
async function fileOperations() {
  try {
    // 1. Create data.txt with "Hello World"
    await fs.writeFile("data.txt", "Hello World");
    console.log("data.txt created with content: Hello World");

    // 2. Create Readme.md with content
    await fs.writeFile("Readme.md", "## This is first line in Readme");
    console.log("Readme.md created with content");

    // 3. Read data.txt and print content
    const data = await fs.readFile("data.txt", "utf-8");
    console.log("Content of data.txt:", data);

    // 4. Append new line to data.txt
    await fs.appendFile("data.txt", "\nThis is second line");
    console.log("Appended new line to data.txt");

    // 5. Delete Readme.md
    await fs.unlink("Readme.md");
    console.log("Readme.md deleted successfully");
  } catch (err) {
    console.error("Error during file operations:", err.message);
  }
}

// Run the operations
fileOperations();

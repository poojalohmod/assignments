// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Event listener for "Add Task" button
addTaskBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim(); // remove extra spaces

  // Edge case: empty input should not add a task
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new <li> element
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create "Complete" button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.style.marginLeft = "10px";

  // Event listener for completing task
  completeBtn.addEventListener("click", function() {
    li.style.textDecoration = "line-through"; // cross out text
    li.style.color = "green"; // optional styling
  });

  // Create "Delete" button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";

  // Event listener for deleting task
  deleteBtn.addEventListener("click", function() {
    taskList.removeChild(li);
  });

  // Append buttons to <li>
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Append <li> to <ul>
  taskList.appendChild(li);

  // Clear input field after adding
  taskInput.value = "";
});

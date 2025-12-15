// Select elements from the DOM
let colorInput = document.getElementById("color-input");
let textInput = document.getElementById("text-input");
let bgButton = document.getElementById("bg-btn");
let textButton = document.getElementById("text-btn");
let contentBox = document.getElementById("content-box");

// Function to change background color
bgButton.addEventListener("click", function() {
  let colorValue = colorInput.value.trim(); // get user input

  // Try applying the color
  contentBox.style.backgroundColor = colorValue;

  // Check if browser accepted the color
  if (contentBox.style.backgroundColor === "") {
    alert("Invalid color name!");
  }
});

// Function to update text content
textButton.addEventListener("click", function() {
  let textValue = textInput.value.trim(); // get user input

  if (textValue === "") {
    alert("Please enter some text!");
  } else {
    contentBox.textContent = textValue;
  }
});

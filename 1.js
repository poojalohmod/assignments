// Select the <ul> using querySelector
let ul = document.querySelector("#item-list");

// Select the button
let button = document.querySelector("#add-btn");

// Add event listener to button
button.addEventListener("click", function() {
  // Create a new <li> element
  let newLi = document.createElement("li");
  newLi.textContent = "New Item";

  // Append the new <li> to the <ul>
  ul.appendChild(newLi);

  // Get the position (sequence number) of the new <li>
  let index = ul.children.length; // total items after adding

  // Apply styles based on odd/even sequence
  if (index % 2 !== 0) {
    // Odd sequence → bold + blue
    newLi.style.fontWeight = "bold";
    newLi.style.color = "blue";
  } else {
    // Even sequence → italic + red
    newLi.style.fontStyle = "italic";
    newLi.style.color = "red";
  }
});

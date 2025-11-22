// Step 1: Declare a global variable
let age = 20;  

// Step 2: Create a function in the global execution context
function displayAge() {
    console.log("Current age is:", age);
}

// Step 3: Create another function that updates the global variable
function changeAge(newAge) {
    age = newAge;  // updating the global variable
    console.log("Age after update is:", age);
}

// Step 4: Call the functions
displayAge();     // Output: Current age is: 20
changeAge(25);    // Output: Age after update is: 25
displayAge();     // Output: Current age is: 25

// L2 - Simulating User Interaction with Callback

// Step 1: Define displayMessage function
function displayMessage(name) {
    console.log(`Hello, ${name}!`);
}

// Step 2: Define getUserInput function
function getUserInput(callback) {
    // Simulate fetching username after 1 second
    setTimeout(() => {
        const username = "Alice"; // simulated retrieved name
        callback(username);       // call the callback with the name
    }, 1000);
}

// Step 3: Use getUserInput with displayMessage as callback
getUserInput(displayMessage);

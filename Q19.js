// L1 - Simulating a Loading Screen with setInterval

// Step 1: Start logging "Loading..." every 1 second
const loading = setInterval(() => {
    console.log("Loading...");
}, 1000);

// Step 2: Stop after 5 seconds and log "Loaded successfully!"
setTimeout(() => {
    clearInterval(loading); // stops the repeated logs
    console.log("Loaded successfully!");
}, 5000);

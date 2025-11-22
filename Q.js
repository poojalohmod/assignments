// L0 - Timer with Callback

// Step 1: Define the timer function
function timer(duration, onComplete) {
    setTimeout(() => {
        // Step 2: Call the callback with the finish message
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}

// Example Usage
timer(2000, (message) => {
    console.log(message); // Output after 2 seconds: "Timer of 2000 ms finished"
});

timer(5000, (message) => {
    console.log(message); // Output after 5 seconds: "Timer of 5000 ms finished"
});

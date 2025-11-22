// L2 - Countdown Timer with setInterval and setTimeout

// Step 1: Prompt user for input
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number of seconds to count down: ", function(seconds) {
    let timeLeft = parseInt(seconds);

    // Step 2: Start countdown using setInterval
    const timer = setInterval(() => {
        if (timeLeft > 0) {
            console.log("Remaining time:", timeLeft, "seconds");
            timeLeft--;
        } else {
            clearInterval(timer);
            console.log("Countdown Complete!");
            rl.close();
        }
    }, 1000);

    // Step 3: Detect key press "s" with delayed check using setTimeout
    setTimeout(() => {
        rl.on("line", (input) => {
            if (input.trim().toLowerCase() === "s") {
                clearInterval(timer);
                console.log("Countdown stopped by user!");
                rl.close();
            }
        });
    }, 500); // delay before listening for input
});

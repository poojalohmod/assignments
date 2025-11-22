// L0 - Implementing setTimeout for Delayed Messages

// Print "Message 1" immediately
console.log("Message 1");

// Use setTimeout to print after 2 seconds
setTimeout(() => {
    console.log("Message 2 after 2 seconds");
}, 2000);

// Print "Message 3" immediately after "Message 1"
console.log("Message 3");

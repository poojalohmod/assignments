// L1 - Debugging Event Loop Order

console.log("Begin");

setTimeout(() => {
    console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Task");
});

console.log("End");

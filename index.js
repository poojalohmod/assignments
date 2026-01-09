// Import boxen
const boxen = require("boxen");

// Define message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// Classic (default style)
const classicBox = boxen(message, {
  title: title,
  titleAlignment: "center",
  padding: 1,
  margin: 1,
  borderStyle: "classic"
});

// SingleDouble (mixed single and double borders)
const singleDoubleBox = boxen(message, {
  title: title,
  titleAlignment: "center",
  padding: 1,
  margin: 1,
  borderStyle: "singleDouble"
});

// Round (rounded corners)
const roundBox = boxen(message, {
  title: title,
  titleAlignment: "center",
  padding: 1,
  margin: 1,
  borderStyle: "round"
});

// Print all boxes
console.log(classicBox);
console.log(singleDoubleBox);
console.log(roundBox);

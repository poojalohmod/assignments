let users = [
    { username: "yogi", password: "1234" },
    { username: "rahul", password: "9999" }
];

function signup(newUser, newPass) {
    // Check if username already exists
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === newUser) {
            return "User Already Registered, Please Login";
        }
    }

    // If not present, push to array
    users.push({ username: newUser, password: newPass });
    return "Signup Successful, Please Login";
}

module.exports = signup;

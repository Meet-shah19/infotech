function login(username, password) {
    if (username === "admin") {
        if (password === "1234") {
            console.log("Login Success");
        } else {
            console.log("Wrong Password");
        }
    } else {
        console.log("Wrong Username");
    }
}

// Examples
login("admin", "1234");  // Login Success
login("admin", "5678");  // Wrong Password
login("user", "1234");   // Wrong Username
function introduce(name, role = "Developer", city = "Gujarat") {
    return "Hi, I am " + name + ", a " + role + " from " + city + ".";
}

// Without optional parameters
console.log(introduce("Meet"));

// With optional parameters
console.log(introduce("Meet", "Designer", "anand"));
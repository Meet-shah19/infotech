function getDomain(email) {
    let parts = email.split("@");
    return parts[1];
}

console.log(getDomain("user@example.com"));
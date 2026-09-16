function maskEmail(email) {
    let parts = email.split("@");

    let username = parts[0];
    let domain = parts[1];

    if (username.length <= 2) {
        return email;
    }

    let firstLetter = username[0];
    let lastLetter = username[username.length - 1];

    let stars = "*".repeat(username.length - 2);

    return firstLetter + stars + lastLetter + "@" + domain;
}

console.log(maskEmail("meet@example.com"));
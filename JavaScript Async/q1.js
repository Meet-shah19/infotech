function waitAndLog(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve("done");
        }, delay);
    });
}

waitAndLog("Hello", 1000)
    .then(result => console.log(result));
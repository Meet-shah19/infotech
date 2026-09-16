function sprintf(template, ...args) {
    let index = 0;

    return template.replace(/\{\}/g, () => {
        return args[index++];
    });
}

console.log(
    sprintf("Hello {}, you are {} years old", "Meet", 22)
);
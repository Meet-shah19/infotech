// Non-strict mode
const config = {
    theme: "dark",
    language: "English"
};

Object.freeze(config);

config.theme = "light";

console.log(config);
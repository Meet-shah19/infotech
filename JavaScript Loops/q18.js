let str = "hello world";
let count = 0;

for (let i = 0; i < str.length; i++) {

    let ch = str[i].toLowerCase();

    if (ch !== "a" && ch !== "e" && ch !== "i" && ch !== "o" && ch !== "u") {
        continue;
    }

    count++;
}

console.log("Number of vowels =", count);
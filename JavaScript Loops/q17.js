let str = "hello";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
}

console.log("Original String:", str);
console.log("Reversed String:", reverse);
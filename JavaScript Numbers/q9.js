function fromRoman(str) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for (let i = 0; i < str.length; i++) {
        let current = values[str[i]];
        let next = values[str[i + 1]];

        if (next && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
}

console.log(fromRoman("MMXXIV")); // 2024
console.log(fromRoman("MCMXCIV")); // 1994
console.log(fromRoman("IX"));      // 9
console.log(fromRoman("XL"));      // 40
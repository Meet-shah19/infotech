function permutations(str) {
    if (str.length === 1) {
        return [str];
    }

    let result = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // Remove the current character
        let remaining = str.slice(0, i) + str.slice(i + 1);

        // Find permutations of the remaining characters
        let smallerPermutations = permutations(remaining);

        // Add the current character to each permutation
        for (let perm of smallerPermutations) {
            result.push(char + perm);
        }
    }

    return result;
}

console.log(permutations("abc"));
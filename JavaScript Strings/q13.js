function compressString(str) {
    let compressed = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }

    // Return original if compressed version is not shorter
    if (compressed.length >= str.length) {
        return str;
    }

    return compressed;
}

console.log(compressString("aaabbbccddddee"));
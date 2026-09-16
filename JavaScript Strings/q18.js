function zigzagEncode(str, rows) {
    if (rows === 1 || rows >= str.length) {
        return str;
    }

    let rails = Array.from({ length: rows }, () => []);
    let row = 0;
    let direction = 1;

    for (let char of str) {
        rails[row].push(char);

        // Change direction at the top or bottom
        if (row === 0) {
            direction = 1;
        } else if (row === rows - 1) {
            direction = -1;
        }

        row += direction;
    }

    return rails.flat().join("");
}

console.log(zigzagEncode("WEAREDISCOVERING", 3));
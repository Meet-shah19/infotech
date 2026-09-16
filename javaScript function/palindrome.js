function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

// Calling the function
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
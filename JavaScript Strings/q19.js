function longestPalindromicSubstring(str) {
    if (str.length < 2) {
        return str;
    }

    let longest = "";

    function expand(left, right) {
        while (
            left >= 0 &&
            right < str.length &&
            str[left] === str[right]
        ) {
            left--;
            right++;
        }

        return str.slice(left + 1, right);
    }

    for (let i = 0; i < str.length; i++) {
        // Odd-length palindrome
        let odd = expand(i, i);

        // Even-length palindrome
        let even = expand(i, i + 1);

        if (odd.length > longest.length) {
            longest = odd;
        }

        if (even.length > longest.length) {
            longest = even;
        }
    }

    return longest;
}

console.log(longestPalindromicSubstring("babad"));
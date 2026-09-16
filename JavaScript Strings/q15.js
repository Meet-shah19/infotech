function longestCommonSubstring(str1, str2) {
    let longest = "";

    for (let i = 0; i < str1.length; i++) {
        for (let j = i + 1; j <= str1.length; j++) {
            let substring = str1.slice(i, j);

            if (str2.includes(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }

    return longest;
}

console.log(longestCommonSubstring("abcdef", "zcdemf"));
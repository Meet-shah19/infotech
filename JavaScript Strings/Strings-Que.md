# JavaScript Strings — Practice Questions

## Easy

**Q1.** Given a string `"  Hello, World!  "`, remove all leading and trailing whitespace and log the result.

**Q2.** Write a function `reverseString(str)` that reverses a given string without using `.reverse()` directly on the string.

**Q3.** Check whether a given string is a palindrome (reads the same forwards and backwards). Ignore case.
```js
isPalindrome("Racecar") // → true
isPalindrome("hello")   // → false
```

**Q4.** Write a function that counts how many times a specific character appears in a string.
```js
countChar("banana", "a") // → 3
```

**Q5.** Convert the string `"hello world"` to title case: `"Hello World"`.

**Q6.** Given a sentence, return the number of words in it (assume words are separated by single spaces).

**Q7.** Extract the domain name from an email string `"user@example.com"` → `"example.com"`.

---

## Intermediate

**Q8.** Write a function `truncate(str, maxLength)` that shortens a string to `maxLength` characters and appends `"..."` if it was shortened.
```js
truncate("Hello World", 7) // → "Hello W..."
```

**Q9.** Write a function `capitalize(str)` that capitalizes the **first letter of every word** in a sentence.

**Q10.** Write a function to check if one string is an anagram of another (same letters, different order). Ignore spaces and case.
```js
isAnagram("listen", "silent") // → true
```

**Q11.** Replace all occurrences of a word in a sentence without using `.replaceAll()`. Use a regex or a loop.
```js
replaceAll("the cat sat on the mat", "the", "a") // → "a cat sat on a mat"
```

**Q12.** Write a function `camelToSnake(str)` that converts a camelCase string to snake_case.
```js
camelToSnake("myVariableName") // → "my_variable_name"
```

**Q13.** Write a function `compressString(str)` that compresses repeated characters:
```js
compressString("aaabbbccddddee") // → "a3b3c2d4e2"
```
If the compressed version is not shorter, return the original string.


**Q14.** Write a function `maskEmail(email)` that masks part of the email:
```js
maskEmail("alice@example.com") // → "a***e@example.com"
```

---

## Hard

**Q15.** Write a function `longestCommonSubstring(str1, str2)` that returns the longest common substring between two strings.
```js
longestCommonSubstring("abcdef", "zcdemf") // → "cde"
```

**Q16.** Implement a simple `sprintf(template, ...args)` function that replaces `{}` placeholders with the given arguments in order.
```js
sprintf("Hello {}, you are {} years old", "Alice", 25)
// → "Hello Alice, you are 25 years old"
```

**Q17.** Write a function that finds all permutations of a given string.
```js
permutations("abc") // → ["abc", "acb", "bac", "bca", "cab", "cba"]
```

**Q18.** Implement a function `zigzagEncode(str, rows)` that encodes a string in a zigzag pattern and reads it row by row (Rail Fence Cipher).
```js
zigzagEncode("WEAREDISCOVERING", 3)
// → "WECRIERDSOEEAIVNG" (roughly)
```

**Q19.** Write a function `longestPalindromicSubstring(str)` that finds the longest palindromic substring using the expand-around-center approach.
```js
longestPalindromicSubstring("babad") // → "bab" or "aba"
```
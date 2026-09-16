# JavaScript Numbers — Practice Questions

## Easy

**Q1.** Explain and demonstrate the difference between `parseInt("42.9px")`, `parseFloat("42.9px")`, and `Number("42.9px")`. What does each return?

**Q2.** Write a function that checks whether a value is a valid finite number (not `NaN`, not `Infinity`, not a string).

**Q3.** Format the number `1234567.89` to display as a currency string: `"$1,234,567.89"`. Use `toLocaleString()`.

**Q4.** Demonstrate the classic JS floating point quirk: `0.1 + 0.2`. Then write a function `safeAdd(a, b, decimals)` that adds two floats correctly up to `decimals` decimal places.

**Q5.** Convert the number `255` to binary, octal, and hexadecimal strings using JavaScript.

**Q6.** Write a function `isInteger(n)` that returns `true` if the number has no fractional part, **without** using `Number.isInteger()`.

---

## Intermediate

**Q7.** Write a function `clamp(value, min, max)` that restricts a value to be within [min, max].
```js
clamp(15, 0, 10)  // → 10
clamp(-5, 0, 10)  // → 0
clamp(7, 0, 10)   // → 7
```

**Q8.** Write a function `toRoman(num)` that converts an integer (1–3999) to its Roman numeral representation.
```js
toRoman(2024) // → "MMXXIV"
```

**Q9.** Write a function `fromRoman(str)` that converts a Roman numeral string back to an integer.

**Q10.** Write a function `formatNumber(n)` that formats a large number with short suffixes:
```js
formatNumber(1500)       // → "1.5K"
formatNumber(2000000)    // → "2M"
formatNumber(3500000000) // → "3.5B"
```

**Q11.** Given a number, write a function that checks if it is a **perfect number** (a number equal to the sum of its proper divisors).
```js
isPerfect(6)   // → true  (1+2+3 = 6)
isPerfect(28)  // → true  (1+2+4+7+14 = 28)
isPerfect(12)  // → false
```

---

## Hard

**Q12.** Implement a fixed-point arithmetic system using integers to avoid floating-point errors. Write `add`, `subtract`, `multiply`, and `divide` functions that represent money values in cents internally and display them in dollars.

# JavaScript Functions – Practice Questions

### Topics: Declaration | Expression | Arrow | Default Params | Recursion 

---

## Easy

**Q1. Greeting Function**  
Write a function `greet(name)` that returns `"Hello, <name>! Welcome."`.  
Call it with your own name and print the result.

---

**Q2. Area Calculator**  
Write three separate functions:

- `areaOfCircle(r)` → returns `π * r²`
- `areaOfRectangle(l, b)` → returns `l * b`
- `areaOfTriangle(b, h)` → returns `0.5 * b * h`

---

**Q3. Temperature Converter**  
Write two functions:

- `celsiusToFahrenheit(c)` → returns `(c × 9/5) + 32`
- `fahrenheitToCelsius(f)` → returns `(f − 32) × 5/9`

---

**Q4. Arrow Function – Square and Cube**  
Write arrow functions:

- `square = (n) => ...` → returns `n²`
- `cube = (n) => ...` → returns `n³`

---

**Q5. Default Parameters**  
Write a function `introduce(name, role = "Developer", city = "Gujarat")` that returns:
`"Hi, I am <name>, a <role> from <city>."`  
Call it with and without the optional parameters.

---

**Q6. Check Palindrome**  
Write a function `isPalindrome(str)` that returns `true` if the string reads the same forwards and backwards.  
Example: `"racecar"` → `true`, `"hello"` → `false`

---

**Q7. Find Maximum in Array**  
Write a function `findMax(arr)` that takes an array of numbers and returns the largest number without using `Math.max`.

---

**Q8. Count Occurrences**  
Write a function `countOccurrences(arr, target)` that counts how many times `target` appears in `arr`.
Example: `([1, 2, 2, 3, 2], 2)` → `3`

---

## Intermediate

**Q9. Function Expression vs Declaration**  
Rewrite the `greet` function (Q1) as:

1. A **function expression** stored in a variable
2. An **arrow function**

Observe the difference in hoisting: try calling each version before its definition and note what happens.

---

**Q10. Recursive Factorial**  
Write a recursive function `factorial(n)` that calculates `n!` without using any loop.  
Also add a base case to handle `n = 0` and negative numbers.

---

**Q11. Recursive Fibonacci**  
Write a recursive function `fibonacci(n)` that returns the `n`th Fibonacci number.  
Example: `fibonacci(7)` → `13`

> Also compare: how many function calls does recursion make vs. the loop version from the Loops file?

---

**Q12. Function Returning Function**  
Write a function `multiplier(x)` that returns a new function. The returned function takes a number `y` and returns `x * y`.

```js
const double = multiplier(2);
const triple = multiplier(3);
double(5); // 10
triple(5); // 15
```

---

> 💡 **Tip:** Functions are the heart of JavaScript. Master the difference between **what a function does** (its logic) and **what it returns** (its output). A function that doesn't `return` gives you `undefined`.

# JavaScript Math — Practice Questions

## Easy

**Q1.** Generate a random integer between two given numbers `min` and `max` (both inclusive).
```js
randomInt(5, 15) // could return 5, 6, ..., or 15
```

**Q2.** Write a function that rounds a number to a specified number of decimal places.
```js
roundTo(3.14159, 2) // → 3.14
```

**Q3.** Given a number, return its absolute value without using `Math.abs()`.

**Q4.** Write a function `isPrime(n)` that returns `true` if a number is prime, and `false` otherwise.

**Q5.** Calculate the area of a circle given its radius. Use `Math.PI` and round to 2 decimal places.

**Q6.** Find the hypotenuse of a right triangle given the two other sides, using `Math.sqrt` and `Math.pow` (or the `**` operator).

---

## Intermediate

**Q7.** Write a function `gcd(a, b)` that finds the Greatest Common Divisor of two numbers using the Euclidean algorithm. Then write `lcm(a, b)` using it.

**Q8.** Implement a function `toDegrees(radians)` and `toRadians(degrees)` for angle conversion. Then compute `sin`, `cos`, and `tan` of 30°, 45°, and 60°.

**Q9.** Write a function `sumOfDigits(n)` that returns the sum of all digits of a number.
```js
sumOfDigits(12345) // → 15
```

**Q10.** Write a function `power(base, exp)` that computes `base^exp` for integer exponents using **fast exponentiation** (exponentiation by squaring) in O(log n) time.

---

## Hard

**Q11.** Write a function `primeFactors(n)` that returns all prime factors of a number.
```js
primeFactors(360) // → [2, 2, 2, 3, 3, 5]
```

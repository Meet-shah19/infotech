# JavaScript Loops – Practice Questions

### Topics: `for` | `while` | `do-while` | `break` | `continue`

---

## Easy

**Q1. Print 1 to N**  
Take a number `n` as input and print all numbers from 1 to `n` using a `for` loop.

---

**Q2. Sum of N Numbers**  
Take a number `n` and calculate the sum of all integers from 1 to `n`.  
Example: `n = 5` → `1+2+3+4+5 = 15`

---

**Q3. Multiplication Table**  
Take a number and print its multiplication table from 1 to 10 using a `for` loop.  
Example: `5 × 1 = 5`, `5 × 2 = 10`, …

---

**Q4. Reverse a Number**  
Take a number and reverse its digits using a `while` loop.  
Example: `1234` → `4321`

---

**Q5. Count Digits**  
Take a number and count how many digits it has using a `while` loop.  
Example: `4567` → `4 digits`

---

**Q6. Factorial**  
Calculate the factorial of a given number using a `for` loop.  
Example: `5! = 120`

---

**Q7. Do-While Menu**  
Create a simple menu-driven program using `do-while`:

1. Say Hello
2. Show current date
3. Exit

The menu should keep showing until the user selects Exit (option 3).

---

**Q8. Print Even Numbers**  
Print all even numbers between 1 and 50 using `continue` to skip odd numbers.

---

## Intermediate

**Q9. Fibonacci Series**  
Print the first `n` terms of the Fibonacci series using a `for` loop.  
Example: `n = 7` → `0 1 1 2 3 5 8`

---

**Q10. Prime Number Check**  
Write a program that uses a loop to check if a number is prime or not.

---

**Q11. Sum of Digits**  
Take a number and find the sum of its individual digits using a `while` loop.  
Example: `1234` → `1+2+3+4 = 10`

---

**Q12. Armstrong Number**  
Check if a number is an Armstrong (narcissistic) number or not.

> A number is Armstrong if: sum of each digit raised to the power of total digits = the number itself.
> Example: `153` → `1³ + 5³ + 3³ = 153` ✅

---

**Q13. Pattern Printing – Right Triangle**  
Print the following pattern for `n = 5` using nested `for` loops:

```
*
* *
* * *
* * * *
* * * * *
```

---

**Q14. Pattern Printing – Number Pyramid**  
Print this pattern for `n = 5`:

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

---

**Q15. Find All Primes in a Range**   
Print all prime numbers between 1 and 100. Use `continue` to skip non-primes and `break` inside the inner loop when a factor is found.

---

**Q16. Password Retry System (do-while + break)**  
Simulate a login system:

- The correct password is `"js@123"`
- Allow maximum 3 attempts using a `do-while` loop
- Break out of the loop early if the correct password is entered
- Print how many attempts were used

---

**Q17. Reverse a String using a Loop**  
Take a string as input and reverse it character by character using a `for` loop (without using `.reverse()`).  
Example: `"hello"` → `"olleh"`

---

**Q18. Count Vowels in a String**  
Loop through a string and count the number of vowels (`a, e, i, o, u`) using a `for` loop and `continue` to skip consonants.

---

## Hard

**Q19. Multiplication Table Grid (Nested Loops)**  
Print a 5×5 multiplication table grid:

```
 1  2  3  4  5
 2  4  6  8 10
 3  6  9 12 15
 4  8 12 16 20
 5 10 15 20 25
```

---

**Q20. Find GCD using while**   
Write a function `gcd(a, b)` that finds the Greatest Common Divisor using the Euclidean algorithm with a `while` loop.
Example: `gcd(48, 18)` → `6`

---

**Q21. Number Guessing Game**  
Simulate a number guessing game:

- Generate a random number between 1 and 50
- Use a `do-while` loop to keep asking the user to guess
- Print `"Too high"` or `"Too low"` hints
- `break` when guessed correctly
- Count and display the total number of attempts

---

**Q22. Hollow Square Pattern (Nested loops + if)**  
Print a hollow square for `n = 5`:

```
* * * * *
*       *
*       *
*       *
* * * * *
```

Print `*` only for border positions; use spaces inside.

---

**Q23. Find All Factors and Check Perfect Number**   
Write a program that:

1. Finds all factors of a number using a `for` loop
2. Sums the factors (excluding the number itself)
3. Checks if it's a **perfect number** (sum of factors = number)
   > Example: `6` → factors: 1, 2, 3 → sum = 6 ✅ Perfect!

---

> 💡 **Tip:** Before writing any loop, ask yourself: **"Do I know how many times this will run?"** If yes → `for`. If no → `while`. If it must run at least once → `do-while`.

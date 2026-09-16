# JavaScript Conditionals – Practice Questions

### Topics: `if-else` | `nested if` | `if-else-if ladder` | `switch`

---

## Easy

**Q1. Positive, Negative, or Zero**  
Write a function that takes a number and prints whether it is `"Positive"`, `"Negative"`, or `"Zero"`.

---

**Q2. Even or Odd**  
Write a function that takes a number and prints `"Even"` or `"Odd"`.

---

**Q3. Voting Eligibility**  
Write a program that takes a person's age and prints `"Eligible to Vote"` if age is 18 or above, otherwise `"Not Eligible"`.

---

**Q4. Largest of Two Numbers**  
Take two numbers as input and print the larger one. If they are equal, print `"Both are equal"`.

---

**Q5. Pass or Fail**  
Take marks (out of 100) as input. Print `"Pass"` if marks >= 40, else `"Fail"`.

---

**Q6. Day Name using Switch**  
Write a program using `switch` that takes a number (1–7) and prints the corresponding day name (1 = Monday, 7 = Sunday). Print `"Invalid day"` for anything else.

---

**Q7. Calculator using Switch**  
Write a basic calculator using `switch` that takes two numbers and an operator (`+`, `-`, `*`, `/`) and prints the result. Handle division by zero separately.

---

**Q8. Season Finder**  
Take a month number (1–12) using `switch` and print the season:

- Dec, Jan, Feb → Winter
- Mar, Apr, May → Spring
- Jun, Jul, Aug → Summer
- Sep, Oct, Nov → Autumn

---

## Intermediate

**Q9. Grade Calculator**  
Take marks as input and print the grade:

- 90–100 → A+
- 75–89 → A
- 60–74 → B
- 45–59 → C
- Below 45 → Fail

---

**Q10. Largest of Three Numbers**  
Take three numbers and print the largest one.

---

**Q11. Leap Year Checker**  
Write a program to check whether the given year is leap year or not.

> Hint: Divisible by 4, but not 100, unless also divisible by 400.

---

**Q12. Triangle Type**  
Take three angles as input. Check if they form a valid triangle (sum = 180). If valid, determine:

- All equal → Equilateral
- Two equal → Isosceles
- None equal → Scalene

---

**Q13. Electricity Bill Calculator**  
calculate the electricity bill:

- 0–100 units → ₹1.50/unit
- 101–300 units → ₹2.50/unit
- 301–500 units → ₹4.00/unit
- Above 500 units → ₹5.00/unit

---

**Q14. Login System**  
Take a `username` and `password` as input. First check if username is `"admin"`. If yes, then check if password is `"1234"`. Print appropriate messages for each case (wrong username, wrong password, login success).

---

**Q15. BMI Category**  
Calculate BMI = weight(kg) / height(m)². Print the category:

- Below 18.5 → Underweight
- 18.5–24.9 → Normal
- 25–29.9 → Overweight
- 30 and above → Obese

---

**Q16. Ticket Price Calculator**  
A theme park charges tickets based on age using nested if:

- Age < 3 → Free
- Age 3–12 → ₹200
- Age 13–59 → ₹500
- Age 60+ → ₹300
  Also, if it's a weekend, add ₹100 extra for all paid categories.

---

**Q17. ATM Simulation**  
Write a program that:

1. Checks if the entered PIN (4 digits) is correct (`1234`)
2. If correct, checks if the withdrawal amount is a multiple of 100
3. If yes, checks if the balance is sufficient  

Print proper messages at each step.

---

## Hard

**Q18. Rock Paper Scissors**  
Write a program that takes moves of two players and returns who wins or if it's a draw.

---

**Q19. Tax Calculator**
Calculate income tax based on slabs:

- Up to ₹2,50,000 → No tax
- ₹2,50,001–₹5,00,000 → 5%
- ₹5,00,001–₹10,00,000 → 20%
- Above ₹10,00,000 → 30%

Also apply a 4% health & education cess on the calculated tax. Print the total tax payable.

---

**Q20. Nested Grade + Scholarship System**  
Take a student's marks (0–100) and category (`"general"` or `"reserved"`):

- If marks >= 90 → A grade
  - If category is `"general"` → Full scholarship
  - Else → Full scholarship + ₹5000 bonus
- If marks 75–89 → B grade
  - If category is `"general"` → 50% scholarship
  - Else → 75% scholarship
- If marks 60–74 → C grade → No scholarship
- Below 60 → Fail → No scholarship

Print grade and scholarship status.

---

**Q21. Number to Words**  
Write a program that takes a number from 1 to 20 and prints it in words using `switch`.
Example: `5` → `"Five"`, `13` → `"Thirteen"`

---

> 💡 **Tip:** For every question, try to think about **edge cases** — what happens with negative input, zero, or boundary values like exactly 100 or 18.

# JavaScript Dates — Practice Questions

## Easy

**Q1.** Create a `Date` object for today and log: the full year, month (1-indexed), day of the month, and day of the week as a name (e.g., "Monday").

**Q2.** Write a function `formatDate(date)` that formats a Date object as `"DD/MM/YYYY"`.
```js
formatDate(new Date(2025, 0, 5)) // → "05/01/2025"
```

**Q3.** Calculate a person's age in full years given their date of birth.
```js
getAge(new Date("2000-06-15")) // → 25 (if today is June 2025)
```

**Q4.** Write a function `daysBetween(date1, date2)` that returns the number of full days between two dates (ignore time).

**Q5.** Given a date, return the date of the **next Monday** from that date.

**Q6.** Write a function that returns `true` if a given year is a leap year.
```js
isLeapYear(2024) // → true
isLeapYear(1900) // → false
```

---

## Intermediate

**Q7.** Write a function `timeAgo(date)` that returns a human-readable "time ago" string:
```js
timeAgo(new Date(Date.now() - 3600000)) // → "1 hour ago"
timeAgo(new Date(Date.now() - 86400000 * 3)) // → "3 days ago"
```
Handle: seconds, minutes, hours, days, weeks, months, and years.

**Q8.** Write a function `getWeekNumber(date)` that returns the ISO week number of the year for a given date.

**Q9.** Build a function `addBusinessDays(date, n)` that adds `n` business days (Mon–Fri) to a date, skipping weekends.

**Q10.** Write a function `getMonthCalendar(year, month)` that returns a 2D array representing a monthly calendar, where each inner array is a week and days outside the month are `null`.

**Q11.** Write a function that compares two date strings in `"YYYY-MM-DD"` format and returns `"earlier"`, `"later"`, or `"same"` without using the `Date` constructor.

---
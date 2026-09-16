function daysBetween(date1, date2) {
  // Set both dates to midnight
  const d1 = new Date(
    date1.getFullYear(),
    date1.getMonth(),
    date1.getDate()
  );

  const d2 = new Date(
    date2.getFullYear(),
    date2.getMonth(),
    date2.getDate()
  );

  // Difference in milliseconds
  const difference = Math.abs(d2 - d1);

  // Convert milliseconds to days
  return Math.floor(difference / (1000 * 60 * 60 * 24));
}

console.log(
  daysBetween(
    new Date("2025-06-01"),
    new Date("2006-06-15")
  )
);
// → 14
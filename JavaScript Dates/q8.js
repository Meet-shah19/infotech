function getWeekNumber(date) {
  const d = new Date(date);

  // Set to the nearest Thursday
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));

  // Get the first day of the year
  const yearStart = new Date(d.getFullYear(), 0, 1);

  // Calculate the week number
  const weekNumber = Math.ceil(
    (((d - yearStart) / 86400000) + 1) / 7
  );

  return weekNumber;
}

console.log(getWeekNumber(new Date("2025-01-01")));
// → 1

console.log(getWeekNumber(new Date("2025-06-18")));
// → 25
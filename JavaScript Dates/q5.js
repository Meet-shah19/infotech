function nextMonday(date) {
  const result = new Date(date);

  const day = result.getDay(); // Sunday = 0, Monday = 1, ...

  let daysToMonday = (8 - day) % 7;

  // If the given date is already Monday, get the NEXT Monday
  if (daysToMonday === 0) {
    daysToMonday = 7;
  }

  result.setDate(result.getDate() + daysToMonday);

  return result;
}

console.log(nextMonday(new Date("2025-06-18")));
// → Mon Jun 23 2025
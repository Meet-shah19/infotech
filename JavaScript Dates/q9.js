function addBusinessDays(date, n) {
  let result = new Date(date);

  for (let i = 0; i < n; ) {
    result.setDate(result.getDate() + 1);

    let day = result.getDay();

    if (day !== 0 && day !== 6) {
      i++;
    }
  }

  return result;
}

// Example
console.log(
  addBusinessDays(new Date("2025-06-13"), 1)
);
// → Mon Jun 16 2025

console.log(
  addBusinessDays(new Date("2025-06-13"), 5)
);
// → Fri Jun 20 2025
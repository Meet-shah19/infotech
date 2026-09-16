function compareDates(date1, date2) {
  const [year1, month1, day1] = date1.split("-").map(Number);
  const [year2, month2, day2] = date2.split("-").map(Number);

  if (year1 < year2) {
    return "earlier";
  }

  if (year1 > year2) {
    return "later";
  }

  if (month1 < month2) {
    return "earlier";
  }

  if (month1 > month2) {
    return "later";
  }

  if (day1 < day2) {
    return "earlier";
  }

  if (day1 > day2) {
    return "later";
  }

  return "same";
}

// Examples
console.log(compareDates("2025-06-10", "2025-06-15"));
// → "earlier"

console.log(compareDates("2025-07-15", "2025-06-15"));
// → "later"

console.log(compareDates("2025-06-15", "2025-06-15"));
// → "same"
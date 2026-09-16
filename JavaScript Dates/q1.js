const today = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

console.log("Full Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Day of Month:", today.getDate());
console.log("Day of Week:", days[today.getDay()]);
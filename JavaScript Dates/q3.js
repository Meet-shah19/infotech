function getAge(dob) {
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();

  // Check if the birthday has happened this year
  const month = today.getMonth() - dob.getMonth();

  if (
    month < 0 ||
    (month === 0 && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  return age;
}

console.log(getAge(new Date("2006-06-15")));
// → 25 (if today is June 2025)
function getMonthCalendar(year, month) {
  const calendar = [];

  // First day of the month
  const firstDay = new Date(year, month, 1).getDay();

  // Number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let week = [];

  // Add null before the first day
  for (let i = 0; i < firstDay; i++) {
    week.push(null);
  }

  // Add all days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);

    // When week is complete
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }

  // Add null after the last day
  while (week.length > 0 && week.length < 7) {
    week.push(null);
  }

  if (week.length > 0) {
    calendar.push(week);
  }

  return calendar;
}

// Example: June 2025
console.log(getMonthCalendar(2025, 5));
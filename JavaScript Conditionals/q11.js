function checkLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log("Leap Year");
    } else {
        console.log("Not a Leap Year");
    }
}

// Examples
checkLeapYear(2024);  // Leap Year
checkLeapYear(2023);  // Not a Leap Year
checkLeapYear(1900);  // Not a Leap Year
checkLeapYear(2000);  // Leap Year
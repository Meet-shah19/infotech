function getDayName(day) {
    switch (day) {
        case 1:
            console.log("Monday");
            break;

        case 2:
            console.log("Tuesday");
            break;

        case 3:
            console.log("Wednesday");
            break;

        case 4:
            console.log("Thursday");
            break;

        case 5:
            console.log("Friday");
            break;

        case 6:
            console.log("Saturday");
            break;

        case 7:
            console.log("Sunday");
            break;

        default:
            console.log("Invalid day");
    }
}

// Examples
getDayName(1);  // Monday
getDayName(5);  // Friday
getDayName(7);  // Sunday
getDayName(9);  // Invalid day
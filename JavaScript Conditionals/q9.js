function calculateGrade(marks) {
    if (marks >= 90 && marks <= 100) {
        console.log("A+");
    } else if (marks >= 75) {
        console.log("A");
    } else if (marks >= 60) {
        console.log("B");
    } else if (marks >= 45) {
        console.log("C");
    } else if (marks >= 0) {
        console.log("Fail");
    } else {
        console.log("Invalid marks");
    }
}

// Examples
calculateGrade(95);  // A+
calculateGrade(80);  // A
calculateGrade(65);  // B
calculateGrade(50);  // C
calculateGrade(30);  // Fail
function checkScholarship(marks, category) {

    let grade;
    let scholarship;

    if (marks >= 90) {
        grade = "A";

        // Nested if for category
        if (category === "general") {
            scholarship = "Full scholarship";
        } else {
            scholarship = "Full scholarship + ₹5000 bonus";
        }

    } else if (marks >= 75) {
        grade = "B";

        // Nested if for category
        if (category === "general") {
            scholarship = "50% scholarship";
        } else {
            scholarship = "75% scholarship";
        }

    } else if (marks >= 60) {
        grade = "C";
        scholarship = "No scholarship";

    } else {
        grade = "Fail";
        scholarship = "No scholarship";
    }

    console.log("Grade:", grade);
    console.log("Scholarship:", scholarship);
}

// Examples
checkScholarship(95, "general");
// Grade: A
// Scholarship: Full scholarship

checkScholarship(92, "reserved");
// Grade: A
// Scholarship: Full scholarship + ₹5000 bonus

checkScholarship(80, "general");
// Grade: B
// Scholarship: 50% scholarship

checkScholarship(80, "reserved");
// Grade: B
// Scholarship: 75% scholarship

checkScholarship(65, "general");
// Grade: C
// Scholarship: No scholarship

checkScholarship(50, "reserved");
// Grade: Fail
// Scholarship: No scholarship
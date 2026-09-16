function checkResult(marks) {
    if (marks >= 40) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

// Examples
checkResult(75);  // Pass
checkResult(35);  // Fail
checkResult(40);  // Pass
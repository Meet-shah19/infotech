function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("Eligible to Vote");
    } else {
        console.log("Not Eligible");
    }
}

// Examples
checkVotingEligibility(20);  // Eligible to Vote
checkVotingEligibility(15);  // Not Eligible
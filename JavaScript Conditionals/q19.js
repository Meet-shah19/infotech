function calculateTax(income) {
    let tax = 0;

    if (income <= 250000) {
        tax = 0;
    } 
    else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
    } 
    else if (income <= 1000000) {
        tax = (250000 * 0.05) + ((income - 500000) * 0.20);
    } 
    else {
        tax = (250000 * 0.05) +
              (500000 * 0.20) +
              ((income - 1000000) * 0.30);
    }

    // 4% Health & Education Cess
    let cess = tax * 0.04;

    // Total tax
    let totalTax = tax + cess;

    console.log("Income: ₹" + income);
    console.log("Tax: ₹" + tax);
    console.log("Cess (4%): ₹" + cess);
    console.log("Total Tax Payable: ₹" + totalTax);
}

// Examples
calculateTax(200000);
calculateTax(400000);
calculateTax(700000);
calculateTax(1200000);
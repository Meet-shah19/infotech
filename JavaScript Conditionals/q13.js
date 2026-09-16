function calculateBill(units) {
    let bill = 0;

    if (units <= 100) {
        bill = units * 1.50;
    } 
    else if (units <= 300) {
        bill = (100 * 1.50) + ((units - 100) * 2.50);
    } 
    else if (units <= 500) {
        bill = (100 * 1.50) +
               (200 * 2.50) +
               ((units - 300) * 4.00);
    } 
    else {
        bill = (100 * 1.50) +
               (200 * 2.50) +
               (200 * 4.00) +
               ((units - 500) * 5.00);
    }

    console.log("Electricity Bill: ₹" + bill);
}

// Examples
calculateBill(80);   // ₹120
calculateBill(200);  // ₹400
calculateBill(400);  // ₹950
calculateBill(600);  // ₹1950
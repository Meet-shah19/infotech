function calculateTicketPrice(age, isWeekend) {
    let price;

    if (age < 3) {
        price = 0;
        console.log("Ticket: Free");
    } else {
        if (age <= 12) {
            price = 200;
        } else {
            if (age <= 59) {
                price = 500;
            } else {
                price = 300;
            }
        }

        // Add ₹100 on weekends for paid tickets
        if (isWeekend) {
            price = price + 100;
        }

        console.log("Ticket Price: ₹" + price);
    }
}

// Examples
calculateTicketPrice(2, true);    // Ticket: Free
calculateTicketPrice(10, false);  // ₹200
calculateTicketPrice(25, true);   // ₹600
calculateTicketPrice(65, true);   // ₹400
let number = 1234567.89;

let currency = number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
});

console.log(currency);
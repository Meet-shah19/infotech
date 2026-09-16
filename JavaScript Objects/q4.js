const employee = {
    name: "Meet",
    age: 20,
    salary: 30000
};

// Method 1: Using "in" operator
console.log("salary" in employee);

// Method 2: Using hasOwnProperty()
console.log(employee.hasOwnProperty("salary"));
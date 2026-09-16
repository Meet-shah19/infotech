function triangleType(a, b, c) {
    // Check if the triangle is valid
    if (a + b + c !== 180 || a <= 0 || b <= 0 || c <= 0) {
        console.log("Invalid Triangle");
    } 
    // All angles are equal
    else if (a === b && b === c) {
        console.log("Equilateral");
    } 
    // Two angles are equal
    else if (a === b || b === c || a === c) {
        console.log("Isosceles");
    } 
    // No angles are equal
    else {
        console.log("Scalene");
    }
}

// Examples
triangleType(60, 60, 60);  // Equilateral
triangleType(70, 70, 40);  // Isosceles
triangleType(50, 60, 70);  // Scalene
triangleType(90, 50, 30);  // Invalid Triangle
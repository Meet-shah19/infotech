function calculateBMI(weight, height) {
    let bmi = weight / (height * height);

    console.log("BMI:", bmi.toFixed(2));

    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi < 25) {
        console.log("Normal");
    } else if (bmi < 30) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    }
}

// Examples
calculateBMI(60, 1.70);
calculateBMI(75, 1.75);
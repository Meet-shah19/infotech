function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Angles
let angles = [30, 45, 60];

for (let angle of angles) {
    let radians = toRadians(angle);

    console.log("Angle:", angle + "°");
    console.log("Radians:", radians);
    console.log("sin:", Math.sin(radians).toFixed(4));
    console.log("cos:", Math.cos(radians).toFixed(4));
    console.log("tan:", Math.tan(radians).toFixed(4));
    console.log("----------------");
}
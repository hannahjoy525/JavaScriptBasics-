console.log("Hello World")
const userAge = 25;
const hasMedicalClearance = true;

if (userAge >= 21 && hasMedicalClearance) {
  console.log('Gun Status', 'User is eligible to purchase a gun.');
} else if (userAge >= 21 && !hasMedicalClearance) {
  console.log('Gun Status', 'User is old enough, but needs medical clearance to purchase a gun.');
} else {
  console.log('Gun Status', 'User is not eligible to purchase a gun.');
}
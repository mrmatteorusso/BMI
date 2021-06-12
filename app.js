const yourName = prompt('Please enter you name');
const mass1 = prompt('Please enter your mass');
const height1 = prompt('your height');
const BMI1 = mass1 / height1 **2;
const yourName2 = prompt('Please enter your friends\'s name');
const mass2 = prompt('your friend\s mass');
const height2 = prompt('your friend\s height');
const BMI2 = mass2 / (height2 * height2);
alert(`${yourName}'s BMI is ${BMI1} and ${yourName2}'s BMI is ${BMI2}`);
if (BMI2<BMI1) {
    alert( `${yourName}'s BMI is lower than ${yourName2}'s BMI`)
} else if (BMI2>BMI1) {
    alert( `${yourName2}'s BMI is lower than ${yourName}'s BMI`)
}

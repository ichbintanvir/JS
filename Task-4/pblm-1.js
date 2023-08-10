// radian to degree
function radianToDegree(userInput) {
    let degree = 57.2958;
    let total = userInput * degree;
    return total.toFixed(2);
}
const userInput = 10;
const output = radianToDegree(userInput);
// output.toFixed(1);
console.log(output);
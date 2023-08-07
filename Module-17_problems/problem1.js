var arr = ['Apple', 'Banana', "Orange"];
// find the index of banana
console.log("The index of 'banana' is :", arr.indexOf("Banana"));
// replace 'Banana' with 'Mango'
arr[1] = 'Mango';
console.log(arr);
// remove 'Orange' add 'Watermelon'
arr.pop();
arr.push("Watermelon");
console.log(arr);
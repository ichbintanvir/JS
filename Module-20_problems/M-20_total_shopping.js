const arr = [
    { name: "shirt", price: 1500 },
    { name: "pant", price: 1300 },
    { name: "belt", price: 700 },
    { name: "shoes", price: 2000 },
    { name: "tie", price: 1000 },
];

function shopping_calculation(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].price;
    }
    return sum;
}
const output = shopping_calculation(arr);
console.log("Total shopping price: ", output);
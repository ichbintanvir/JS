const arr = [45, 87, 96, 11, 63, -56, 71, 28];
const arr2 = [];
function onlyPossitive(arr) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item > 0) {
            arr2.push(item);
        }
    }
    return arr2;
}
const output = onlyPossitive(arr);
console.log(output);
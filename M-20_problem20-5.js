function oddSum(arr) {
    for (var i = 0; i < arr.length; i = i + 2) {
        console.log(i, arr[i]);
    }
}
var arr = [12, 65, 45, 78, 32, 45, 91];
oddSum(arr);
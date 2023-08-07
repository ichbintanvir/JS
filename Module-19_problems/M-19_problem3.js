function make_avg(arr) {
    let a = 0;
    for (var i = 0; i < arr.length; i++) {
        a += arr[i];
    }
    return a / arr.length;
}
var arr = [5, 10, 15];
var output = make_avg(arr);
console.log(output);
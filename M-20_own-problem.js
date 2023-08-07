function multi_arr(arr) {
    var oddArr = [];
    var evenArr = [];
    var oddSum = 0;
    var evenSum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenArr.push(arr[i]);
            evenSum += arr[i];
        }
        else {
            oddArr.push(arr[i]);
            oddSum += arr[i];
        }
    }
    console.log("The odd arrays are: ");
    console.log(oddArr);
    console.log("Total sum of odd arrays elements are: ", oddSum);

    console.log("The even arrays are: ");
    console.log(evenArr);
    console.log("Total sum of even arrays elements are: ", evenSum);
}
var arr = [1, 2, 3, 4, 5, 6];
multi_arr(arr);
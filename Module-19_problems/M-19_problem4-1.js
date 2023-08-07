function odd_even(value) {
    if (value % 2 == 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
var output = odd_even(21);
console.log(output);
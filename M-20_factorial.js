function factorial(num) {
    var a = 1;
    for (var i = 1; i <= num; i++) {
        for (var j = 1; j < i; j++) {
            a *= j;
            console.log(a + "*" + j + "=" + a * j);
        }
    }
    return a;
}
var output = factorial(4);
console.log('Finally get factorial value : ', output);
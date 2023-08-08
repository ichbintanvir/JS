function loop(num) {
    let i = 1;
    for (; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("foobar");
        }
        else if (i % 3 === 0) {
            console.log("foo");
        }
        else if (i % 5 === 0) {
            console.log("bar");
        }
        else {
            console.log(i);
        }
    }

}
const user_number = 50;
// const output = loop(user_number);
loop(user_number);
// console.log(output);
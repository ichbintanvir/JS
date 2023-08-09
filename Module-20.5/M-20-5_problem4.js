let mark = -1;

if (mark != -1) {
    if (mark < 33) {
        console.log('pass');
    }
    else if (mark >= 33 && mark <= 80) {
        console.log('grate grade');
    }
    else if (mark == 90) {
        console.log('star');
    }
}
else {
    console.log("you input larger number");
}
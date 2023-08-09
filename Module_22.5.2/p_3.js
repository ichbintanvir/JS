// centemeter to meter convert
function centemeterToMeter(centemeter) {
    let meter = 0.01;
    let totalMeter = meter * centemeter;
    return totalMeter;
}
const centemeter = 100;
const output = centemeterToMeter(centemeter);
console.log(output);
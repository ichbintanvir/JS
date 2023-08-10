// calculte the oil prices
function oilPrice(digel, pettol, octen) {

    const digelPerLiter = 114;
    const pettolPerLiter = 130;
    const octenPerLiter = 135;

    let digelPrice = digel * digelPerLiter;
    let pettolPrice = pettol * pettolPerLiter;
    let octenPrice = octen * octenPerLiter;

    let totalBill = digelPrice + pettolPrice + octenPrice;
    return totalBill;
}

// const output = oilPrice(1, 1, 1);
const output = oilPrice(30, 20, 10);
console.log(output);
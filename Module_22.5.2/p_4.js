// book holesell price
// 1st 100 = 100
// 2nd 100 = 90
// 3r to above = 70

let first100Rate = 100;
let second100Rate = 90;
let third100oraboveRate = 70;
let sum = 0;
let money = 1;
function numberOfBooks(num) {
    for (let i = 1; i <= num; i++) {
        if (i <= 100) {
            let per_Book_money = money * first100Rate;
            sum += per_Book_money;
        }
        else if (i > 100 && i <= 200) {
            let per_Book_money = money * second100Rate;
            sum += per_Book_money;
        }
        else {
            let per_Book_money = money * third100oraboveRate;
            sum += per_Book_money;
        }
    }
    return sum;
}

let numberOfOrderBooks = 201;
const output = numberOfBooks(numberOfOrderBooks);
console.log(output);
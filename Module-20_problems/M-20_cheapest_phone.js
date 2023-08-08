const phone = [
    { name: 'mi', storage: '32gb', camara: '20px', price: 22000, color: "red" },
    { name: 'Nokia', storage: '32gb', camara: '20px', price: 15000, color: "blue" },
    { name: 'xiaomi', storage: '32gb', camara: '20px', price: 21000, color: "red" },
    { name: 'samsung', storage: '32gb', camara: '20px', price: 30000, color: "black" },
    { name: 'HTC', storage: '32gb', camara: '20px', price: 18000, color: "red" },
    { name: 'Motorola', storage: '32gb', camara: '20px', price: 20000, color: "red" },
    { name: 'LG', storage: '32gb', camara: '20px', price: 24000, color: "red" },
    { name: 'walton', storage: '32gb', camara: '20px', price: 120000, color: "red" },
];
function cheap_phone(arr) {
    var cheap = phone[0].price
    // var cheap = phone[0]
    for (var i = 0; i < arr.length; i++) {
        if (cheap > phone[i].price) {
            cheap = phone[i];
        }
        // if (cheap.price > phone[i].price) {
        //     cheap = phone[i];
        // }
    }
    return cheap;
}
const output = cheap_phone(phone);
console.log(output);
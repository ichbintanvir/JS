// একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। 
// বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।
// প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং 
// পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। 
// এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা 
// (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 
// যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । 
// বাকি মানুষ পাবলিক বাসে যাবে। 
// এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।
function publicBusFare(passerger) {
    let perBusTicket = 250;
    let amountOfBus = passerger / 50;
    amountOfBus = Math.floor(amountOfBus);
    console.log(`Total ${amountOfBus} Bus needed`);
    let busInsidePassager = amountOfBus * 50;
    let passergerLeft = passerger - busInsidePassager;
    let totalRent;
    if (passergerLeft > 11) {
        let microw = passergerLeft / 11;
        microw = Math.floor(microw);
        console.log(`Total ${microw} Microw needed`);
        let microwPassanger = microw * 11;
        let left = passergerLeft - microwPassanger;
        totalRent = perBusTicket * left;
    }
    else {
        totalRent = perBusTicket * passergerLeft;
    }
    return totalRent;
}
// const output = publicBusFare(50);
// const output = publicBusFare(55);
// const output = publicBusFare(112);
const output = publicBusFare(235);
// const output = publicBusFare(365);
console.log(output);
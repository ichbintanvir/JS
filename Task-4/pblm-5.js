function isBestFriend(obj1, obj2) {
    let str1 = obj1.name;
    let str2 = obj2.friend;
    if (str1 === str2) {
        return true;
    }
    else {
        return false;
    }
}
// ---------------------------
// case study - 1
// ---------------------------
// const obj1 = { name: "onabil", friend: "babul" };
// const obj2 = { name: "babul", friend: "tamvir" };
// ---------------------------
// case study - 2
// ---------------------------
const obj1 = { name: "tanvir", friend: "babul" };
const obj2 = { name: "babul", friend: "tanvir" };
const output = isBestFriend(obj1, obj2);
console.log(output);
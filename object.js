const person = {
    name: 'Tanvir',
    age: 14,
    degree: "Ms",
    institution: "JU",
    year: 2023
}
// var info = person.name;
var info_keys = Object.keys(person);
for (var i = 0; i < info_keys.length; i++) {
    console.log(info_keys[i]);
    console.log("=============");
}
var info_values = Object.values(person);
for (var i = 0; i < info_values.length; i++) {
    console.log("=============");
    console.log(info_values[i]);
    console.log("=============");
}
// console.log(info);
// console.log(typeof (info));
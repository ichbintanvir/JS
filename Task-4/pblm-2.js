// check a file .js or not
function isJavaScriptFile(fileName) {
    let text = fileName.endsWith(".js");
    return text;
}
// const fileName = 'problem.js';
// const fileName = 'problem.py';
const fileName = 'problem.py.js';
const output = isJavaScriptFile(fileName);
console.log(output);
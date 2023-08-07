function duplicate(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (arr1.includes(ele) === false) {
            arr1.push(ele);
        }
    }
    return arr1;
}

const arr = ['Tanvir', "hello", "cloud", 'hello', 'Tanvir', 'aws', "hello", "aws"]
// const arr = ['a', "b", "c", 'd', 'e', 'a', "e"]

const output = duplicate(arr);
console.log(output);
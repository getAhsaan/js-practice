


function sum(num1, num2) {
    if (typeof (num1 || num2) !== "number") {
        return "please input number";
    }
    return num1 + num2;
}

console.log(sum("20", 30));


const myString = "this is";
console.log(myString[3]);
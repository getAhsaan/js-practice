function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
    // Only change code above this line
}

const result1 = checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift");
const result2 = checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "pet");
const result3 = checkObj({ city: "Seattle" }, "district");
console.log(result1, result2, result3);
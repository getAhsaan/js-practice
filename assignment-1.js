/*
The "mindGame" function takes a positive number as input and returns the result. If the input is not a positive number, the function returns an error message.
*/
function mindGame(positiveNumber) {
    if (typeof positiveNumber !== 'number' || positiveNumber <= 0) {
        return "Error: Please input positive number";
    }
    const result = (((positiveNumber * 3) + 10) / 2) - 5;
    return result;
}


/* 
The "evenOdd" function takes a string input and returns whether the number of characters in the string is even or odd. If the input is not a string, the function returns an error message.
*/

function evenOdd(str) {
    if (typeof str !== "string" || str.length === 0) {
        return "Error: Please input string";
    }
    else if (str.length % 2 !== 0) {
        return "odd";
    } else {
        return "even";
    }
}



/* 
The "isLGSeven" function takes in a number as input and checks if it is less than 7. If it is, then the result will be 7 minus the input. If the input is not less than 7, the result will be double the input. If the input is not a number, the function returns an error message.
*/
function isLGSeven(num) {
    if (typeof num !== "number") {
        return "Error: Please input number";
    } else if (num < 7) {
        return num - 7;
    } else {
        return num * 2;
    }
}



/* 
The findingBadData function takes in an array arr and returns the number of elements in the array that are less than zero. It does so by looping through the elements of the array and incrementing a counter count whenever an element is found to be less than zero. The final value of count is returned as the result of the function.
*/
function findingBadData(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Error: Please input array";
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}


/* 
This function calculates the total value of diamonds for three friends (firstFriend, secondFriend, and thirdFriend) and returns the total number of diamonds. If the total number is greater than 2000, the function returns the difference between the total and 2000; otherwise, it returns the total number of diamonds.
*/
function gemsToDiamond(gemsNum1, gemsNum2, gemsNum3) {
    const firstFriend = gemsNum1 * 21;
    const secondFriend = gemsNum2 * 32;
    const thirdFriend = gemsNum3 * 43;

    const totalDiamond = firstFriend + secondFriend + thirdFriend;
    if (typeof gemsNum1 !== "number" || typeof gemsNum2 !== "number" || typeof gemsNum3 !== "number" || gemsNum1 < 0 || gemsNum2 < 0 || gemsNum3 < 0) {
        return "Error: Please input number (positive)";
    }
    else if (totalDiamond > 1000 * 2) {
        const result = totalDiamond - 2000;
        return result;
    } else {
        return totalDiamond;
    }
}
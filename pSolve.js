// function 1
function feetToInch(feet) {
    return feet * 12;
}
console.log(feetToInch(5));


// function 2
function centimeterToMeter(cm) {
    return cm * 0.01;
}

console.log(centimeterToMeter(100));

// function 3
function paperRequirements(book1, book2, book3) {
    return (book1 * 100) + (book2 * 200) + (book3 * 300);
}

console.log(paperRequirements(6, 3, 2));

// function 4
function bestFriend(friends) {
    let largestFriend = friends[0];
    for (let i = 0; i < friends.length; i++) {
        // const friend = friends[i];
        if (friends[i].length < largestFriend.length) {
            largestFriend = friends[i];
        }
    }
    return largestFriend.length;
}
const friendsName = ["ahsan", "shohag", "moonir", "arifffffffffff", "kaosarrrrrr", "ff"];
console.log(bestFriend(friendsName));

// function 5
// function positiveNumber(numbers) {
//     let myPositiveNumber = [];
//     for (let i = 0; i < numbers.length; i++) {
//         const number = numbers[i];
//         if (number >= 0) {
//             myPositiveNumber.push(number);

//         }

//     }
//     return myPositiveNumber;
// }

// const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -3, -6, 55];
// console.log(positiveNumber(numArr));

// function positiveNumber(numbers) {
//     let myPositiveNumber = [];
//     for (let i = 0; i < numbers.length; i++) {
//         const number = numbers[i];
//         if (number < 0) {
//             break;
//         }
//         myPositiveNumber.push(number);
//     }
//     return myPositiveNumber;
// }

// const numArr = [0, 1, 2, 3, 4, -5, 6, 7, 8, 9, -1, -3, -6, 55];
// console.log(positiveNumber(numArr));



function carSpeed(speed) {
    const speedLimit = 70;
    const perKmPoint = 5;

    if (speed < speedLimit + perKmPoint) {
        return 'OK';
    }
    let points = Math.floor(((speed - 70) / 5));
    if (points >= 12) {
        console.log("lisence Expired");
    } else {
        console.log(points);
    }

}

console.log(carSpeed(130));



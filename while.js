// const ourArray = [];
// let i = 0;

// while (i < 10) {
//     ourArray.push(i);
//     i++;
// }

// console.log(ourArray);

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for(let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);
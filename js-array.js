// const fruits = ["banana", "apple", "mango", "orange", "litchi", "guaba"];
// const fol = ["kifol", "ami", "jani", "na", "hobe", "ekta"];

// for (let i = 0; i < fruits.length; i++) {
//     const result = fruits[i];
//     console.log(result);
// }

// fruits.forEach(fruit => {
//     console.log(fruit);
// });

// var result = fruits.push("jackfruit");
// var result = fruits.pop();
// var result = fruits.pop();
// var result = fruits.toString();
// var result = fruits.join(" * ")
// var result = delete fruits[2];
// var result = fruits.shift();
// var result = fruits.unshift("kola");
// var result = fruits.concat(fol);
// var result = fruits.concat("habijabi");
// var result = fruits.splice();

// console.log(fruits);
// console.log(result);

// let numbers = [2, 3, 5, 7, 11, 13, 17];

// create another array by slicing numbers from index 3 to 5
// let newArray = numbers.slice(2, 4);
// let anotherArray = numbers.slice(-2 -4);
// console.log(newArray);

// Output: [ 7, 11, 13 ]


// console.log(fol.toString());
// console.log(fol.sort());
// console.log(fol.reverse());
// console.log(fol);
// const points = [40, 100, 1, 5, 25, 10];
// console.log(
//     points.sort(
//         function (a, b) {
//             return b - a;
//         }
//     )
// );
// console.log(
//     points.sort(
//         function (a, b) {
//             return (a - b) ;
//         }
//     )
// );

// const points = [40, 100, 1, 5, 25, 10];
// let resultttt = points.sort(function(){return 0.5 - Math.random()});
// console.log(resultttt );

// const points = [40, 100, 1, 5, 25, 10];

// for (let i = points.length -1; i > 0; i--) {
//   let j = Math.floor(Math.random() * (i+1));
//   let k = points[i];
//   points[i] = points[j];
//   points[j] = k;
//   console.log(points);
// }

// const numbers = [40, 100, 1, 0.5, 5, 25, 200, 10];
// const maxNumber = Math.min(...numbers);
// console.log(maxNumber);

// for (let i = 1; i <= 10; i++) {
//     console.log(13 * i);
// }

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
    // hobbies: ["reading", "traveling"],
    // address: {
    //   street: "123 Main St",
    //   city: "Anytown",
    //   state: "USA"
    // }
  };
// var p = Object.keys(person);
// var v = Object.values(person);
// console.log(p, v);
var smartphone = { brand: "iPhone", model: "13" };

console.log(smartphone[brand]);
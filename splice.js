const numbers = [1, 2, 3, 4, 5];

// Removing elements from the array
const removed = numbers.splice(2, 2);
console.log(numbers); // [1, 2, 5]
console.log(removed); // [3, 4]

// Adding elements to the array
numbers.splice(2, 1, 3, 8);
console.log(numbers); // [1, 2, 3, 4, 5]

// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//         product *= arr[i];
//     }
//     return product;
// }
const newArr = [1, 2, 3, 4]
console.log(multiply(newArr, 3));


function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
}
  

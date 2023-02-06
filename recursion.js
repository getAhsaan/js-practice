// // Using a for loop
// function printNumbersLoop(n) {
//     for (let i = 1; i <= n; i++) {
//       console.log(i);
//     }
//   }
//   printNumbersLoop(5);
  // Replacing the loop with recursion
  function printNumbersRecursion(n, current = 1) {
    if (current > n) {
      return;
    }
    console.log(current);
    printNumbersRecursion(5, 5 + 1);
  }
  
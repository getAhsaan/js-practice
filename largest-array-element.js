const arr = ["apple", "banana", "cherry", "date", "elderberry"];
let largest = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > largest.length) {
    largest = arr[i];
  }
}
console.log(largest);


  //       .d88888b.             
  //        .8P"     "9bd888b.      
  //       .8P     .d8P"   `"988.   
  //    .8888   .d8P"    ,     98.  
  //  .8P" 88   8"    .d98b.    88  
  // .8P   88   8 .d8P"   "98b. 88  
  // 88    88   8P"  `"8b.    "98.  
  // 88.   88   8       8"8b.    88 
  //  88    "98.8       8   88   "88
  //   `8b.    "98.,  .d8   88    88
  //   88 "98b.   .d8P" 8   88   d8"
  //   88    "98bP"    .8   88 .d8" 
  //   "8b     `    .d8P"   8888"   
  //    "88b.,   .d8P"     d8"      
  //      "9888P98b.     .d8"       
  //              "988888P"  
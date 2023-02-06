

function myArrSum(myArr) {
    let sum  = 0;
   for (let i = 0; i < myArr.length; i++) {
    // const index = i;
    const element = myArr[i];
    sum = sum + element;
    //  console.log(index, element, sum);
   }
   return sum;
}





const myArr = [34, 56, 33, 66, 11, 77]
 const result = myArrSum(myArr);
console.log(result);
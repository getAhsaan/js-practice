


function myDays(day) {
    const first10daysCost = 500;
    const second10daysCost = 300;
    const thirdAnyDaysCost = 100;

    let totalCost = 0;

    for (let i = 1; i <= day; i++) {
        if (i <= 10) {
            totalCost += first10daysCost;
        } else if (i <= 20) {
            totalCost += second10daysCost;
        } else {
            totalCost += thirdAnyDaysCost;
        }
    }
    return totalCost;
}
const result = myDays(26);
// console.log(`Total Cost: ${result}`);
console.log(result);

function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 !== 0) {
            oddNumbers.push(element);


        }
    }
    return oddNumbers;
}

const numbers = [34, 55, 33, 66, 22, 37, 00, 99];
var result = getOddNumbersOfAnArray(numbers);
console.log(result);
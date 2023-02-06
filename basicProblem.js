// 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।
// let n = 10;
// const result = (n * (n + 1)) / 2;
// console.log(result);

// let sum = 0;
// for (let i = 0; i <= n; i++) {
//     sum += i;
// }
// console.log(sum);


// ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।

// const namata = 3;
// const namataLimit = 10;

// let namataResult = [];
// for (let i = 1; i <= namataLimit; i++) {
//     let baseMultiply = namata +" x "+ i;
//     namataResult.push(baseMultiply +" : "+ (i * namata));

// }
// console.log(namataResult);

// function namata(konghorerNamata) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${konghorerNamata} x ${i} = ${i * konghorerNamata}`);

//     }
// }
// namata(3);

// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

// ইনপুটঃ[-1, 2, -3, 4, 5, 6, -7, 8, -9, 10]
// আউটপুটঃ 3

// function myFunction(arr) {
//     let outputArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (element > 5) {
//            outputArr.push(element);
//         }
//     }
//     return outputArr.length;
// }
// const myArr = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
// const result = myFunction(myArr);
// console.log(result);


function graterThanfive(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > 5) count++;
    }
    return count;
}
const numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
const result = graterThanfive(numbers);
console.log(result);

// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।


// function findLargestName(name) {
//     let largestName = "";
//     for (let i = 0; i < name.length; i++) {
//         const element = name[i];
//         if (element.length > largestName.length) {
//             largestName = element.rev;
            
//         }
//     }
// }
// const friendName = ["alamin", "rakib"];
// findLargestName(friendName);



function publicBusFare(numberOfPassengers) {
    const busCapacity = 50;
    const microbusCapacity = 11;
    const busTicketPrice = 250;
    let totalFare = 0;

    if (numberOfPassengers < microbusCapacity) {
        totalFare = 0;
    } else {
        const numberOfBuses = Math.ceil(numberOfPassengers / busCapacity);
        const numberOfMicrobuses = Math.ceil(numberOfPassengers / microbusCapacity);
        totalFare = numberOfBuses * busTicketPrice + numberOfMicrobuses * busTicketPrice;
    }

    return totalFare;
}

console.log(publicBusFare(62));
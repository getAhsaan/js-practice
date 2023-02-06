// function publicBusFare(participants) {
//     const perBus = 50;
//     const perMicro = 11;
//     const perPublicBusFare = 250;

//     const totalBus = Math.floor(participants / perBus);
//     const totalMicro = Math.floor((participants % perBus) / perMicro);
//     const totalPublicBusFare = ((participants % perBus) % perMicro) * perPublicBusFare;

//     if (participants % perBus === 0) {
//         return { totalPublicBusFare };
//         // return { totalBus, totalMicro, totalPublicBusFare };
//     } else if ((participants % perBus) % perMicro === 0) {
//         return { totalPublicBusFare };
//         // return { totalBus, totalMicro, totalPublicBusFare };
//     } else {
//         return { totalPublicBusFare };
//         // return { totalBus, totalMicro, totalPublicBusFare };
//     }
// }

// function publicBusFare(participants) {
//     const perBus = 50;
//     const perMicro = 11;
//     const perPublicBusFare = 250;

//     // const totalBus = Math.floor(participants / perBus);
//     // const totalMicro = Math.floor((participants % perBus) / perMicro);
//     const totalPublicBusFare = ((participants % perBus) % perMicro) * perPublicBusFare;

//     // return { totalBus, totalMicro, totalPublicBusFare };
//     return { totalPublicBusFare };
// }

function publicBusFare(participants) {
    const perBus = 50;
    const perMicro = 11;
    const perPublicBusFare = 250;

    const totalPublicBusFare = ((participants % perBus) % perMicro) * perPublicBusFare;

    return totalPublicBusFare;
}


console.log(publicBusFare(50)); // output: 0
console.log(publicBusFare(55)); // output: 1250
console.log(publicBusFare(112)); // output: 250
console.log(publicBusFare(235)); // output: 500
console.log(publicBusFare(365)); // output: 1000
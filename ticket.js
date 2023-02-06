// // const first100rate = 100;
// // const second100rate = 90;
// // const third100rate = 70;


// // priceFor100 = quantity * 100;
// // priceFor200 = ((quantity - 100) * 90) + priceFor100;
// // priceFor300 = ((quantity - 200) * 90) + priceFor200;


// function ticketPrice(quantity) {

//     if (quantity <= 100 && quantity > 0) {
//         return price = quantity * 100;
//     } else if (quantity <= 200 && quantity > 100) {
//         const priceOf100 = 100 * 100;
//         return price = ((quantity - 100) * 90) + priceOf100;
//     } else {
//         const priceOf100 = 100 * 100;
//         const priceOf200 = 100 * 90;
//         return price = ((quantity - 200) * 70) + priceOf100 + priceOf200;
//     }

// }

// const result = ticketPrice(700);
// console.log(result);



    let tPrice= qty => (qty <= 100) ? qty * 100 :
        (qty <= 200) ? (qty - 100) * 90 + (100 * 100) :
            (qty - 200) * 70 + (100 * 90) + (100 * 100);
          


console.log(tPrice(70));

// const ticketPrice = qty => (qty <= 100) ? qty * 100 : (qty <= 200) ? (qty - 100) * 90 + 10000 : (qty - 200) * 70 + 19000;
// console.log(ticketPrice(700));

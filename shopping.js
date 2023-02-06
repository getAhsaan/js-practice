const shoppingArr = [
    { name: "shirt", price: 500, quantity: 2 },
    { name: "pant", price: 600, quantity: 2 },
    { name: "juta", price: 1000, quantity: 1 },
    { name: "muja", price: 150, quantity: 2 },
    { name: "hat", price: 250, quantity: 1 },
]

function totalCost(products) {
    let myCost = 0;
    for (let i = 0; i < products.length; i++) {
        const productPrice = products[i].price;
        const quantity = products[i].quantity;
        const totalPrice = productPrice * quantity;
        myCost += totalPrice;
    }
    return myCost;
}

const result = totalCost(shoppingArr);
console.log(result);
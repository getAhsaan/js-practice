const phoneArr = [
    { name: "iPhone", price: 50000, color: "silver" },
    { name: "Samsung", price: 30000, color: "white" },
    { name: "Xiomi", price: 10000, color: "black" }
]


function cheapestPhone(phones) {
    let myPhone = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < myPhone.price) {
            myPhone = phone;
        }

    }
    return myPhone;
}

const selectPhone = cheapestPhone(phoneArr);
console.log(selectPhone);
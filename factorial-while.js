

function fact(n) {
    let i = n;
    let result = 1;
    while (i >= 1) {
        result *= i;
        i--
    }
    return result;
}


console.log(fact(6));
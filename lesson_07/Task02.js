'use strict';

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = arr => {

    let total = 0;

    for (const payment of arr) {
        total += payment;
    }
    return `Средний чек за день равен: ${Math.floor(total / arr.length)}`;
};


console.log(getAverageValue(allСashbox));

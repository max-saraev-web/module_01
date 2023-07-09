'use strict';

const generator = (total, n, m, evenOdd) => {

    const newArr = [];

    for (let i = 0; i < total; i++) {
        newArr.push(Math.round(Math.random() * (m - n) + n));        
    }

    let sortedArr = [];

    if (evenOdd % 2 === 0) {
        sortedArr = newArr.filter((n) => n % 2 === 0);
    }
    if(evenOdd % 2 !== 0){
        sortedArr = newArr.filter((n) => n % 2 !== 0);
    }
    return sortedArr;
};

console.log(generator(15, -5, 40, 3));
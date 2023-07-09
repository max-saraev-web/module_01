'use strict';

const generator = (total, n, m) => {

    const newArr = [];

    for (let i = 0; i < total; i++) {
        newArr.push(Math.round(Math.random() * (m - n) + n));        
    }
    
    return newArr;
};

console.log(generator(15, -5, 40));
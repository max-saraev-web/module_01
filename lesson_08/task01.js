'use strict';

const generator = total => {

    const newArr = [];

    for (let i = 0; i < total; i++) {
        newArr.push(Math.round(Math.random() * (100 - 1) + 1));        
    }
    
    return newArr;
};

console.log(generator(2));
'use strict'; 


const generator = (n, m) => {

    const newArr = [];

    for (let i = n; i < m; i++) {
        newArr.push(Math.round(Math.random() * (m - n) + n));        
    }

    let sortedArr = [];

    sortedArr = newArr.filter((n) => {
        if(n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0)){
            return n;
        }
    });
    return sortedArr;
};

console.log(generator(1764, 2024));
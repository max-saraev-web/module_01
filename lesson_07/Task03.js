'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) =>{

    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const modStr = `${prefix} ${arr[i]}`;
        newArr.push(modStr);
    }

    return newArr;
};

console.log(addPrefix(names, 'Mr'));

// console.log();
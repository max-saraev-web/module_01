'use strict';


const numArr = arr => {
  if(Array.isArray(arr)){
    const newArr = arr;
    
    const randomNumber = Math.round((Math.random() * 9) + 1);

    newArr.push(randomNumber);

    const arrSum = newArr.reduce((acc, item) => {
      return acc + item;
    }, 0);

    if(arrSum < 50){
      return numArr(newArr);
    } else if (arrSum >= 50){
      return newArr;
    }
  }else{
    return console.log(`Увы, но ф-я принимает только массив.`);
  }
};

console.log(numArr([1, 2, 3]));
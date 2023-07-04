'use strict';

// Получение чисел от пользователя
const number1 = +prompt("Введите первое число:");
const number2 = +prompt("Введите второе число:");

const min = (a, b) =>  {
  if(a < b){
    return a;
  }else {
    return b;
  }
};

console.log(`
  Минимальное число найдено! Вот оно: ${min(number1, number2)}
`);


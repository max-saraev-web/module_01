'use strict';

// Получение чисел от пользователя
const number1 = prompt("Введите первое число:");
const number2 = prompt("Введите второе число:");

// Функция для нахождения минимального числа
function findMinimum(a, b) {
  const diff = a - b;
  const mask = diff >> 31; // Знаковый бит разности чисел

  return (a + diff) ^ (diff & mask);
}

// Вызов функции и вывод результата
const minimum = findMinimum(number1, number2);
const str = String(minimum);
console.log("Минимальное число:", str.slice(1));


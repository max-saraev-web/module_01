'use strict';

// ? - Задание

/* 
Во многих странах иная прогрессивная шкала налогообложения и вычисляется она более сложным способом: 



Налоговая ставка 13% на доход до 15 000 ₽

Налоговая ставка 20% на доход выше 15 000 ₽ означает, что 20% уплачивается не со всей суммы, а лишь с той части, которая превосходит 15 000 ₽, но не выше 50 000 ₽

Налоговая ставка 30% на доход выше 50 000 ₽ означает, что 30% уплачивается не со всей суммы, а лишь с той части, которая превосходит 50 000 ₽.



Напишите программу, которая корректно сможет посчитать налог и вывести сумму налога в консоль.
*/

// * - Решение
{
    let income = +prompt('Введите ваш месячный доход.');

    let tax = 0;

    if(income > 50000){
        tax += (income - 50000) * 0.3;
        income -=income -50000;
    }
    if(income > 15000){
        tax += (income - 15000) * 0.2;
        income -=income -15000;
    }
    if(income > 0){
        tax += income * 0.13;
    }
    console.log(`
        Ваш налог составляет ${tax}
    `);

    // function taxCalc(income, percent) {   
    //     return income * percent;
    // }
}

// ! - Ещё один вариант
// {
//     let income = +prompt('Введите ваш месячный доход.');

//     let tax = 0;
    
//     if (income <= 15000) {
//         tax = income * 0.13;
//     } else if (income <= 50000) {
//         tax = 15000 * 0.13 + (income - 15000) * 0.2;
//     } else {
//         tax = 15000 * 0.13 + 35000 * 0.2 + (income - 50000) * 0.3;
//     }
    
//     console.log(`
//         Ваш налог составляет  ${tax} ₽
//     `);
// }
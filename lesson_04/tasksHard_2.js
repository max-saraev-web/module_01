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
    /* let extraIncome = 0;
    let taxableIncome = 0; */

    // if(income <= 15000){
        
    //     let deduction = 0.13;
    //     tax = taxCalc(income, deduction);

    //     console.log(`
    //         Уважаемый клиент, за этот месяц вы заработали ${income}, сумма вашего налога    составляет ${tax}, а в процентах это ${deduction * 100}%. 

    //         Хорошего вам дня!
    //     `);
    // } else if(income > 15000 && income <= 50000){

    //     let deduction = 0.13;
    //     tax = taxCalc(income, deduction);

    //     let extraDeduction = 0.2;
    //     extraIncome = income - 15000;

    //     taxableIncome = taxCalc(extraIncome, extraDeduction);

    //     console.log(`
    //         Уважаемый клиент, за этот месяц вы заработали ${income}, сумма вашего налога  составляет ${tax + taxableIncome}. 

    //         Хорошего вам дня!
    //     `);
    // } else if(income > 50000){
        
    //     let deduction = 0.13;
    //     tax = taxCalc(income, deduction);

    //     let extraDeduction = 0.3;
    //     extraIncome = income - 15000;

    //     taxableIncome = taxCalc(extraIncome, extraDeduction);

    //     console.log(`
    //         Уважаемый клиент, за этот месяц вы заработали ${income}, сумма вашего налога  составляет ${tax + taxableIncome}. 

    //         Хорошего вам дня!
    //     `);
    // }
    if(income > 50000){
        tax += (income - 50000) * 0.3;
        income -=income -50000;
    }
    if(income > 15000){
        tax += (income - 15000) * 0.2;
        income -=income -15000;
    }
    if(income < 15000 && income > 0){
        tax += income * 0.13;
    }
    console.log(`
        Ваш налог составляет ${tax}
    `);

    // function taxCalc(income, percent) {   
    //     return income * percent;
    // }
}
// ? - Задание 
/*
Необходимо написать программу для вычисления налога по прогрессивной шкале в зависимости от полученного заработка:

13% на доход до 15 000 ₽

20% на доход от 15 000 ₽ до 50 000 ₽

30% на доход выше 50 000 ₽

Запросить у пользователя доход и вывести в консоль сумму налога
*/

// * - Решение 
{
    const income = +prompt('Введите ваш месячный доход.');

    let tax = 0;
    let deduction = 0;

    if(income <= 15000){

        deduction = 0.13;
        tax = taxCalc(income, deduction);

    }else if(income > 15000 && income < 50000){

        deduction = 0.2;
        tax = taxCalc(income, deduction);

    }else if( income > 500000){
        
        deduction = 0.3;
        tax = taxCalc(income, deduction);
    }

    console.log(`
        Уважаемый клиент, за этот месяц вы заработали ${income}, сумма вашего налога составляет ${tax}, а в процентах это ${deduction * 100}%. 

        Хорошего вам дня!
    `);

    function taxCalc(income, percent) {   
        return income * percent;
    }
}
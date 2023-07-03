'use strict';
/* 
Правила и порядок (порядок важен!) начисления скидок:

1 - Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
2 - При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
3 - Если промокод равен "METHED", то скидка 10%
4 - Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р
*/
const calculate = (total, items, promo = '') =>{

    let payment = total;

    if(items >= 10){
        payment = total - (total * 0.03);
    }

    if(payment > 30000 && total > 30000){
        payment -=(payment - 30000) * 0.15;
    }

    if(promo === 'METHED'){
        payment -= payment * 0.1;
    }
    if(payment > 2000 && promo === 'G3H2Z1'){
        payment -=500;
    }
    return `
        Ваша сумма к оплате ${payment}₽
    `;
};

console.log('calculate: ', calculate(25000, 10, 
    // "METHED"
    // "G3H2Z1"
    ));
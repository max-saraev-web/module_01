'use strict';

const createExchangeFunction = rate => rub => rub * rate;

const usdClosure = createExchangeFunction(64);
const euroClosure = createExchangeFunction(76.8);

const euroToRub = Math.round(euroClosure(24));
console.log('euroToRub: ', euroToRub);

// ! - Пожалуйста расскоментируйте если нужно перевести доллары в рубли
// const usdToRub = Math.round(euroClosure(24));
// console.log('usdToRub: ', usdToRub);

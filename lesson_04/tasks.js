'use strcit';

// ! - Задача 2
/*
{const rain = Math.round(Math.random());

if(rain === 1){
    console.log('Возьмите зонт');
}else{
    console.log('Дождя нет!');
}}
*/

// ! - Задача 3
{
    let total = 0;

    total += +prompt('Введите кол-во баллов по математике: ');
    total += +prompt('Введите кол-во баллов по русскому языку: ');
    total += +prompt('Введите кол-во баллов по информатике ');

    if(total >= 265 && total < 300){
        console.log('Поздравляю, вы поступили на бюджет!');
    }else{
        console.log('Вы не готовы!');
    }
}

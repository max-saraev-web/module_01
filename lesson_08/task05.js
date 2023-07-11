'use strict';

const botNum = Math.round((Math.random() * 99) + 1);
console.log('botNum: ', botNum);

const numberBot = (bot, user) =>{
    document.documentElement.innerHTML = '';
    
    if (user === null) {
        alert('Вы вышли из игры! До свидания!');

        document.documentElement.innerHTML = `
        <h1 class='victory'>
            Увы, но вы отказались от игры :(
        </h1>
        `;
        const title = document.querySelector('.victory');
        title.style.cssText = `
            text-align: center;
            text-align: center;
            color: red;
        `;
        return null;
    }

    let userNum = parseInt(user);


    if(isNaN(userNum)){
        alert('Введите число!');
        return numberBot(bot, prompt('Введите ваш вариант отгадки!'));
    }

    if(userNum > botNum){
        alert('Меньше!');
        return numberBot(bot, prompt('Введите ваш вариант отгадки!'));
    }
    if(userNum < botNum){
        alert('Больше!');
        return numberBot(bot, prompt('Введите ваш вариант отгадки!'));
    }

    if(botNum === userNum){
        alert('Правильно!');
        document.documentElement.innerHTML = `
            <h1 class='victory'>
                Игра законченна - вы победили!
            </h1>
        `;
        const title = document.querySelector('.victory');
        title.style.cssText = `
            text-align: center;
            text-align: center;
            color: red;
        `;
        return ;
    }
};
let userNum = prompt('Введите ваш вариант отгадки!');

numberBot(botNum, userNum);
'use strict';

window.MARBLE = (() => {
  const isNan = x => {
    if (!Number.isNaN(parseFloat(x) && isFinite(x))) {
      return +x;
    } else {
      return null;
    }
  };
  const random = (min = 1, max = 2) =>
    Math.round(Math.random() * (max - min) + min);
  const isOdd = num => (num % 2 === 0);


  const game = (user = 5, bot = 5) => {
    const balance = {
      currentUser: user,
      currentBot: bot,
    };

    const start = () => {
      console.log('Старт игры!');
      console.log(`
            Количество шариков
            Игрок: ${balance.currentUser}
            Бот: ${balance.currentBot}
                `);
      // ! ход пользователя
      let userTurn = prompt(`Введите количество шариков которые хотите
        поставить на кон!
        В данный момент вы можете поставить от 1 до ${balance.currentUser}
            `);
      while (!isNan(userTurn)) {
        if (userTurn === null) break;

        userTurn = prompt(`Введите количество шариков которые хотите
          поставить на кон!
          В данный момент вы можете поставить от 1 до ${balance.currentUser}
            `);
      }
      const userOdd = isOdd(+userTurn);

      // ! ход бота
      const botTurn = isOdd(random());
      console.log('botTurn: ', botTurn);

      // ? - Угадай-ка )
      // if(userTurn === null){
      //     return null;
      // }
      if (botTurn === userOdd) {
        balance.currentUser -= userTurn;
        balance.currentBot += userTurn;
        return start();
      } else {
        balance.currentUser += userTurn;
        balance.currentBot -= userTurn;
        return start();
      }
    };
    return start;
  };
  return {
    game,
  };
})();

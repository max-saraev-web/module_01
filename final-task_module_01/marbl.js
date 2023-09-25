'use strict';

window.MARBLE = (() => {
  const MESSAGES = {
    won: 'вы выиграли',
    lost: 'вы проиграли',
    pc: 'Компьютер',
    user: 'вы',
    total: 'итоговый счёт: ',
    playMore: 'Вы хотите продолжить игру ?',
  };

  // * - Возвращает число если передать число или null если не число
  const isNan = x => {
    if (!Number.isNaN(parseFloat(x)) && isFinite(x)) {
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
      const {currentUser: u, currentBot: b} = balance;

      console.log('Старт игры!');
      console.log(`
            Количество шариков
            Игрок: ${u}
            Бот: ${b}
                `);

      // ? - Условия окончания игры
      if (u <= 0) {
        alert(`
          Помер!
          У вас не осталось шариков!
        `);
        return;
      }

      if (b <= 0) {
        alert(`
          SkyNet повержен!
          У бота не осталось шариков!
        `);
        return;
      }

      // ! ход пользователя
      let userTurn = prompt(`Введите количество шариков которые хотите
      поставить на кон!
      В данный момент вы можете поставить от 1 до ${u}
          `);
      while (!isNan(userTurn) || +userTurn < 0 || +userTurn > u) {
        if (userTurn === null) break;

        userTurn = prompt(`Введите количество шариков которые хотите
        поставить на кон!
        В данный момент вы можете поставить от 1 до ${u}
            `);
      }
      const userOdd = isOdd(+userTurn);

      // ! ход бота
      const botTurn = isOdd(random());

      // ? - Угадай-ка )
      if (userTurn === null) {
        return;
      }

      if (userTurn > 0) {
        if (botTurn === userOdd) {
          balance.currentUser -= +userTurn;
          balance.currentBot += +userTurn;
          return start();
        } else {
          balance.currentUser += +userTurn;
          balance.currentBot -= +userTurn;
          return start();
        }
      }
    };
    return start;
  };
  return {
    game,
  };
})();

'use strict';

window.MARBLE = (() => {
  const MESSAGES = {
    won: 'вы выиграли',
    lost: 'вы проиграли',
    pc: 'Компьютер',
    user: 'вы',
    total: 'итоговый счёт: ',
    playMore: 'Вы хотите продолжить игру ?',
    RSP: {
      figures: [
        'камень',
        'ножницы',
        'бумага',
      ],
      messages: {
        tie: 'ничья',
        conjugatedTie: 'Раундов в ничью',
        won: 'вы выиграли и теперь ходите первым!',
        lost: 'вы проиграли, теперь бот ходит первым!',
        pc: 'Компьютер',
        user: 'вы',
        total: 'итоговый счёт: ',
        playMore: 'Вы хотите продолжить игру ?',
      },
    },
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

  const isOdd = num => num % 2 === 0;

  const game = (user = 5, bot = 5) => {
    const balance = {
      currentUser: user,
      currentBot: bot,
    };

    let counter = 1;
    let rspCounter = 0;

    const rsp = () => {
      const minNum = 0;
      const maxNum = MESSAGES.RSP.figures.length - 1;

      const pcTurn = random(minNum, maxNum);
      const pcFigure = MESSAGES.RSP.figures[pcTurn];

      let userTurn = prompt(MESSAGES.RSP.figures + ' ?');

      let expanedStr;
      MESSAGES.RSP.figures.forEach(elem => {
        if (elem.startsWith(userTurn)) {
          expanedStr = elem;
        }
      });

      while (typeof expanedStr === 'undefined' || userTurn.trim() === '') {
        if (userTurn === null) break;
        userTurn = prompt(figures + ' ?');

        figures.forEach(elem => {
          if (elem.startsWith(userTurn)) {
            expanedStr = elem;
          }
        });
      }

      const userFigureNum = MESSAGES.RSP.figures.findIndex((i) => {
        const sample = expanedStr;

        if (sample === i) {
          return i;
        }
      });

      const userFigure = MESSAGES.RSP.figures[userFigureNum];

      if (pcTurn === userFigureNum) {
        alert(
          `
          ${MESSAGES.RSP.messages.pc}: ${pcFigure}
          ${MESSAGES.RSP.messages.user}: ${userFigure}
          ${MESSAGES.RSP.messages.tie}
          `,
        );
        return rsp();
      }

      if ((pcTurn === 0 && userFigureNum === 1) ||
      (pcTurn === 1 && userFigureNum === 2) ||
      (pcTurn === 2 && userFigureNum === 0)) {
        alert(
          `
          ${MESSAGES.RSP.messages.pc}: ${pcFigure}
          ${MESSAGES.RSP.messages.user}: ${userFigure}
          ${MESSAGES.RSP.messages.lost}
          `,
        );

        counter++;
        return;
      } else {
        alert(
          `
          ${MESSAGES.RSP.messages.pc}: ${pcFigure}
          ${MESSAGES.RSP.messages.user}: ${
            typeof userFigure === 'undefined' ? 'победили' : userFigure}
          ${MESSAGES.RSP.messages.won}
          `,
        );
        return;
      }
    };

    const oneMoreGame = thisFn => {
      const confirmed = confirm(`
        Сыграем ещё разок?
      `);

      if (confirmed === true) {
        counter = 1;
        rspCounter = 0;
        balance.currentUser = user;
        balance.currentBot = bot;
        thisFn();
      }
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
        return oneMoreGame(start);
      }

      if (b <= 0) {
        alert(`
          SkyNet повержен!
          У бота не осталось шариков!
        `);
        return oneMoreGame(start);
      }

      if (rspCounter === 0) {
        rsp();
        rspCounter++;
      }

      // ? - Угадай-ка )

      if (!isOdd(counter)) {
        let userNum = prompt(`
          Введите количество шариков которые хотите
          поставить на кон!
          В данный момент вы можете поставить от 1 до ${u}
          `);

        while (!isNan(userNum) || +userNum < 0 || +userNum > u) {
          if (userNum === null) break;

          userNum = prompt(`Введите количество шариков которые хотите
          поставить на кон!
          В данный момент вы можете поставить от 1 до ${u}
              `);
        }

        const userOdd = isOdd(+userNum);

        const botBet = isOdd(random());
        console.log('botBet: ', botBet);

        if (userNum === null) {
          oneMoreGame(start);
        }

        counter++;

        if (userOdd === botBet) {
          balance.currentUser -= +userNum;
          balance.currentBot += +userNum;
          return start();
        } else {
          balance.currentUser += +userNum;
          balance.currentBot -= +userNum;
          return start();
        }
      } else {
        const botNum = random(1, b);

        const userBet = confirm(`
          Число чётное?
        `);

        counter++;

        if (userBet === isOdd(botNum)) {
          balance.currentUser += +botNum;
          balance.currentBot -= +botNum;
          return start();
        } else {
          balance.currentUser -= +botNum;
          balance.currentBot += +botNum;
          return start();
        }
      }
    };

    return start;
  };

  return {
    game: () => game(),
  };
})();

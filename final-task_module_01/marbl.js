'use strict';

window.MARBLE = (() => {
  const MESSAGES = {
    won: 'вы выиграли',
    lost: 'вы проиграли',
    pc: 'Компьютер',
    user: 'вы',
    total: 'итоговый счёт: ',
    playMore: 'Вы хотите продолжить игру ?',
    runOut: 'Шарики закончились!',
    leave: 'Вы точно хотите выйти? ',
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

  const {leave} = MESSAGES;

  // * - Возвращает число если передать число или null если не число
  const isNan = x => {
    if (!Number.isNaN(parseFloat(x)) && isFinite(x)) {
      return +x;
    } else {
      return null;
    }
  };

  const consciousExit = () => confirm(`${leave}`);

  const runOut = num => (num > 0 ?
    num :
    `${MESSAGES.runOut}`);

  const getFigure = (arr, counter, trigger) => {
    const str = prompt(arr + ' ?');

    if (str === null) {
      const exitConfirm = consciousExit;
      const trueLeave = exitConfirm();

      if (trueLeave) {
        counter++;
        trigger = false;
        return;
      } else if (trueLeave === false) {
        return getFigure(arr, counter, trigger);
      }
    }

    if (str.trim() === '') {
      return getFigure(arr, counter, trigger);
    }

    const figure = arr.indexOf(arr.find(elem =>
      elem.startsWith(str.toLowerCase())));

    if (figure >= 0) {
      return figure;
    } else {
      return getFigure(arr, counter, trigger);
    }
  };

  const random = (min = 1, max = 2) =>
    Math.round(Math.random() * (max - min) + min);

  const isOdd = num => num % 2 === 0;

  // * - получение числа от пользователя
  const getUserNum = userBalls => {
    const userNum = prompt(`
      Введите количество шариков которые хотите
      поставить на кон!
      В данный момент вы можете поставить ${userBalls === 1 ?
      'ТОЛЬКО 1 ШАРИК, это ПОСЛЕДНИЙ ШАНС!' : `от 1 до ${userBalls}`} 
      `);

    if (userNum === null) {
      const exitConfirm = consciousExit;
      const trueLeave = exitConfirm();
      if (trueLeave) {
        return null;
      } else if (trueLeave === false) {
        return getUserNum(userBalls);
      }
    }

    if (!isNan(userNum) || +userNum < 0 || +userNum > userBalls) {
      return getUserNum(userBalls);
    } else {
      return userNum;
    }
  };

  const game = (user = 5, bot = 5) => {
    const initialSum = user + bot;

    const balance = {
      currentUser: user,
      currentBot: bot,
    };

    let counter = 1;
    let rspCounter = 0;
    let rspReturn = true;
    let oneMoreGameReturn = true;
    let userWins = 0;
    let botWins = 0;

    const rsp = () => {
      const {figures: figrs} = MESSAGES.RSP;

      const minNum = 0;
      const maxNum = figrs.length - 1;

      const pcTurn = random(minNum, maxNum);
      const pcFigure = figrs[pcTurn];

      const userFigureNum = getFigure(figrs, rspCounter, rspReturn);
      if (userFigureNum === undefined) {
        rspReturn = false;
        return;
      }

      if (pcTurn === userFigureNum) {
        alert(
          `
          ${MESSAGES.RSP.messages.pc}: ${pcFigure}
          ${MESSAGES.RSP.messages.user}: ${figrs[userFigureNum]}
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
          ${MESSAGES.RSP.messages.user}: ${figrs[userFigureNum]}
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
            typeof figrs[userFigureNum] === 'undefined' ?
              'победили' : figrs[userFigureNum]}
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
        botWins = 0;
        userWins = 0;
        thisFn();
      } else {
        oneMoreGameReturn = false;
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
          --------------------------
          Итоговая статистика:
          Побед у gpt: ${botWins}
          Побед у пользователя: ${userWins}
        `);
        return oneMoreGame(start);
      }

      if (b <= 0) {
        alert(`
          gpt повержен!
          У бота не осталось шариков!
          --------------------------
          Итоговая статистика:
          Побед у gpt: ${botWins}
          Побед у пользователя: ${userWins}
        `);
        return oneMoreGame(start);
      }

      if (rspCounter === 0 && rspReturn === true) {
        rsp();
        rspCounter++;
      }

      // ? - Угадай-ка )
      if (rspReturn === false || oneMoreGameReturn === false) {
        return null;
      }

      if (!isOdd(counter)) {
        // ! - переписать на рекурсию
        let userNum = getUserNum(u);
        if (userNum === null) {
          return;
        }
        userNum = Number(userNum);

        const userOdd = isOdd(userNum);

        const botBet = isOdd(random());


        counter++;

        if (userOdd === botBet) {
          // * - бот победил и заберает шары на ходу пользователя
          if (balance.currentBot + userNum > initialSum) {
            balance.currentBot = initialSum;
            balance.currentUser = 0;
          } else {
            balance.currentUser -= userNum;
            balance.currentBot += userNum;
          }
          botWins++;
          alert(`
            Ваша ставка проиграла!
            ---------------------
            Количество шариков
            Игрок: ${runOut(balance.currentUser)}
            Бот: ${runOut(balance.currentBot)}
          `);
          return start();
        } else {
          // * - пользователь победил и заберает шары на ходу пользователя
          if (balance.currentBot + userNum > initialSum ||
              balance.currentUser + userNum > initialSum) {
            balance.currentUser = initialSum;
            balance.currentBot = 0;
          } else {
            balance.currentUser += userNum;
            balance.currentBot -= userNum;
          }
          userWins++;
          alert(`
            Ваша ставка выиграла!
            --------------------
            Количество шариков
            Игрок: ${runOut(balance.currentUser)}
            Бот: ${runOut(balance.currentBot)}
          `);
          return start();
        }
      } else {
        const botNum = random(1, b);

        const userBet = confirm(`
          Число чётное?
        `);

        counter++;

        if (userBet === isOdd(botNum)) {
          // * - пользователь победил и заберает шары на ходу бота
          if (balance.currentBot + botNum > initialSum) {
            balance.currentUser = initialSum;
            balance.currentBot = 0;
          } else {
            balance.currentUser += botNum;
            balance.currentBot -= botNum;
          }
          userWins++;
          alert(`
            Ваша ставка выиграла!
            --------------------
            Количество шариков
            Игрок: ${runOut(balance.currentUser)}
            Бот: ${runOut(balance.currentBot)}
          `);
          return start();
        } else {
          // * - бот победил и заберает шары на ходу бота
          if (balance.currentBot + botNum > initialSum) {
            balance.currentBot = initialSum;
            balance.currentUser = 0;
          } else {
            balance.currentUser -= botNum;
            balance.currentBot += botNum;
          }
          botWins++;
          alert(`
            Ваша ставка проиграла!
            ---------------------
            Количество шариков
            Игрок: ${runOut(balance.currentUser)}
            Бот: ${runOut(balance.currentBot)}
          `);
          return start();
        }
      }
    };

    return start();
  };

  return {
    game,
  };
})();

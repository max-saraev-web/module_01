'use strict';

// ? - Игра камень, ножницы или бумага.

window.RSP = (() => {
  const LANGUAGE = {
    en: {
      figures: [
        'rock',
        'scissors',
        'paper',
      ],
      messages: {
        tie: 'tie !',
        won: ' you won !',
        lost: 'you lost !',
        pc: 'computer',
        user: 'you',
        total: 'the total score is: ',
        playMore: 'Do you want to keep playing ?',
      },
    },
    ru: {
      figures: [
        'камень',
        'ножницы',
        'бумага',
      ],
      messages: {
        tie: 'ничья',
        conjugatedTie: 'Раундов в ничью',
        won: 'вы выиграли',
        lost: 'вы проиграли',
        pc: 'Компьютер',
        user: 'вы',
        total: 'итоговый счёт: ',
        playMore: 'Вы хотите продолжить игру ?',
      },
    },
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = language => {
    const lang = language === 'EN' || language === 'ENG' ?
      'en' : 'ru';

    const result = {
      player: 0,
      computer: 0,
      tie: 0,
    };

    const {[lang]: {
      figures,
      messages: {
        tie,
        won,
        lost,
        pc,
        user,
        total,
        playMore,
        conjugatedTie,
      },
    },
    } = LANGUAGE;
    return function start() {
      const minNum = 0;
      const maxNum = figures.length - 1;

      const pcTurn = getRandomIntInclusive(minNum, maxNum);
      const pcFigure = figures[pcTurn];

      if (result.player + result.computer > 1) {
        const anotherGame = confirm(`
          ${playMore}
        `);

        if (anotherGame) {
          game();
        } else {
          alert(`
          ${total}
          ${pc}: ${result.computer}
          ${user}: ${result.player}
          ${lang === 'en' ? tie : conjugatedTie} : ${result.tie}
        `);
          return null;
        }
      }
      // ! игра
      let userTurn = prompt(figures + ' ?');

      let expanedStr;
      figures.forEach(elem => {
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

      const userFigureNum = figures.findIndex((i) => {
        const sample = expanedStr;

        if (sample === i) {
          return i;
        }
      });

      const userFigure = figures[userFigureNum];

      if (userTurn === null) {
        alert(`
          ${total}
          ${pc}: ${result.computer}
          ${user}: ${result.player}
          ${lang === 'en' ? tie : conjugatedTie} : ${result.tie}
        `);
        return null;
      }

      if (pcTurn === userFigureNum) {
        alert(
          `
          ${pc}: ${pcFigure}
          ${user}: ${userFigure}
          ${tie}
          `,
        );
        result.tie += 1;
        return start();
      }

      if ((pcTurn === 0 && userFigureNum === 1) ||
      (pcTurn === 1 && userFigureNum === 2) ||
      (pcTurn === 2 && userFigureNum === 0)) {
        alert(
          `
          ${pc}: ${pcFigure}
          ${user}: ${userFigure}
          ${lost}
          `,
        );
        result.computer += 1;
        return start();
      } else if (userFigureNum < 0) {
        alert(`
          ${total}
          ${pc}: ${result.computer}
          ${user}: ${result.player}
          ${lang === 'en' ? tie : conjugatedTie} : ${result.tie}
        `);
        return null;
      } else {
        alert(
          `
          ${pc}: ${pcFigure}
          ${user}: ${userFigure}
          ${won}
          `,
        );
        result.player += 1;
        return start();
      }
    };
  };

  return {
    game,
  };
})();

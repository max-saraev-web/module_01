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
        tie: 'tie',
        won: ' you won',
        lost: 'you lost',
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
        won: 'вы выиграли',
        lost: 'вы проиграли',
      },
    },
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (lang = 'ru') => {
    const result = {
      player: 0,
      computer: 0,
    };
    // ? Деструктуризация
    const {[lang]: {
      figures,
      messages: {
        tie,
        won,
        lost
      }
    },
    } = LANGUAGE;

    return function start() {
      const minNum = 0;
      const maxNum = figures.length - 1;

      const pcTurn = figures[getRandomIntInclusive(minNum, maxNum)];
      console.log('pcTurn: ', pcTurn);

      // ! игра
      const userTurn = prompt(figures + ' ?');

      if (pcTurn.startsWith(userTurn)) {
        alert(tie);
      }

      if (pcTurn.startsWith(userTurn)) {
        alert(won);
      }

      if (pcTurn.startsWith(userTurn)) {
        alert(won);
      }
    };
  };

  return {
    game,
  };
})();

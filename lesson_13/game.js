'use strict';

/*
  Имена ф-ий
  1 - getRandomIntInclusive (min, max)
  2 - getFigure (lang)
  3 - game (languge)
*/

// ? - Игра камень, ножницы или бумага.

window.RSP = (function() {
  const LANGUAGE = {
    en: {
      figures: [
        'rock',
        'scissors',
        'paper',
      ],
    },
    ru: {
      figures: [
        'камень',
        'ножницы',
        'бумага',
      ],
    },
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = lang => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      
    };
  };

  return {
    game,
  };
}());

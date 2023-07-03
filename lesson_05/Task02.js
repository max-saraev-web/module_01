'use strict';

const capitalLetter = str => {
    const string = str.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
};

console.log('capitalLetter: ', capitalLetter('РЫБА МОЗГ'));

'use strict';

const findBigDivider = (a, b) => {
    if (b === 0) {
        return a;
    } else {
        return findBigDivider(b, a % b);
    }
};

const a = 4; 
const b = 16; 
const theDivider = findBigDivider(a, b);

console.log(theDivider);

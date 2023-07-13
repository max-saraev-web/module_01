'use strict';

const generator = (n, m) => {
    const functions = {
        getRange(min, max) {
            if (min === max) {
                return 1;
            }
            return 1 + getRange(min + 1, max);
        },
        isLeap(num) {
            return num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0);
        },
        getYears(start, end) {
            const negative = [];
            const positive = [];

            for (let i = start; i <= end; i++) {
                if (i <= 0) {
                    negative.push(i);
                } else {
                    positive.push(i);
                }
            }

            const yearList = [...negative, ...positive];
            return yearList;
        },
    };

    const { getRange, isLeap, getYears } = functions;

    const range = getRange(n, m);
    const years = getYears(n, m);
    const arr = [];

    const getYear = (range, years) => {
        if (range === 0) {
            return;
        } else if (isLeap(years[range - 1])) {
            arr.push(years[range - 1]);
        }
        return getYear(range - 1, years);
    };

    getYear(range, years);
    return arr;
};

console.log(generator(-1900, 1900));

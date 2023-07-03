'use strict';

const getDivider = (a, b) => {

    let dividersArr = [];
    
    return getDividers(a + 1, b, dividersArr);
}
const findDividers = (start, end) => {
    const answ = [];
    return findDividersRecursive(start + 1, end, answ);
};

const findDividersRecursive = (current, end, result) => {
    if (current >= end) {
        return result;
    }

    const sum = findDividersSum(current, 1);
    result.push(sum);

    return findDividersRecursive(current + 1, end, result);
};

const findDividersSum = (n, divisor) => {
    if (divisor > n) {
        return 0;
    }

    return (n % divisor === 0)
        ? divisor + findDividersSum(n, divisor + 1)
        : findDividersSum(n, divisor + 1);
};

console.log('Answer:');
console.log(findDividers(200, 500));
  
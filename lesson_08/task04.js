'use strict'; 
// ! - условие нахождение високосного года 
// n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0

const generator = (n, m) => {

    const functions = {
        getRange(min, max){
            if(min === max){
                return 1;
            }
            return 1 + getRange(min + 1, max);
        },
        isLeap(num){
            return num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0) ? true : false;
        },
    };

    const{getRange, isLeap} = functions;

    const range = getRange(n, m);

    const arr = [];

    const getYear = (range) => {
        let step = range;
        if(step === 0){
            return;
        }else if ((isLeap(step))){
            arr.push(step);
            return getYear(step - 1);
        }else{
            return getYear(step - 1);
        }
    }


    getYear(range)
    return arr;
};

console.log(generator(1764, 2024));
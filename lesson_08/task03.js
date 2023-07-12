'use strict';

const generator = (total, n, m, evenOdd) => {
    
    const arr = [];

    const functions = {
        random(min, max){
            return Math.round(Math.random() * (max - min) + min);
        },
        isOdd(num){
            return num % 2 === 0 ? true : false;
        },
    };

    let {random, isOdd} = functions;


    const adder = arr => {

        if(arr.length === total){
            return;
        }

        if(!(arr.length === total)){

            const randomNumber = random(n, m);

            if(evenOdd === 'odd'){
                if(!isOdd(randomNumber)){
                    arr.push(randomNumber);
                    return adder(arr);
                }
            }else if(evenOdd === 'even'){
                if(isOdd(randomNumber)){
                    arr.push(randomNumber);
                    return adder(arr);
                }
            } else{
                arr.push(randomNumber);
            }
            return adder(arr);
        }
    };
    adder(arr);
    return arr;
};

console.log(generator(15, -5, 40, 'even'));

'use strict';

const isPrime = (n) =>{
    for(let k = n; Math.round(k) === k && k % k === 0; k = true){
        if(k){
            return true;
        } 
    }
    return false;
};

console.log(isPrime(151));
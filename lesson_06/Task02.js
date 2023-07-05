'use strict';

const isPrime = (n) =>{
    if(Math.round(n) === n && n % n === 0){
        return true;
    }else{
        return false;
    }
};

console.log(isPrime(151));
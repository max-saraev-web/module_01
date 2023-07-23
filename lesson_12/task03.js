'use strict';

const rect = {
  x: 5,
  y: 5,
  get width(){
    return this.x;
  },
  get height(){
    return this.y;
  },
  set width(x){
    this.x = x;
  },
  set height(y){
    this.y = y;
  }
};

console.log(rect.width, rect.height);
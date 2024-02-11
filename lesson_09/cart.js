'use strict';


const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  // ! - Готов
  getTotalPrice() {
    return `Общаяя стоймость товаров ${this.totalPrice}`;
  },
  // ! - Готов
  calculateItemPrice() {
    this.totalPrice =
      this.items.reduce((acc, current) => acc + current.itemPrice, 0);
  },
  add(itemName, itemPrice, itemCount = 1) {
    const newItem = {
      itemName,
      itemPrice,
      itemCount,
    };
    this.items.push(newItem);
    this.count =
      this.items.reduce((acc, current) => acc + current.itemCount, 0);
    this.calculateItemPrice();
  },
  increaseCount(number) {
    this.count += number;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(
      JSON.stringify(this.items),
      this.getTotalPrice(),
    );
  },
};


// console.log(cart.getTotalPrice());
cart.add('сок добрый - апельсин', 35);
cart.add('сок добрый - манго', 35);
cart.add('сок добрый - томат', 35);
// const {items:[a,b,c]} = cart;
// cart.calculateItemPrice();
// cart.clear();
// console.log(a);
// console.log(b);
// console.log(c);
cart.print();



import {listIPv4 as ip} from './ipv4.js';

const cart = {
  items: [],
  // total: 0,
  count: 0,
  get totalPrice() {
    return `Общаяя стоймость товаров ${this.calculateItemPrice()}`;
  },
  calculateItemPrice() {
    return this.items
      .reduce((acc, current) => acc + current.itemPrice, 0);
  },
  add(itemName, itemPrice, itemCount = 1) {
    const newItem = {
      itemName,
      itemPrice,
      itemCount,
    };
    this.items.push(newItem);
    this.count = this.items
      .reduce((acc, current) => acc + current.itemCount, 0);
  },
  increaseCount(number) {
    this.count += number;
  },
  clear() {
    this.items = [];
    this.count = 0;
  },
  print() {
    console.log(
      JSON.stringify(this.items),
      this.totalPrice,
    );
  },
};

cart.add('сок добрый - апельсин', 35);
cart.add('сок добрый - манго', 35);
cart.add('сок добрый - томат', 35);

// cart.print();

// ! - Задание 2: вывод количества уникальных ip-адресов


const setLenght = ([...arr]) => `
  Количество уникальных ip-адресов: ${new Set(arr).size}`;
console.log(setLenght(ip));

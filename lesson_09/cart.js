'use strict';

// ! - главные конструкторы
const Cart = function(arr = []) {
  this.goods = arr;
  this.totalPrice = 0;
  this.count = 0;
};
// ? - методы для корзины
const cartMethods = {
  increaseCount() {
    this.count++;
  },
  calculateGoodsPrice() {
    this.totalPrice =
      this.goods.reduce((acc, current) => acc + current.price, 0);
  },
  addGoods(obj) {
    this.goods.push(obj);
    this.increaseCount();
    this.calculateGoodsPrice();
  },
  getTotalPrice() {
    return this.totalPrice;
  },
  clear() {
    this.goods = [],
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(
      this.goods),
    this.totalPrice);
  },
};
// Object.assign(Cart.prototype, cartMethods);
Cart.prototype = cartMethods;

const Goods = function(price, name, discount) {
  this.price = price;
  this.name = name;
  this.discount = discount;
};

// ! - подклассы
const FoodGoods = function(price, name, discount, calcalories) {
  Goods.call(this, price, name, discount);
  this.calcalories = calcalories;
};

const СlothingGoods = function(price, name, discount, material) {
  Goods.call(this, price, name, discount);
  this.material = material;
};

const TechnicsGoods = function(price, name, discount, techType) {
  Goods.call(this, price, name, discount);
  this.techType = techType;
};


const kebab = new FoodGoods(250, 'Шаверма', 1, 1250);
const socks = new СlothingGoods(100, 'Носки мужские чёрные', 0,
  'полиэстер 25%, хлопок 70%');
const ryzen = new TechnicsGoods(19584,
  'AMD Процессор AMD Ryzen 5 7500F, OEM',
  0,
  'Процессор');

const cart = new Cart();

cart.addGoods(kebab);
cart.addGoods(socks);
cart.addGoods(ryzen);

cart.print();

// * - старое
// const cart = {
//   items: [],
//   totalPrice: 0,
//   count: 0,
//   // ! - Готов
//   getTotalPrice() {
//     return `Общаяя стоймость товаров ${this.totalPrice}`;
//   },
//   // ! - Готов
//   calculateItemPrice() {
//     this.totalPrice =
//       this.items.reduce((acc, current) => acc + current.itemPrice, 0);
//   },
//   add(itemName, itemPrice, itemCount = 1) {
//     const newItem = {
//       itemName,
//       itemPrice,
//       itemCount,
//     };
//     this.items.push(newItem);
//     this.count =
//       this.items.reduce((acc, current) => acc + current.itemCount, 0);
//     this.calculateItemPrice();
//   },
//   increaseCount(number) {
//     this.count += number;
//   },
//   clear() {
//     this.items = [];
//     this.totalPrice = 0;
//     this.count = 0;
//   },
//   print() {
//     console.log(
//       JSON.stringify(this.items),
//       this.getTotalPrice(),
//     );
//   },
// };


// console.log(cart.getTotalPrice());
// cart.add('сок добрый - апельсин', 35);
// cart.add('сок добрый - манго', 35);
// cart.add('сок добрый - томат', 35);
// const {items:[a,b,c]} = cart;
// cart.calculateItemPrice();
// cart.clear();
// console.log(a);
// console.log(b);
// console.log(c);
// cart.print();

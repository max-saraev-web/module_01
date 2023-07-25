const cart = {
  items: [],
  count: 0,
  _discount: 0,
  // ! - Установка скидки
  get setDiscount() {
    return this._discount;
  },
  set setDiscount(promo) {
    if (typeof promo === 'string') {
      switch (promo) {
        case 'METHED':
          this._discount = 15;
          break;
        case 'NEWYEAR':
          this._discount = 21;
          break;
      }
    }
  },
  get totalPrice() {
    return `Общаяя стоймость товаров ${this.calculateItemPrice()}`;
  },
  calculateItemPrice() {
    if (this._discount) {
      const allItems = this.items
        .reduce((acc, current) =>
          acc + current.itemPrice * current.itemCount, 0);
      return allItems * (1 - this._discount / 100);
    }
    return this.items
      .reduce((acc, current) =>
        acc + current.itemPrice * current.itemCount, 0);
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
    this._discount = 0;
  },
  print() {
    console.log(
      JSON.stringify(this.items),
      this.totalPrice,
    );
  },
};

cart.add('сок добрый - апельсин', 40, 3);
cart.add('сок добрый - манго', 35);
cart.add('сок добрый - томат', 35);

cart.setDiscount = 'NEWYEAR';
// cart.setDiscount = 'METHED';
cart.print();
console.log(cart);

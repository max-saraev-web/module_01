const cart = {
  items: [],
  count: 0,
  discount: 0,
  // ! - Установка скидки
  get setDiscount() {
    return this.discount;
  },
  set setDiscount(promo) {
    if (typeof promo === 'string') {
      switch (promo) {
        case 'METHED':
          this.discount = 15;
          break;
        case 'NEWYEAR':
          this.discount = 21;
          break;
      }
    }
  },
  get totalPrice() {
    return `Общаяя стоймость товаров ${this.calculateItemPrice()}`;
  },
  calculateItemPrice() {
    if (this.discount) {
      const allItems = this.items
        .reduce((acc, current) => acc + current.itemPrice, 0);
      return allItems * (1 - this.discount / 100);
    }
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

// cart.setDiscount = 'NEWYEAR';
// cart.setDiscount = 'METHED';
cart.print();
console.log(cart);

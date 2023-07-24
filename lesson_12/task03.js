const rect = {
  x: 5,
  y: 5,
  get width() {
    return `${this.x}см`;
  },
  get height() {
    return `${this.y}см`;
  },
  set width(x) {
    if (typeof x === 'number') {
      this.x = x;
    }
  },
  set height(y) {
    if (typeof y === 'number') {
      this.y = y;
    }
  },
};

// rect.width = 40;
// rect.height = 40;
console.log(rect.width, rect.height);

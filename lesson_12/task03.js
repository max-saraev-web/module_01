const rect = {
  _x: 5,
  _y: 5,
  get perimeter() {
    return `${2 * (this._x + this._y)} см`;
  },
  get area() {
    return `${this._y * this._x} см`;
  },
  set width(x) {
    if (typeof x === 'number') {
      this._x = x;
    }
  },
  set height(y) {
    if (typeof y === 'number') {
      this._y = y;
    }
  },
};

rect.height = 20;
console.log(rect.perimeter, rect.area);

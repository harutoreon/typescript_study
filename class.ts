interface Point {
  readonly x: number;
  readonly y: number;
  sum(): number;
}

const point: Point = {
  x: 10,
  y: 20,
  sum: function () {
    return this.x + this.y;
  },
};

console.log(point);  //=> { x: 10, y: 20, sum: [Function: sum] }
console.log(point.sum());  //=> 30

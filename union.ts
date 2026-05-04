type Triangle = { kind: "triangle"; base: number; height: number };
type Rectangle = { kind: "rectangle"; width: number; height: number };
type Shape = Triangle | Rectangle;

function getArea(shape: Shape): number {
  // 共通のプロパティkindを利用して型を判定する
  switch (shape.kind) {
    case "triangle":
      // この節ではshapeがTriangle型に絞り込まれる
      return (shape.base * shape.height) / 2;
    case "rectangle":
      //  この節ではshapeがRectangle型に絞り込まれる
      return shape.width * shape.height;
  }
}

const shape: Triangle = {
  kind: 'triangle',
  base: 5,
  height: 8,
};

console.log(getArea(shape));  //=> 20

// if-else 文
const age: number = 20;

if (age >= 20) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
//=> You are an adult.


// switch 文
const color: string = "blue";

switch (color) {
  case "red":
    console.log("Color is red.");
    break;
  case "blue":
    console.log("Color is blue.");
    break;
  default:
    console.log("Color is neither red nor blue.");
}
//=> Color is blue.


// 型の絞り込み
let value: string | number;
// 50%の確率でstring型またはnumber型の値を代入する
value = Math.random() < 0.5 ? "Hello" : 100;

if (typeof value === "string") {
  // この節ではvalueはstring型として扱われる
  console.log(value.toUpperCase());
} else {
  // この節ではvalueはnumber型として扱われる
  console.log(value * 3);
}
//=> Hello（実行結果によって変化する）

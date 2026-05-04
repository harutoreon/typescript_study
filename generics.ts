// Tが型変数
function identity<T>(arg: T): T {
  return arg;
}

// 型変数Tにstringを割り当てる
const output1 = identity<string>("myString");

// 型変数Tにnumberを割り当てる
const output2 = identity<number>(100);

console.log(output1);  //=> myString
console.log(output2);  //=> 100

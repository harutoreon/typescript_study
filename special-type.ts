const a: any = 100;
console.log(a * 3);
//=> 300

const x: unknown = 100;
// console.log(x * 3);
//=>  'x' is of type 'unknown'.

function doSomething(): void {}
console.log(doSomething);
//=> [Function: doSomething]

function throwError(): never {
  throw new Error();
}
console.log(throwError);
//=> [Function: throwError]

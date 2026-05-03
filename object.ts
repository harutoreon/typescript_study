function printLength(obj: { a?: string }) {
  console.log(obj.a?.length);
}
printLength({ a: "hello" });  //=> 5
printLength({});  //=> undefined

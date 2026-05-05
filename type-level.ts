type Person = {
  name: string;
  age: number;
};

type Name = Person["name"];

let parsonName: Name = "John";
console.log(parsonName);  //=> John

type Age = Person["age"];

// let parsonAge: Age = 'John';
//  Type 'string' is not assignable to type 'number'.

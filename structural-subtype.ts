type Summary = { name: string };
type Detail = { name: string; age: number };

const johnDetail: Detail = { name: "John", age: 28 };
const summary: Summary = johnDetail; // 代入できる。構造的部分型として互換があるため
console.log(summary);  //=> { name: 'John', age: 28 }

const johnSummary: Summary = { name: "John" };
// const detail: Detail = johnSummary; // 代入できない。構造的部分型として互換がない（ageを含まないため）
const map = new Map();

map.set("name", "John");
map.set("age", "20");

for (const [key, value] of map) {
  console.log(key, value);
}
//=> name John
//   age 20

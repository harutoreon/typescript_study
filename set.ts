let numSet: Set<number>;
numSet = new Set();

numSet.add(1);
numSet.add(2);

for (const value of numSet) {
  console.log(value);
}
//=> 1
//   2

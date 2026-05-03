const isReady: boolean = false;
console.log(`type: ${typeof isReady}, value: ${isReady}`);

const age: number = 25;
console.log(`type: ${typeof age}, value: ${age}`);

const fllName: string = 'John Doe';
console.log(`type: ${typeof fllName}, value: ${fllName}`);

const bigNumber: bigint = 100n;
console.log(`type: ${typeof bigNumber}, value: ${bigNumber}`);

const uniqueSymbol: symbol = Symbol('unique');
console.log(`type: ${typeof uniqueSymbol}, value: ${uniqueSymbol.description}`);

const notDefined: undefined = undefined;
console.log(`type: ${typeof notDefined}, value: ${notDefined}`);

const empty: null = null;
console.log(`type: ${typeof empty}, value: ${empty}`);

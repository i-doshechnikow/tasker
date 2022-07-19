const testObj = { a: 1, b: 2 };

const { a, ...restObj } = testObj;

console.log("restObj :>> ", restObj);

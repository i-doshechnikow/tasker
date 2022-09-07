const last = (arr) => (arr && arr.length ? arr[arr.length - 1] : undefined);

const lastAt = (arr) => arr?.at(-1);

console.log(last([1, 2, 3])); // 3
console.log(last([])); // undefined
console.log(last(null)); // undefined
console.log(last(undefined)); // undefined

console.log(lastAt([1, 2, 3])); // 3
console.log(lastAt([])); // undefined
console.log(lastAt(null)); // undefined
console.log(lastAt(undefined)); // undefined

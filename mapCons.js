const mapConsecutive = (arr, n, fn) =>
  arr.slice(n - 1).map((v, i) => fn(arr.slice(i, i + n)));

const test = mapConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, (x) =>
  x.join("-")
);

console.log("test :>> ", test);
// ['1-2-3', '2-3-4', '3-4-5', '4-5-6', '5-6-7', '6-7-8', '7-8-9', '8-9-10'];

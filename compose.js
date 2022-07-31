const compose =
  (...funcs) =>
  (arg) =>
    funcs.reduce((acc, func) => func(acc), arg);

console.log(
  "compose -> ",
  compose(
    (x) => x ** x,
    (y) => y + y
  )(2)
);

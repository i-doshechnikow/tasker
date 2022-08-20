let test = [1, 2, 3, 4, 5, 6, 7, 8, 9].flatMap((el) =>
  el % 2 === 0 ? [el * 2] : []
);

console.log("test :>> ", test);

const check = (str) => {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

let test = check("kazak");

console.log("test :>> ", test);

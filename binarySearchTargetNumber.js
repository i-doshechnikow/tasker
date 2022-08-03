var search = function (nums, target) {
  let min = 0,
    max = nums.length - 1,
    middle;

  while (min <= max) {
    middle = min + Math.floor((max - min) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] > target) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));

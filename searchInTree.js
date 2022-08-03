const searchInTree = (path, targetObject) => {
  const pathArray = path.split(".");

  let currentValue = targetObject,
    currentPathname;

  for (let i = 0; i < pathArray.length; i++) {
    currentPathname = pathArray[i];
    if (currentValue.hasOwnProperty(currentPathname)) {
      currentValue = currentValue[currentPathname];
    } else return "this object hasnt this path";
  }

  return currentValue;
};

const testObject = {
  first: null,
  second: {
    apple: "apple",
    peach: null,
    vegetables: {
      cucumber: "🥒",
    },
  },
};

console.log(searchInTree("second.vegetables", testObject));
console.log(searchInTree("second.vegetables.cucumber", testObject));
console.log(searchInTree("second.vegetables.carrot", testObject));

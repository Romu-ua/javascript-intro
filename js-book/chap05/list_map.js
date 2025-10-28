let list = [2, 3, 4, 5, 6];

let result = list.map((value, index, list) => {
  return value * value;
});

console.log(result);

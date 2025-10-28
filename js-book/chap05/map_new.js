let data = new Map([
  ['1st', 'ファースト'],
  ['2st', 'セカンド'],
  ['3st', 'サード'],
]);

console.log(data);

let key = [1, 2, 3];
let values = ['あ', 'い', 'う'];

let data2 = new Map(
  key.map((value, index) => {
    return [value, values[index]];
  })
);
console.log(data2);

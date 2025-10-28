let data1 = {
  apple: 150,
  orange: 100,
  banana: 120,
};
Array.prototype.hoge = function () {};
for (let key in data1) {
  console.log(data1[key]);
}

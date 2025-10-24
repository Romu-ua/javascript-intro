'user strict';
// 配列
// 内部的には何をしているの？ = オブジェクトを作っているだけ
// 1. indexをつける
// 2. length
// 3. Array.prototypeを作成 (Array.protorypeはObjectプロトタイプを持っている)

let fruits = ['apple', 'bananna'];
let arrayLikeObject = {
  0: 'apple',
  1: 'banana',
  length: 2,
};
arrayLikeObject.__proto__ = Array.prototype;

console.log(fruits);
console.log(arrayLikeObject);
console.log(Array.isArray(fruits));
console.log(Array.isArray(arrayLikeObject));
// 内部的に見分けている
// 配列だけできるのはlentghだけで、それ以外は同じ

fruits[2] = 'graple';
// console.log(fruits); // lengthが3になる
fruits[10] = 'orange';
// console.log(fruits); // lengthが11になる
length = 2; // これより大きい値は消える

// 配列を作る４つの方法
// 1つ目
fruits = ['apple', , 'banana', 'grape']; // emptyもできる、末尾に,をつけられる
console.log(fruits);
fruits = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// 2つ目 3つ目, newを消したArrayとnewをつけたArrayは同じ動作になる。
fruits = new Array(1, 2, 3); //引数一つだけだとlengthになる、2つ以上で要素
console.log(fruits);
// 4つ目 Array.of(5) 引数が一つだけでも配列になる。

// スプレット構文
// 配列を展開するときに...が使える
fruits = ['apple', , 'banana', 'grape'];
const newFruits = [...fruits];
fruits.push('orange');
console.log(newFruits, fruits);

let sum = (...nums) => {
  console.log(nums);
};
let nums = [1, 2, 3, 4];
sum(...nums);

// 分割代入
const user = ['user', 20];
let [name, age] = user; // name = user[0]と同じ
console.log(name, age);

// 配列を変更するメソッドたち
// Array.prototype -> pushとか、ほとんど紹介する
let items = [0, 1, 2];
items.push(3, 4, 5); // pushの返り値はlength
items.pop();
items.unshift(-2, -1); // 先頭に追加
items.shift(); // popの先頭版 先頭に入れるとindexをずらす必要があるので、効率が悪い
// 配列のようなオブジェクトに対しても使える。

// console.log(items);

items = [0, 1, 2];
items.splice(2, 1, 4);
console.log(items);

items = [0, 1, 2, 3];
items.fill(0); // 第二引数、第三引数はstartとend
console.log(items);

items = [0, 1, 2, 3, 4];
items.copyWithin(0, 2, 4);

items = [0, 1, 2, 3, 4];
items.reverse();
console.log(items);

items = [0, 1, 2, 10, 4];
items.sort((a, b) => {
  return a - b;
}); // デフォルトは文字列に変換してから辞書順にソート
// console.log(items);

// 以下すべて、非破壊メソッド
let result;

items = [0, 1, 2, 3, 4];
result = items.slice(2);

items = [0, 1, 2];
result = items.concat([3, 4], 6);

items = ['a', 'b', 'c'];
result = items.join('-');

items = ['apple', 'banana', 'grape', 'banana'];
result = items.indexOf('banana'); // 最初にヒットしたもの, ===で判定。
result = items.lastIndexOf('banana');
result = items.includes('banana');

items = [0, 1, 2];
result = items.map((item) => {
  return item * 10;
});

items = [0, , 1, [2, [3, [4]]]]; // enmpyは削除される
result = items.flat(3);

items = [0, 1, 2];
result = items.flatMap((item) => {
  return [item, item * 10];
});

items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
result = items.filter((item) => {
  return item % 2; // これがtrueになるところを新しく作成する配列に入れる
});

items = [0, 1, 2, 3];
result = items.reduce((previousItem, item) => {
  return previousItem * item; // 第一引数の初期値が第二引数 0↓
}, 0);

items = ['apple', 'banana', 'grape', 'banana'];
result = items.find((item) => {
  return item === 'banana';
});
result = items.findLastIndex((item) => {
  return item === 'banana';
});

items = [0, 1, 2];
result = items.every((item) => {
  // すべてtrueならtrue,someは一とつあればtrue
  return item < 5;
});

items = ['apple', 'banana', 'grape'];
items.forEach((item, index, array) => {
  // 要素の数だけループする関数forEach
  console.log(this);
  console.log(items[index]);
});

items = ['apple', 'banana', 'grape'];
console.log(items.at(0)); // マイナスの値もできる
result = items.with(-2, 'oraneg'); // 要素の内容を変更したい。
console.log(result);

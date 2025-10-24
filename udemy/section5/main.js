// 関数
// 関数はオブジェクト

function add(a, b) {
  return a + b;
}
// console.dir(add);
// console.log(add.name);
// console.log(add.length);
// オブジェクト -> 関数はできない
// 内部的なプロパティで関数を定義している

// 関数式
// 宣言が必要なところでfunctionがあるときは関数宣言
// 式が必要なところでfunctionがある時は関数式
let sayHi = function hi() {}; // 名前付き関数式
sayHi = function () {}; // 無名関数
// console.dir(sayHi);

// 関数宣言と関数式の違い
// 関数式は定義より前には使用できない。

// メソッド
const person = {
  name: 'userName',
  func: function () {
    return 'hi';
  },
};
// console.log(person.func());

// アロー関数
// 無名関数の置き換え
// 1. 一つの式だけを返すときはfunctionと {}を消せる。
// 2. パラメータが一つのみ場合は()を消せる
// 3. thisの取り扱いが違う。
sayHi = function (name) {
  return `Hi ${name}`;
};
// sayHi = (name) => {
//   return `Hi ${name}`;
// };
sayHi = (name) => `Hi ${name}!`;
console.log(sayHi('userName'));

// -独自--------------------------------
// thisとは
// 関数の呼び出し方によって参照先が変わる特別なキーワード
const user = {
  name: 'Taro',
  sayName: function () {
    console.log(this.name);
  },
};
user.sayName(); // user.sayName()と呼んでいるので、thisはuserを指す。

function hello() {
  console.log('hello');
}
hello(); // thisはグローバルもしくはundefinedになる。

function Person(name) {
  this.name = name;
}
const p = new Person('Hanako');
console.log(p.name); // newをつけて呼ぶと新しく作られるオブジェクトがthisになる。

// アロー関数は自分自身のthisを持たない。
// 代わりに、宣言されたスコープのthisを引き継ぐ
const obj = {
  name: 'jiro',
  arrow: () => {
    console.log(this.name);
  },
};
console.log(obj.arrow()); // -> undefined
// 一見obj.arrowなのでthisはobjになる様に見えるが、arrow関数は定義された場所
// ここではグローバルのthisを持つ

// ---------------------------------

// default parameter
// 引数が多かった場合はエラーなしで無視される
sayHi = (message, name = 'User') => `Hi ${name} ${message}`;
console.log(sayHi('I like chocolate'));

// レストパラメータ ； 引数を配列として受け取る
// C言語の可変長引数 ...と似ているが、jsは動的型付けなので
// va_listとva_start,va_argを使わなくて良いのね。
let sum = (...nums) => {
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
};
console.log(sum(1, 2, 3, 4, 5));
// 2015年より前 argumentsを使う。

// コールバック関数 & 名前付き関数式と無名関数の違い
// debugの時名前付きだとわかりやすい
// エラー発生時は、関数おぶじぇくとのnameプロパティを見ている (上で見た // console.log(add.name); のこと)
let subtract = (a, b, callback) => {
  let result = a - b;
  callback(result);
};
subtract(10, 3, function showResult(result) {
  console.log(chocolate);
  console.log(result);
});

subtract(10, 3, (result) => {
  console.log(chocolate);
  console.log(result);
});

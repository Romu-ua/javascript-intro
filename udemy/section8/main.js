// オブジェクトの発展事項

// keyは文字列で管理しているので、keyに3.1は'3.1'となっている。
const interests = 'interests';
const person = {
  name: 'user',
  age: 30,
  greeting: function () {
    return 'hello';
  },
  const: 'const',
  'current city': 'tokyo',
  3: 3,
  3.1: 3.1,
  '-3': -3,
  [interests]: ['music', 'travel'],
};
console.log(person['greeting']());
// for in以外にもkeyを取得する方法
// 配列として取得
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// 表示される順番
// 数字は小さい順、他は定義された順

// プロパティの削除
delete person.age;
console.log(person);

// プロパティの省略記号
const name = 'Espresso';
const size = 350;
const coffee = {
  name,
  size,
};
console.log(coffee);

// スプレット構文
// シャローコピーなので、objの中のobjのアドレスは共有
// const coffee2 = coffee;
const coffee2 = {
  ...coffee,
  isHot: true,
  isHot: false,
  name: 'Late', // あとで宣言したものが上書きする
};
console.log(coffee2 == coffee);
console.log(coffee2);

// obj同士の合体
const o1 = {
  a: 1,
};
const o2 = {
  a: 2,
  b: 2,
};
const o3 = {
  a: 3,
  b: 3,
  c: 3,
};
const newO1 = Object.assign(o1, o2, o3);
// console.log(o1 === newO1);

// 分割代入
const book = {
  title: 'JavaScript course',
  price: 9.99,
};
// const title = book.title;
const { title, price } = book;
console.log(title, price);
// 関数の引数にも使える
const sayBook = ({ title, price }) => {
  // console.log(title, price);
};
sayBook(book);

// プロパティの有無を調べる
// console.log('title' in book);

// オプショナルチェーン ?.

// this
console.log(this);
let sayThis = function () {
  console.log(this);
};
// thisはオブジェクトに登録するとそのオブジェクトを指し示す
const car = {
  color: 'red',
  sayThis,
};
car.sayThis();

// メソッドの中にある関数呼び出しの引数がコールバック関数になっている時にthisを使いたい時。

// -独自 thisについて----------------------------------
// レキシカル環境(スコープ)は変数がどこまで見えるかを決めるルール
// thisは関すがどう呼ばれたかで決まる動的な値
// 混同しない

function f() {
  console.log(this);
}
f(); // グローバル

const obj = {
  x: 42,
  g() {
    console.log(this.x); // 省略記法 g: function () {}と同じ。
  },
};
obj.g(); // . の左側がthis
const h = obj.g;
h(); // 別の変数に代入すると消える

// 明示的バインディング
// 関数のthisをcall, apply, bindで指定したものにしている。
function f() {
  console.log(this.name);
}
const user = {
  name: 'Taro',
};
f.call(user); // Taro
f.apply(user); // Taro
const j = f.bind(user); // Taro, 以後はずっとuserに固定
j();

function Person(name) {
  this.name = name;
}
const p = new Person('Hanako');
// もしthisを使わずに、インスタンス化するとp.nameがundefinedになる。

// -------------------------------------------------

// thisを明示的に指定したい
// call, apply 引数の取り方が違う
// アロー関数はthisを持っていないので、グローバルのthisが表示される。
sayThis = function (a, b) {
  console.log(this, a, b);
};
sayThis.call({ hello: 'hello' }, 1, 2);
sayThis.apply({ hello: 'hello' }, [1, 2]);

// thisを固定したい。
// bind は新しい関数を作り出している
sayThis = sayThis.bind({ hello: 'hello' }, 1);
sayThis.call({ hi: 'hi' }, 1); // hiにはならない, 他の引数もがっつり固定

// メソッドにはfunctionで記述した方が良い
// functionを使った時のメソッドの省略記法
// const obj = {
//   x: 42,
//   g() {
//     console.log(this.x); // 省略記法 g: function () {}と同じ。
//   },
// };

// geterとsetterの話
const pastaCalculator = {
  servingSize: 60,
  member: 4,
  // total: this.servingSize * this.menubar これはできないので関数にする必要がある
  // total() {
  //   return this.servingSize * this.member;
  // },
  // get total() {
  //   return this.servingSize * this.member;
  // },
  // set total(newValue) {
  //   this.member = newValue / this.servingSize;
  // },
};
// console.log(pastaCalculator.total()); プロパティとしてアクセスしたいのに()がついているのはやだ
// これを解決する。
console.log(pastaCalculator.total);

// pastaCalculator.total = 200これを解決するのがsetter
// = 200をnewValueに設定できる。
pastaCalculator.total = 600;

// オブジェクトのプロパティはkeyとvalue以外にあと3つある
// keyと4つの属性からなるとも言える。
console.log(Object.getOwnPropertyDescriptor(pastaCalculator, 'servingSize'));

// 標準ビルトイン
// グローバルオブジェクトに入ってる

// プリミティブ値がオブジェクトのように呼ばれると
// プリミティブ値に対応した標準ビルトインをnewで呼び出す
let count = 1.23456;
let result = count.toFixed();
// new Number(count).toFixed();内部的にやっていること
let userInput = 'hello';
result = userInput.toUpperCase();
// new String(userInput).toUpperCase();
// console.log(result);

// number
result = (10).toString(16);
result = Number.parseInt('1010', 2); // 10進数にする。
// console.log(result);
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// 倍精度浮動小数点の最大値が1(sign)11111111110(exp)1が51個+0一個の数が上の数
// 整数の計算でNumber.MAX_SAFE_INTEGERが安全に計算できる最大の数
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(Number.isNaN(NaN)); // NaN === NaN => falseになるのでこれがある
// console.log(Number.isFinite(Infinity)); //同上

// mathオブジェクト

// BigInt型 ES2020
let bitInt = 12345n;
// console.log(typeof bitInt);

// Dateオブジェクト
let date = new Date();
// console.dir(date);
// console.log(date.getFullYear());
// console.log(date.getDay());
let some = new Date('2025-12-25T16:30:20.123+09:00');
// console.log(some.getDate());

// String
// 新しい文字列を作成するものしかない

// 正規表現
// \d: 任意の数字
// \s: スペース
// \w: 英数字_
// \D, \S, \W: 数字以外、スペース以外、英数字_以外 否定のイメージ
// \.s: 改行以外の全ての文字 , sフラグで改行に対応
// ^ : 先頭を意味する
// $ : 末尾を意味する
// {5}: 連続する回数
// + : 1つから何個続いても良い
// ? : あってもなくても良い
// * : なくてもあってもいくらあっても良い
// (hey)+
// | : どっちでも良い。
//[] : どちらか、[]の中は色々使えない [a-z]範囲指定
let regexp = new RegExp('apples', 'i'); // 'i' 大文字の区別をつけない
reqexp = /apples/;
result = regexp.test('I like apples');
regexp = /[-.\w]+@([-\w]\.)+[-\w]+/; // 基本はググる
result = regexp.test('test@gmail.com');
// console.log(result);

// 正規表現を使うメソッド 7つ
// regexpの中、 test exce,
// stringのメソッド、search, match, replace, split

// エラーオブジェクト
try {
  // chocolate; 存在しない変数内部的には↓ Errorのサブクラス
  throw new ReferenceError('chocolate is not defined');
} catch (error) {
  // console.dir(error);
}

// 直接メモリを書き換える
let buffer = new ArrayBuffer(16); // バイト
let array = new Uint8Array(buffer);
array[0] = 120; // 01111000
array[1] = 40; // 00010100
// array = new Uint16Array(buffer);
array[2] = 256; // 100000000 8binで表せない 超えた分は０として扱う
array[3] = 257;
// console.log(array);
// console.log(buffer);
// 8bitごとに区切って、リトルエンディアン
// ほとんどのプロセッサはリトルエンディアン

// intl, フォーマッター

// ES2025,Map = ほぼObject, keyとvalueで保存するのに特化
// keyにどんな型でも取れる、Objectは文字列として保存されていた。
let map = new Map([
  ['name', 'user'],
  ['age', 20],
  ['gender', 'man'],
]);
map.set('city', 'tokyo');
result = map.get('city');
// console.log(result);
// console.dir(map);
map.set(1, 1);
map.set(true, true);
// console.log(map);
result = map.size;
// console.log(result);

// set: 集合 ===演算子で比較
let set = new Set(['hello', 3, { name: 'uesr' }]);
set.add({ name: 'Jack' });
set.add('hello');
// console.log(set);

// weakmap、 weakset
// ガベージコレクション
// userNameにはObjectのメモリが入る。オブジェクトに到達できないときはObject本体は破棄される。
let user = { name: 'userName' };
user = null;

user = { name: 'userName' };
map = new Map();
map.set('user', user);
user = null;
console.log(map.get('user')); // Object本体に到達できるので破棄されない。

user = { name: 'userName' };
map = new Map();
map.set(user, 'Yoshipi');
user = null;
for (const item of map) {
  // console.log(map);
}
// keyをnullにしてもforで到達できるので、廃棄されない。
// weakMapで廃棄される
// weakMapはループ処理を持っていない。
// weakSetも同様の考え方

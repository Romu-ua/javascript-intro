// 変数
let count;
// console.log(count);
count = 30;
// console.log(count);

// 定数
const daysInWeek = 7;
// daysInWeek = 8;

// 演算
let additionResult = 2 + 5;
// console.log(additionResult);
let result = 0;
result = result + 10;
result += 10;
result++; // ＋１する前の値を返す
++result; // ＋１した後の値を返す

// 型
let number = 10; // 動的型付けなのね。
number = 32.42;
let string = 'hello!';
number = 'something';

const userName = `username`;
// userNam = stirng + userName;
string = `Hello ${userName}`; // f""と同じ感じが``
string = "'こんにちは！'";
string = "'こんにちは\\'"; // エスケープ
stirng = 'Hello \n Hello';
string = `user
Hello!
`; // ``便利

// '10' + 10 だけ数字を文字列として認識して '1010'となる
// それ以外は'10'を数字として判断
// 'hello' + 10はNaNになる。
// キャストはNumber(), perseInt(), perseFloat(), +
// String(), toString(), がstingキャスト
// console.log(+'10' + 10); // +一つだけでいいのすご

let boolent = true;
boolent = false;

let array = ['apple', 'banana', 'grape'];
array = [1, 2, 3, 4];
array = [true, 1, 'apple'];
array = ['apple', 'banana', 'grape'];
console.log(array[0]);
array.push('apple');

// プロパティと呼ぶ。nameプロパティとか呼ぶ
const coffee = {
  name: 'Chocolate Mocha',
  size: 350,
  nutritions: {
    colorise: 430,
  },
};

console.log(coffee.name);
console.log(coffee.nutritions.colorise);
coffee.barista = 'username';

// null と undefinedの違い
// undefinedは暗黙的に使われる.nullは明示的に使う。
// undefinedはエラーの意味を表す。nullは予定調和的に何もないを意味する。
let userInfo = null;
userInfor = undefined;

// typeof演算子
// typeof {name: 'username} -> object
// typeof [1, 2, 3] -> object
// typeof undefined -> undefined
// typeof unll -> object !?

// 関数 最後にセミコロンはつけない。
// functionだと、プロトタイプ宣言は必要ない。
// エンジンで関数が上に持っていかれる
function add(num1, num2) {
  console.log(num1 + num2);
  return num1, num2;
}
// エラーにならないのか。
// undefinedが渡される。 -> Nanになる
add(2);
const returnValue = add(2, 3);
console.log(returnValue); // return; はundefinedが返る、returnがない時は暗黙的にundefinedが返る

// スコープ
// 上位のスコープは参照できる。いつものスコープと同じ考え方
// グローバルスコープ => グローバル変数 特定のスコープ -> ローカル変数
// 関数スコープとも呼ぶ。ブロックの内側だとブロックスコープとも呼ぶ
// 名前が同じなら、ローカルが優先される。シャドーイング
function add2(num1, num2) {
  const value = num1 + num2;
  return value;
}

// コメント
// /* */, /** */
// つけるべきではないところ：明らかなところ、コメントに頼りすぎで関数名が適当だとだめ。
// つけるところ：他の人が呼んでわかりずらいところ。今回は学習用なので見逃してもらって。
add(1, 2);

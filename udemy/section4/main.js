// 条件分岐
let ok = false;
let mabyOk = false;
if (ok) {
  console.log('OK!');
} else if (mabyOk) {
  console.log('mabyOK!');
} else {
  console.log('NO!');
}

// === 同値演算子 :
// == 等値演算子: 型の制約が緩い '1' == 1 -> true これはあまり使わない。予期せぬエラーが発生する可能性。

// 同値演算子ではプリミティブ値は値の比較、オブジェクトは参照の比較
// = は参照の値をコピーしている。

// オブジェクトなのでリストもfalseになる。
ok = 1 === 2;
ok = 1 !== 2;
ok = 1 == 1;
console.log(ok);

const coffee1 = {
  name: 'Cafe Latte',
};
const coffee2 = {
  name: 'Cafe Latte',
};
ok = coffee1 === coffee2;
// const test1 = 'hello';
// const test2 = 'hello';
// ok = test1 === test2;
console.log(ok); // -> false

// truthy, Falthy
// Falthy -> 0, -10, 0n, "", null, undefined, Nan、これ以外はTruthy。
// 短絡評価 デフォルト値の設定で以下の書き方は見かける
const userInput = '';
const userName = userInput || 'User';
console.log(userName);

// null合体演算子
// expr1 が null または undefined のとき → expr2 を返す
// それ以外のとき → expr1 を返す
// || や && と一緒に使えない。
// userName = '' ?? 'User';

// !!xで型変換としても使える。

// 式、文
// 実践的には、式は値になるものは式と考えれば良い。

// 三項演算子 okがtureで左側の値が変える
ok = ok ? 'OK' : 'NO';

// switch文
function vegetableColor(vegetable) {
  switch (vegetable) {
    case 'tomato':
      console.log('tomato is red!');
      break;
    case 'pumpkin':
      console.log('pumpkin is orange!');
      break;
    case 'onion':
      console.log('onion is white!');
      break;
    default:
      console.log('default');
  }
  // if (vegetable == 'tomato') {
  //   console.log('tomato is red!');
  // } else if (vegetable == 'pumpkin') {
  //   console.log('pumpkin is orange!');
  // } else if (vegetable == 'onion') {
  //   console.log('onion is white!');
  // }
}
// vegetableColor('tomato');

// 繰り返し文
let count = 0;
while (count < 10) {
  // console.log(count);
  count++;
}

let tomatoCount = 100;
do {
  console.log(tomatoCount);
  tomatoCount++;
} while (tomatoCount < 10);

for (let count = 0, i = 0; count < 10, i < 5; count++, i += 2) {}

const fruits = ['apple', 'banana', 'grape', 'orange', 'mango'];
// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// constになる。毎回変数を削除して作成し直しているイメージ
// iterableなものだけ。
// 配列はiterable, 辞書型はiterableではない。
// pythonでいう、for inみたいなもの
for (const fruit of fruits) {
  // console.log(fruit);
}

let coffee = {
  name: 'Caffe Latte',
  size: 350,
  isHost: true,
};
for (const key in coffee) {
  console.log(key);
  // console.log(coffee.key); これはcoffeeオブジェクトにkeyがあると解釈される
  console.log(coffee[key]);
}

for (const key in coffee) {
  if (key == 'size') {
    console.log('continue!');
    continue;
  }
  console.log(key);
  console.log(coffee[key]);
}

// ラベル文, breakとcontinueと一緒に使う
hello: {
  break hello;
}

// のようにネストされている時に、一番外に抜けたいときに用いる。
// あんまり使わないけど。
// coffeeCondition: if (true) {
//   for (const key in coffee) {
//     if (key == 'size') {
//       console.log('break!');
//       break coffeeCondition;
//     }
//   }
// }

// エラー処理
// 実行時エラーのみcatchできる。構文エラーは無理。
try {
  console.log(chocolate);
} catch {
  console.log('1');
}
console.log('hello');

// finallyはreturnが来ようが、絶対に実行される
// continueとかbreakとかでも表示される。
function logChocolate() {
  try {
    console.log(chocolate);
    return;
  } catch {
    console.log('catch');
  } finally {
    console.log('finally');
  }
}

logChocolate();

// throw文 エラーを作成する。
// throw 'error';
try {
  console.log('try');
  // throw 'error';
  console.log(chocolate);
} catch (error) {
  console.log('catch', error);
  // console.log('catch', error.name, error.message);
}

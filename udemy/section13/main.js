// jsを使ってブラウザを操作する方法

// web apisとは？
// alertもapiの一つ：複雑な内部構造を意識せずに使えるインターフェイス

// alert, confirm, prompt デバック用
// alert('hello');
// let result = confirm('are you sure?');
// let result = prompt('name', 'default name');

// navigator, screen
// デバイスや画面の情報取得

// location
// ページの移動

// history
// .length 履歴の数。

// url
// urlを解析する, searhParam
let url = new URL('https://developer.mozilla.org/ja/');

// setTimeout, setInterval
// setTimeout以降のコードが全て実行されてから中のcall back関数が実行される
let id = setTimeout(() => {
  console.log('hello');
}, 0);
console.log('apple'); // 先にappleが出る
console.log(id);

// MDN docs
//

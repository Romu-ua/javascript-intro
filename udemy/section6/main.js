'use strict'; // 2行目以降は無視される。

// jsの内部の解説

// グローバルオブジェクト
// console.log(globalThis);
// globalThis.apple = 'apple';
// console.log(globalThis);
// console.log(apple);

// varなど
// 1. 同じ変数を宣言できる
// 2. スコープが外部でも使える,関数の内部ではスコープの制限がある
// 3. グローバルオブジェクトの一部になる
// 4. varは先頭にくる、ホイスティング
var hello = 'hello';

// 関数宣言とvarは似た性質がある
// functionも同じ名前で宣言できる
// 関数宣言もグローバルオブジェクトの一部になる。
// ホイスティングは、初期値ごと巻き上げられる。ここが違う
function sayTomato() {}
console.log(globalThis);

// primitive, object(reference)

// ガベージコレクション

// ファイルの分割
// import文とexport文

// moduleとscript
// ブラウザでもnode.jsでもデフォルトではscript
// moduleを使いたい時は.htmlにtype="module"を記述、ブラウザの時はhttp-server用いる
// node.jsの時はtype: "module"を指定する => node main.js

// node.jsでも
// import { A } from './A.js';
// console.log(A);

// moduleとscriptの５つの違い
// 1. moduleではデフォルトでstrictモードになる 'use strict'
// 2. 一番外のthisの動き：moduleの場合はundegindedになる。普通はグローバルオブジェクトになる
// 3. 他のファイルからファイル内の変数にアクセスできない
// 4. 同じ関数宣言はエラーになる
// 5. asyncを書かずにawaitをかける；関数の中では依然として使えない。

// ブラウザにおけるmoduleとscriptの５つの違い
// 1. type="module"の時はデフォルトでdeferがつく
// 2. htmlでscriptタグの中にtype=moduleを記述していれば, deferやasyncが使える
// 3. htmlのscriptが２つ以上あるとき、moduleを記述していてそのsrcが同じ時は内容は１回しか実行されない
// 4. CORSが実行される
// 5. nomodule モジュールがない時代のブラウザの時に実行される。moduleが理解できるブラウザでは無視される

// 名前付き(後述,名前をつけてimportしているから)
// import文 export文
// 変数をインポートしたらconstとして扱われる

// import { letA as lA, funcA } from './A.js';
// console.log(lA);
// let letA = 'hello';
// console.log(letA);
// funcA();

// *は可読性の問題から{}を使って明示的にimport する
// import * as A from './A.js';
// console.log(A);

// デフォルトimport / export
// import A from './A.js';
// import A, { letA } from './A.js';
// console.log(A, letA);

// 実行順 解析時に決定
// A.jsが先に実行されてmain.jsが後に実行される
// import の上に変数があっても動作する、どこにおいても良い。

// ファイルを実行したいとき
// データは取得しないが実行だけされている。
// import './A.js';

// A.jsにB.jsがあるとすると、B.jsの出力が一番上に来る
// ファイルを木構造にして、帰りがけ順
// 同じファイルが複数回importされている時、2回目以降のは無視されて木構造になる
// ファイルが循環しているとき、祖先、自分自身の矢印は無視される
// import './A.js';
// import './C.js';
// console.log('main.js');

// ポインタが共有（メモリの番地が共有）
// importされるファイルで変数が変更されたら呼び出す側で値が変わってしまう。
// 循環参照しているときは、変数にアクセスしようとしたらエラーになる
// 初期化される前にアクセスしたらエラーになるが、初期化されていればエラーにならない
// つまり、実行される前に初期化されるもの->関数宣言
import { letA } from './A';

// importするファイルを指定する様々な方法
// ``はできない、''か""
// url, 相対url。type=importmap
// 動的import
// 解析時には実行されない。式が評価されたときにファイルが解析される
// promiseを返す、resultはimport *したもの
if (trur) {
  const result = import('D.js');
  console.log(result);
}
// 必要な時に必要な分だけインポートできる
// 循環しているときはトップレベルawaitは使わない。

// withでjsonをimport

// commonjsではscriptとして解釈される
// ファイル全体を包む関数を用意して別のファイルで呼び出す。
// つまりグローバルがなくなる。
// 一番外の関数はexports, require, modeule, __filename, __dirnameを引数として受け取る

// commonjsにおけるファイルの実行順

// moduleとcommonjsと一緒に扱えないのか？
// .cjs、.mjs type=に関係なく、cjsはcommonjs, mjsはmoduleとして扱われる

// nodejsにおけるimport文の右側
// ブラウザと同じ, url, 相対url, フォルダを指定できる(index.jsをimportしようとする)

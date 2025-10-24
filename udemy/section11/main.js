// 他のエンジニアの手助けするための技術
// 多くの技術は知らなくても良いかも
// 他の人が作成したツールを使うときに正しく読めるために必要な知識

// Proxy
// オブジェクトや関数への操作を横取りできる仕組み
// バリデーション、ログ、仮想プロパティの実現、デフォルト値の設定、動的な挙動の実装などで使う

// Reflect API

// Symbol : 他と被らない値
// プリミティブ
// シンボルが登場した理由
// 後方互換性を保つためにこれが作成された
let symbol = Symbol();
let symbol2 = Symbol();
console.log(typeof symbol);
console.log(symbol === symbol2);
console.dir(Symbol);

// iterable
// [Symbol...]以降の構造を持つオブジェクトをiterableという
obj = {
  a: 'a',
  b: 'b',
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: 1,
          done: true,
        };
      },
    };
  },
};
// for ofループは配列をとっていた
// objがiterableである必要がある。

// ジェネレーター
// 簡単にイテレータを作成するもの
function* generatorFunc() {
  yield* [-2, -1, 0, 1];
  yield 2;
  yield 4;
  yield 6;
}
let iterator = generatorFunc();
console.log(iterator);

// Iteratorというクラスが追加
// Iterator.prototypeがある。

// タグ付きテンプレート

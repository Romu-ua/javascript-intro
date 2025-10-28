function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer();
fn();
fn();

/**
 * 「関数を定義する時点」で、自分が作られたスコープ(外側環境)への参照を覚える
 * 「関数を実行する時点」で、新しいスコープが作られ、その中から外側環境(親スコープ)を辿れるようになる。
 *
 * 1.outer()を呼ぶと、outerのスコープが作られる。
 * 2.innerはこのスコープを「外側環境として補足」
 * 3.outerの実行が終わっても、innerがまだ生きているためcountの入った
 *  スコープもガーベジコレクションされず残る。
 */

// DOMを操作する方法

// html, head, bodyを取得する方法
let result = document.documentElement;
reuslt = document.head;
result = document.body;
// console.dir(result);

// 親子間のノードを取得する
result = document.childNodes;
result = document.body.childNodes;

// 親子間の要素を取得する。
result = document.body.children;

// 特定の要素を取得する方法
// 一つだけ querySelector, 全て　querySelectorAll()
result = document.querySelector('#title');
result = document.querySelector('p'); // 全ての子孫の
result = document.body.querySelector('p'); // bodyの中だけ
result = document.body.closest('p'); // 祖先ノードもしくは自分の中で一番近いもの

// そのほかの要素を取得する方法
// querySelector|Allだけで代用できる
// id=はグローバルに登録されるglobalThis.titleでアクセス。あまり使用しないように。
// linnks, formsなど

// DOMを変更する方法

// 方法１ : 文字列で変更する
// ReactではDOMを直接変更しないのが特徴になる。その比較として以下の知識が役に立つかもしれない
result = document.body.innerHTML; // getter あまり使わない
document.body.innerHTML = '<h1>Hello!</h1><div>I am tom</dim>'; // setter 全て入れ替える
// XSS,innerHTMLやinsertAdjacentHTMLはセキュリティホール, 一応<script>タグは動かない様になっている。
// let userInput = '初めての投稿！<script>alert</script>';
// let userInput = '初めての投稿！<img src = "" onerror="alert(`悪質な内容`)"/>'; // この様にすると抜けられる
// document.body.innerHTML = userInput;

// テキストを変更する方法
result = document.body.textContent; // getter
result = document.body.childNodes[1].textContent;
document.body.textContent = 'hello'; // setter
document.body.textContent = '<h1>hello</h1>'; // タグも文字列として扱うので問題ない

// 方法２：createElementを用いる, 1.nodeを作る 2.domツリーに挿入する
let p = document.createElement('p');
let text = document.createTextNode('text');
document.body.innerHTML = '<div>I am tom</dim>'; // htmlをリセット
p.textContent = 'hello';
document.querySelector('div').append(p); // prepend(), before(), affter(),
document.querySelector('div').prepend(p); // 全く同じものはdomツリー上に一つしか存在しない

// 取得してきたノードについての情報を詳しくみる
result = document.body.nodeType;
result = document.body.nodeName;

// html属性 id、classNameはあるがほかの要素は以下で見れる
result = document.body.attributes;

// 安全に独自の属性を使う方法
// 現在の仕様書が変わって、属性を意味のある属性になる可能性がある
// data-から始まる属性は追加しないと記述されている
result = document.body.attributes;
result = document.body.getAttribute('data-myattr');
result = document.body.dataset.myattr; // datasetでdata-から始まる属性を取得できる

// デザインの変更
// CSS => CSSOMに変換 => DOMとCSSOMで描画
// DOMを操作

// 1.クラスを操作する方法
document.body.innerHTML = '<p class="text-green bg-yellow"> hello </p>';
result = document.querySelector('p').className;
document.querySelector('p').className = 'text-red bg-blue';
result = document.querySelector('p').classList;
document.querySelector('p').classList.remove('bg-blue', 'text-red');
document.querySelector('p').classList.add('bg-blue', 'text-red');
document.querySelector('p').classList.toggle('bg-blue', 'text-red');

// 2.styleを操作する方法
result = document.querySelector('p').style;

// 要素の座標と長さを取得する
// 要素の位置はcssなのでjsでは使わない。取得することはできる
// getBoundingClienRectは表示している画面から計算されている
document.body.innerHTML = '<div class="box"></div>';
result = document.querySelector('div').getBoundingClientRect();

// 位置から要素を取得することもできる
// 要素をもっと詳細に取得 client*

// 画面全体の情報を操作する方法
// 画面のスクロール pageYOffset, scrollTo, scrollIntoView

// live, static
// そのオブジェクトが最新の状態になっているのか、live:最新になっている

// 知っておくと便利なDOM
// sgv, canvas, mutation observer

console.dir(result);

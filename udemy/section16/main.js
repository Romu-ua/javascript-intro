// イベント
// 1. プロパティを使う
// 2. adeventlistenerを使う

const button = document.querySelector('button');
// 2つ以上のイベントを追加できない
button.onclick = () => {
  alert('click!');
};

// 複数のイベントを登録できる
button.onclick = null;
const clickListener = () => {
  console.log('clicked again! from addEventListener');
};
button.addEventListener('click', clickListener);

// イベントの詳細な情報を取得する
// ボタンをクリックした時の詳細な情報をブラウザ側が渡してくれる
// eventオブジェクト
button.addEventListener('click', (event) => {
  console.log(event);
});

// イベントハンドラーのthis
button.addEventListener('click', function (event) {
  console.log(this); // 要素を示す
});

// バブリング
// 子要素で発生したイベントが、親要素さらにその上に伝播していく仕組み
// どこから始まるのか？
// event target 仕様書を見る keybord evenだとbodyから始まる。
const input = document.querySelector('input');
input.addEventListener('input', () => {
  console.log('input from input in the target phase agein');
});
document.body.addEventListener('input', () => {
  console.log('input from body');
});
document.addEventListener('input', () => {
  console.log('input from document');
});
window.addEventListener('input', () => {
  console.log('input from window');
});

// キャプチャリング 第3引数にtrueを設定するとキャプチャーフェーズで表示される
input.addEventListener(
  'input',
  () => {
    console.log('input from input in the target phase');
  },
  { capture: true }
);
document.body.addEventListener(
  'input',
  () => {
    console.log('input from body in the capture phase');
  },
  { capture: true }
);
document.addEventListener(
  'input',
  () => {
    console.log('input from document in the capture phase');
  },
  { capture: true }
);
window.addEventListener(
  'input',
  () => {
    console.log('input from window in the capture phase');
  },
  { capture: true }
);

// stopPropagationでバブリングやキャプチャリングを止められる
// 同じ要素についているイベントは止まらない。

// preventDefaultでブラウザのデフォルトのイベントを止められる
const aEL = document.querySelector('a');
aEL.addEventListener('click', (event) => {
  event.preventDefault();
});

// passive プロパティ
// 先にデフォルトの処理をしておく
// スクロールなどしかpassiveを設定できない。
// evnet.preventDefault()はpassiveと一緒に使えない。
document.documentElement.style.height = '1000px';
window.addEventListener(
  'wheel',
  (event) => {
    for (let i = 0; i < 1e9; i++);
    console.log(event);
  },
  {
    passive: true,
  }
);

// 独自のイベントを作成
// バブリングはしない
const myEvent = new Event('my-evnet');
document.dispatchEvent(myEvent);

// ブラウザがhtmlを受け取った後の流れ
// bodyタグの一番下に配置するとDOMの構築が終わった段階でmain.jsがダウンロードされる
// DOMの構築と並行で行なってほしい
// deferタグを作成する。
// こうするとheadの中でできる。

// 知っておくと便利なイベント
// mouse系、clickイベント(左クリック)、
// touch系、スマホ
// pointer系、mouse系はこちらで置き換えられる
// keydown系、
// scroll系、intersection observerapiを使ったほうが効率的
// blur

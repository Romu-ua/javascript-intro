// http通信
// jsからhttp通信
// fetch('https://jsonplaceholder.typicode.com/todos/1', {
//   method: 'POST',
//   headers: {
//     // Accept: 'text/plain',
//     'Content-Type': 'text/plain',
//   },
//   // body: new ArrayBuffer(16),
//   body: 'hello',
// });

// let json = 'null';

// ファイルを送信する blob
// URLオブジェクトを使えばblobからurlを作成できる
// URLのrevokeObjectURLでリンクを外す。ガーベージコレクションゆえ
// 画像がロードされた時にrevokeするのが良い方法
// let input = document.querySelector('input');
// input.addEventListener('change', () => {
//   let file = input.files[0];
//   console.log(file);
// });

// 複数種類のデータを送信する方法
// multipar/form-data mimu-type
// let formData = new FormData();
// formData.append();

// fetchでレスポンスを受け取る方法
// fetchはpromiseを返す。
// いつresolveされるのか？-> headerの情報を受け取った時.なのでbodyは受け取れていない。
(async () => {
  let response = fetch('https://jsonplaceholder.typicode.com/todos/1');
  // result = await response.arrayBuffer();
  console.log(response);
})();

// CORS(Cross-Origin Resource Sharing) セキュティ対策 : 情報の漏洩、情報の改竄
// そもそもオリジンとは？ オリジン = URLのスキーム + ドメイン + ポート番号
// https://example.com:443 と http://example.com:80は別オリジン
// ブラウザは自分のオリジンと違うオリジンのサーバーには自由にアクセスできない
// そこで、CORS => サーバーがこのオリジンからのアクセスを許可していいよ、と教えてくれる仕組み
// Access-Control-Allow-Origin: https://myapp.com
fetch('https://developer.mozilla.org/ja/');

// 通信の便利機能
// body ダウンロードの進捗状況
// signal fetchの中断とか
// xmlhttprequest, fetchと同じ、promise使わないので使いずらい
// server-sent
// websocket httpを使わない

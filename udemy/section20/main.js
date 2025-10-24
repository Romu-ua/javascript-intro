// ブラウザにデータを保存する方法
// ローカルストレージ、Cookie、index.db

// ブラウザを閉じてもデータを保存

// 1.ローカルストレージ
// 文字列しか保存できない
// localStorage.setItem('name', 'Smith');
// let result = localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

// sessionStorage.setItem('name');
// result = sessionStorage.getItem('name');

// 何が違うのか？データの存在期間が違う
// sessionの時はタブが消えたら消える。
// localstrageは消えない。
// つまり、一つのタブの中に存在するのがsessionStorageと言える

// localstrageはオリジンが同じ時、データは共有できる
// storage eventで変更を検知

// 2. Cookie
// keyがnameでvalueがJohnを保存できる
// file:プロトコルではうまく動かない
// ホストごとにCookieは保存している
// ポートなどは関係ない

// document.cookie = 'name=John';
// result = document.cookie;

// 属性という考え方がある
// 保存期間 max-age, expires (Dateのdate.toUTCSstginを設定),
// path,cookieを共有パスを指定する。
// domain サブドメインmozulla.orgを指定すると、developer.mozulla.orgでも共有できる
// secure、 スキームがhttpsの時にしか保存されない。
// cookie-headerとset-cookie header
// httponly, jsからは使用できなくなる
// samesite, CSRF(XSRF)
// encodeURIComponet(), ;を文字列で扱える
document.cookie = 'name=John; max-age=3';

// 3. indexedDB
// オリジンごとに記録できる
// 高度で複雑
// keyに複数のvalue, オプジェクトストア
// createObjectStoreで作成
// tranzaction, objectStoreで
// putで登録、getで取得

let openRequest = indexedDB.open('shop'); //
// openRequest.result;
openRequest.addEventListener('success', () => {
  openRequest.result;
  console.log('success');
});

// transactionは途中でエラーが発生したら全てを無かったことにしている。
// 成功したらcomplete、失敗したらabortを返すイベントが発生する
// transactionは終了したら廃棄されるので、これは一連の処理をするための使い捨てのオブジェクトと考えられる
// add(), ほぼputと同じ。指定したkeyがすでにある場合はエラーになる。
// putは更新or追加,addは追加のみ
// addはerrorのイベントが発生している。

// putする時のkeyについて
// createObjectするときにautoIncrementを設定するとことでkeyを自動的に設定できる
// keyPathでもできるが、オブジェクトしか入れられなくなるのでちょっと使いずらいかも

// データを一気に取得する方法, key範囲指定
// getAll(IDBKeyRange.bound(1, 4))境界を含むかどうかは第３、4引数にtrue, trueは境界を含む

// key以外の別のプロパティを使ってデータを取得

// ループ処理
// getAllで配列で取得できるが、いきなりデータをループするcursorがある
// openCursor

// upgradeneeded、データベースを最初に作成する時にしか発生しないが不便。
// versionという概念があるので、バージョンを上げればupgradeneededが発生する
// 最初に作られた時はversion1として作成される
// versionが変わったら、addEventListnerでversionchandedイベントが発生する。

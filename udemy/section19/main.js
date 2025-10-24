// node.js とnpm

// node main.jsでnode.jsが実行する
// console.log('hello');

// グローバルオブジェクト
// node.js独自のオブジェクト process
// console.log(process.argv);

// npmとは、node.jsのパッケージマネージャー
// インストールされるバージョン
// そもそも MAJOR.MINOR.PATCHになる。
// メジャーバージョン.マイナーバージョン.バッチバージョン
// ~ はメジャーバージョンとマイナーバージョン固定
// ^ はメジャーバージョン固定

// 完全にバージョンを一致させたい時はnpm ciでpackage-lcok.jsonを見てインストール
// ある程度緩い制約で良いのなら、npm installでpackage.jsonを見てインストール

// http-serverを使ってみる
// ./node_modules/.bin/http-server
// コマンドを簡単に実行するためにpackage.jsonにscriptsというのがある
// npm run hsで登録したコマンドが実行できる
// scriptの左側がtest, start, stop, restartの時はnpm run oo のrunが必要なくなる

// npxコマンド
// npx http-serverなどインストール済みパッケージを簡単に実行できる
// 存在しないパッケージの時は使い捨てでインストールされる.pcの環境を汚さない
// -gでインストールするとグローバルにインストールされる
// --save-devでインストールすると、devDependenciesに記録される。
// ほぼ変わらないが、環境依存でインストールするとき

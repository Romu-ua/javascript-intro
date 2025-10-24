開発の効率を上げる 3 つの方法
vscode, デバック、ドキュメント

ショートカット(私があんまり使わないが重要なもの)：
削除 ⌘ ＋ W
カット ⌘ + X
行を上に下にコピー：⌥ + ⇧ + ↑↓
エディタを移動: ⌘ + ⌥ + ←→
ショートかっと一覧：⌘ + K + ⌘ + S

インテリジェンス：  
補完：
コマンドパレット suggest
⌥ エスケープ、
コントロールエスケープ
関数のパラメータヒント：
コマンドパレット parmeter
⇧ ⌘ Space

デバッグの方法：
エラーメッセージを正しく読む

1. print デバック (console.log(), .error(), .warn())
2. chorm devTool (step over, step into, step)
   step over は関数の中には入らない。
   step into は関数の中に入る
   step は歴史的な残骸？
   step out は関数から出る。
3. debgger 文

4. vscode ブレークポイント
   chorome を選択、.vscode の launch.json 内のリンクの部分を html ファイルを開いたときの url にする
   js に関しては chrome devtools の方が使いやすいと思われる。

ドキュメント、調べ方.  
ecma international 参照しない。  
mdn web docs 最も有名なドキュメント.

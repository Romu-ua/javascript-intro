// prototypeとクラス
const obj = {
  a: 1,
  b: 2,
};
// console.log(obj);

// クラス: パスカルケース
// 似たようなオブジェクトを作りたい時の設計的な理解

// 1. ファクトリ関数
// クラスの説明でファクトリ関数から入るのめずらし。
const UserFactory = (name, age) => {
  return {
    name,
    age,
    greeting() {},
  };
};

// const user1 = UserFactory('userName1', 30);
// const user2 = UserFactory('userName2', 31);
// const user3 = UserFactory('userName3', 32);

// newとコンストラクタ関数
// アロー関数はコンストラクタ不可
// コンストラクタとは、オブジェクトを生成するためにnew演算子と一緒に呼び出せる関数のこと
// 内部的には、[[Construct]]という隠しメソッドを持つ関数オブジェクト
const UserConstractor = function (name, age) {
  // this = {} (newを使った時の挙動)
  this.name = name;
  this.age = age;
  this.greeting = function () {};
  // return this
};

// const user1 = new UserConstractor('userName1', 30);
// const user2 = new UserConstractor('userName2', 31);
// const user3 = new UserConstractor('userName3', 32);

// コンストラクタの内部
// 内部的には以下２つの作り方は全くの同じ
let o = new Object({ hi: 'hi' });
o = {};
// console.log(o);

// なので、以下の様にするとこれから作成されるすべてのオブジェクトにhelloが存在することになる。
// Object.prototype.hello = 'hello';

// class構文
// コンストラクタ関数は関数として用いられるのか、コントラクタとして用いられるのかわからない。
class User {
  #age = 0;
  constructor(name, age) {
    this.name = name;
  }
  greeting() {}
  post(newValue) {}
}
const user1 = new User('userName', 30); // newを絶対つける。
// console.dir(user1);
// console.log(user1.#age);

// 本質的には関数オブジェクトと同じ。
// classはfunctionをベースにしたsyntactic sugar + 新仕様
// つまり、クラスはコンストラクタ関数の上位互換
// 厳密には[[IsClassConstracutor]] istureとかがあるので、User()としては使えない。newが必要。

// クラスの中身は省略記法のメソッドしか書けない。
// コンストラクタ関数で記述した、this.name,やthis.ageのところに対応している。

// classでgetterやsetter
// メソッドの前にgetやsetをつけるだけ

// staticキーワード
// User直下に関数が入る
// 普通はUser直下のprotorypeの下に関数が入る
// なので、user1.greetingとはアクセスできずに、User.greetingとアクセスする様になる。

// プライベートフィールド
// 文字列として#ageを設定すると、プライベートにならない。

// 継承
class Animal {
  age = 0;
  constructor(age) {
    this.age = age;
  }
  eat() {
    console.log('eat from Animal');
  }
}

class Bird extends Animal {
  name = 'bird';
  constructor(age, name) {
    super(age);
    this.name = name;
  }
  eat() {
    super.eat();
    console.log('eat from Bird');
  }
  fly() {}
}

const bird = new Bird(3, 'pi');
console.log(bird);
bird.eat();

// extendsの具体的な動作3点
// Bird.__proto__ = Animalにしている。 Bird.__proto__ == Animal -> true
// Bird.protorype.__proto__ == Animal.prototype -> true
// [[ConstructorKind]]: "derived"

// super()
// super.について : オーバーライド

// 継承はis - aの関係
// コンポジションはhas - aの関係

// javascriptは元々関数型にちかい言語なので、OOPのpythonと違って
// コンポジションの方が推奨されている

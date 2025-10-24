// 環境レコード (レキシカル環境)

// クロージャー
// 関数が自分の外側のスコープにある変数を捕まえて保持する仕組み
function makeCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
// makeCounterが終了してもcountが破棄されない
// counterがcount変数を閉じ込めて保持している => クロージャー

// pythonのクロージャー
// def make_counter():
//   count = 0;
//   def inner():
//     nonlocal count # ← 外側の変数を修正するには nonlocal
//     count += 1
//     return count
//   return inner
// counter = make_counter()
// print(counter())
// print(counter())

let fruits = 'apple';
let sayFruits = () => {
  console.log(fruits);
};
fruits = 'banana';
sayFruits();

// プライベート変数
// クロージャーをつかって+1ずつしか変更できない変数を作ったと見える

// let generatePerson = () => {
//   return {
//     name: 'userName',
//     age: 0,
//   };
// };
// const user = generatePerson();
// user.age = 30; //この様にいきなり変更できてしまう。
// console.log(user.age);

let generatePerson = () => {
  age = 0;
  return {
    name: 'userName',
    getAge: () => {
      return age;
    },
    incrementAge: () => {
      age += 1;
      return age;
    },
  };
};
const user = generatePerson();
console.log(user.getAge());
user.incrementAge();
user.incrementAge();
console.log(user.getAge());

// 即時実行関数
counter = (() => {
  let count = 0;
  return () => {};
})();

// 再帰
let factorial = (n) => {
  if (n == 0) return 1;
  return n * factorial(n - 1);
};
factorial(3);

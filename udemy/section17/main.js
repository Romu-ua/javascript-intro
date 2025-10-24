// 非同期処理
// web api側のC++側の処理とjs側の処理で成り立っている

// やってほしい処理伝える方法としてcall back関数を使ってきた
// setTimeout(() => {
// console.log(2);
// }, 1000);
// console.log(1);

// しかし、ball back関数には「コールバック地獄」「エラー処理」の問題がある

// コールバック地獄
// window.addEventListener('click', (e) => {
//   console.log(e);
//   setTimeout(() => {
//     console.log('setTimeout');
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position);
//       setInterval(() => {
//         console.log('setInterval');
//       }, 1000);
//     });
//   }, 1000);
// });

// 非同期のコードだとtry catchでキャッチできない
// c++側でエラーが発生したらキャッチできない     |  できるが非常にめんどくさい
// try {
//   setTimeout(() => {
//     throw new Error('error');
//   }, 1000);
// } catch (error) {
//   console.log(error);
// }

// Promise 第一引数にコールバック, new Promiseされたタイミングでコールバック関数が動作
// let promise = new Promise((resolve, reject) => {
// resolve('hello');
// reject('error');
// thorw 'error';
// 内部的にtry catchで囲んでくれる
// try {
//   throw 'error';
// } catch (error) {
//   reject(error);
// }
// console.log('new promise!');
// });

// promiseは内部的にPromisestateとPromiseresultを内部プロパティとして持っていて、
// stateは何も実行されていない時はpendding、resolveがあるときはfulfilled, rejectの時はrejectedになる

// then, catch, finally
// finally : fulfilled, rejected両方
// then : fuliflledの時
// catch : errorの時

// 最初はpendding、1s後にresolve
// let promise = new Promise(() => {});
// promise = new Promise((resolve, reject) => {
// setTimeout(() => {
//   resolve('hello');
// }, 1000);
// setTimeout(() => {
//   reject('error');
// }, 1000);
// });

// 内側のpromiseがfulfilledになったら外側のpromiseもfulfilledになる
// resolveの中にthenメソッドを持っているオブジェクトがあると上記の様な動作になる
// (thenableオブジェクトという)
// let promise = new Promise((resolve, reject) => {
//   let tmpPromise = new Promise((resolve2) => {
//     setTimeout(() => {
//       resolve2();
//     }, 1000);
//   });
//   // resolve(tmpPromise);
// });

// value, errorにはPromiseresultが入る
// promise.then((value) => {
//   console.log('then', value);
// });
// promise.catch((error) => {
//   console.log('catch', error);
// });
// promise.finally((value) => {
//   console.log('finally', value);
// });

// console.log(promise);

// promiseチェーン
// thenなどはpromiseオブジェクトを作り出している
// promise = new Promise((resolve, reject) => {
//   resolve(1);
// });
// promise
//   .then((value) => {
//     console.log(value);
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(val * 3);
//       }, 1000);
//     });
//   })
//   .then((value) => {
//     console.log(value);
//   });

// なぜこのような動作になるのか？
// promise = new Promise(() => {});
// let promise2 = promise.then((value) => {
//   console.log(value);
//   return 2;
// });
// let promise3 = promise2.then((value) => {
//   console.log(value);
//   return 3;
// });
// let promise4 = promise3.catch((error) => {
//   console.log(error);
//   throw new Error(4);
// });

// web apisをpromise化

// 最新のapi
// promiseを返している。
// navigator.mediaDevices
//   .getUserMedia({ video: true })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .then(() => {
//     return navigator.clipboard.readText(); //textを返す
//   })
//   .then((text) => {
//     console.log(text);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 昔のapi をpromise化
// 最新のapiはpromiseを返すのでその様にしたら良い。
// 何度も繰り返す非同期処理(clickなど)はpromise化できない
// let promisifiedSetTimeout = (time) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   });
// };
// promisifiedSetTimeout(1000).then();

// promiseのstaticメソッドについて 8つ
// all(), allSetteled(), race(), any(), resolve(), reject(), withResolvers(), try()
// promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(1);
//     reject(1);
//   }, 1000);
// });
// promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 2000);
// });
// promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 500);
// });
// allはpromiesを返すiterableオブジェクトが全てresovleされたらresovleされる
// rejectされたらその場でallがrejectされる
// Promise.all([promise, promise2, promise3])
//   .then((value) => {
//     console.log('Promise.all() then :', value);
//   })
//   .catch((error) => {
//     console.log('Promise.all() catch : ', error);
//   });
// allSetteled()は配列でそれぞれのpromiseの結果を格納する
// 全てがrejectされてもresovleされる。
// race() 最初にresole、rejectされたPromiseのpromiseresultを返す
// any() rejectされたものは無視する。resolveされたものをresuletに入れる
// resolve(), reject() new Promise(resole => resolve('value'))の書き換え
// withResolvers(), resolveとrejectを外側で使いたいとき
// const { newPromise, resolve, reject } = Promise.withResolvers();
// try(),new Promise((resolve) => {resolve(func)})の書き換え
// function func() {}
// Promise.try(func);

// イベントループ
// タスクキュー、マイクロタスクキュー、レンダリング
// web workers api, 同時並行で別のjsを実行したいとき
// ディスパッチイベントメソッド、同期的に実行される

// async await
// -独自-----------------
async function myFunc() {
  return 42;
}
myFunc().then((result) => console.log(result));

function getDate() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('get date');
    }, 1000);
  });
}
async function main() {
  console.log('start');
  const result = await getDate();
  console.log(result);
  console.log('end');
}

main();

// ---------------------

// Promiseを返す、awaitを使える様になる
// 単にreturnするとresolveされる。stateはfullfilled, resultはreturnの値になる
// throwするとrejectされる。
let asyncFunc = async () => {
  // return 'hello';
  // throw new Error('error');
  console.log(1);
  await 1;
  // 内部的にはawaitで中断されて外に出る。続きを外側の処理が終わったら再開する
  // Promise.resolve(1).then(onFulfilled, onRejected);
  console.log('hello');
};
let reuslt = asyncFunc();
console.log(2);

// for await of文
// 以下の処理を簡潔に記述する方法がES2018追加
promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    // reject(1);
  }, 1000);
});
promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 500);
});

// let promises = [promise, promise2, promise3];
// (async () => {
//   for (const promise of promises) {
//     let result = await promise; // この処理が終わるまでは次の処理に行かない
//     console.log(result);
//   }
// })();

let promises = [promise, promise2, promise3];
(async () => {
  for await (const result of promises) {
    console.log(result);
  }
})();

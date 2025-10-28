function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値:${value}`);
      } else {
        reject('入力値はからです');
      }
    }, 500);
  });
}

asyncProcess('徳三郎')
  .then((response) => {
    console.log(response);
    return asyncProcess('任三郎');
  })
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log('処理終了'));

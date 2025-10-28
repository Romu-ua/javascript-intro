let book = {
  title: 'Javaポケットリファレンス',
  publisher: '技術',
  price: 2980,
};

let { price, title, memo = 'x' } = book;
console.log(price);
console.log(title);
console.log(memo);

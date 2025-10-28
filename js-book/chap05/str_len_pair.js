let str = '𠮟る'; // U+20B9F + U+308B, U+53F1 + U+308Bではない。

console.log(str.length);
console.log([...str].length);

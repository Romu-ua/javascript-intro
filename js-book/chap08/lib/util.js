const AUTHOR = 'YAMADA, hogehoge';

export function getTrianglArea(base, height) {
  return (base * height) / 2;
}

export class Member {
  constructor(name = '佐藤', age = 0) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`私の名前は${this.name},${this.age}歳です.`);
  }
}

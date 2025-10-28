class Member {
  constructor(name = '名無し', age = 0) {
    this.name = name;
    this.age = age;
  }

  shoe() {
    console.log(`私の名前は${this.name},${this.age}歳です.`);
  }
}

let m = new Member('佐藤', 100);
console.log(Object.getPrototypeOf(m));
console.log(Member.prototype === Object.getPrototypeOf(m));

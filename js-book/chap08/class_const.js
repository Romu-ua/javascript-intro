class Member {
  constructor(name = '名無し', age = 0) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`私の名前は${this.name},${this.age}歳です.`);
  }
}

//let m = new Member('佐藤', 100);
let m = new Member();
m.show();

class Member {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `私の名前は${this.name},${this.age}歳です.`;
  }
}

class BusinessMember extends Member {
  work() {
    return `${this.name}は働いています.`;
  }
}

let bm = new BusinessMember('佐藤', 25);
console.log(bm.greet());
console.log(bm.work());

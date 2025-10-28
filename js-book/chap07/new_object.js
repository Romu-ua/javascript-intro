let member = new Object();
member.name = '佐藤';
member.age = 21;
member.show = function () {
  console.log(`私は${this.name},${this.age}です。`);
};

member.show();

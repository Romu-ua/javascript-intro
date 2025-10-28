let member = {
  name: '佐藤',
  age: 21,
  show: function () {
    console.log(`私は${this.name},${this.age}歳です。`);
  },
};

member.show();

let classes = ['部長', '課長', '主任', '担当'];
let member = [
  { name: '鈴木', clazz: '主任' },
  { name: '山口', clazz: '部長' },
  { name: '井上', clazz: '担当' },
  { name: '和田', clazz: '課長' },
  { name: '小森', clazz: '担当' },
];

console.log(
  member.sort((x, y) => {
    return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
  })
);

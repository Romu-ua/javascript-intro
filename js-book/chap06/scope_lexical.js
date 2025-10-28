let data = 'Global';

function scope1() {
  console.log(data);
}

function scope2() {
  let data = 'Local';
  scope1();
}

scope1();
scope2();

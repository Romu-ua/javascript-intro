function tag(strings, ...values) {
  return (
    strings[0] + values[0].toUpperCase() + strings[1] + values[1] + strings[2]
  );
}

const name = '山田';
const count = 3;
const out = tag`Hello, ${name}! You have ${count} messages.`;
console.log(out);

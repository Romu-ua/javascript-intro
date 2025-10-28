let value = '';

value = value ? value : '既定値';
console.log(value);

//value = '';
value = 'カスタム値';
value ||= '既定値';
console.log(value);

value = null;
value ??= '既定値';
console.log(value);

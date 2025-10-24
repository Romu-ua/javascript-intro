import './B.js';

export const A = 'A';
export let letA = 'letA';
export var varA = 'varA';
export function funcA() {
  console.log('funcA');
}
export function* generatorFuncA() {}
export async function asyncFuncA() {}
export async function* gasynceGeneratorFuncA() {}
export class ClassA {}

export default 'A';

console.log('A.js');

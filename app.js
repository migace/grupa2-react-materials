import test from 'camelcase';
import c, { hello as a, PI } from './test.js';

function hello() {
    return 'Hello World!';
    
}

console.log(test('foo-bar-test'));

console.log(a('World'));
console.log(a(), PI);

var a = ['a','b','c'];
var b = ['a',2,3];

var c = a.concat(b);
c.pop();
console.log(a,b, c);
var d = c.slice(0,3);
console.log(d);
console.log(Array(7).fill(2));
// console.log(c.find('c'));
console.log(c.includes('c'));
var f = [1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10

console.log(f);

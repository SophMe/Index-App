alert('Hello world') // Everything after the slashes is ignored

let myName = 'Bob';
document.write(myName); /* The document represents the DOM, the JavaScript object made from my HTML code */
myName = 'John Doe';
document.write(myName);

/* Mathematical Expressions Example 1 */
let simpleAddition = 2 + 2;
document.write(simpleAddition);

/* Example 2 */
let size = 100;
let doubleSize = size * 2;
document.write(doubleSize);

/* Example 3 */
// When I write this twice it does not work, why??
/* let size = 100;
let doubleSize = size * 2; */
let minSize = (doubleSize * 2) - (size / 2);
document.write(minSize);

// Array.of(element0[, element1[, ...[, elementN]]])

let numbers = Array.of(3);
console.log(numbers.length); // 1
console.log(numbers[0]); // 3

let chars = Array.of('A', 'B', 'C');
console.log(chars.length); // 3
console.log(chars); // ['A','B','C']


// JavaScript Array.of() polyfill

if (!Array.of) {
    Array.of = function() {
        return Array.prototype.slice.call(arguments);
    };
}





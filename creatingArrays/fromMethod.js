

//Array.from(target [, mapFn[, thisArg]])



// A) Create an array from an array-like object
// The following example uses the Array.from() method to create a new array from the arguments object of a function:


function arrayFromArgs() {
    return Array.from(arguments);
}

console.log(arrayFromArgs(1, 'A'));


// B) JavaScript Array Array.from() with a mapping function
// The Array.from() method accepts a callback function that allows you to execute the mapping function on every element of the array which is being created. See the following example:

function addOne() {
    return Array.from(arguments, x => x + 1);
}
console.log(addOne(1, 2, 3));


// C) JavaScript Array Array.from() with a this value
// If the mapping function belongs to an object, you can optionally pass the third argument to the Array.from() method. The object will represent the this value inside the mapping function. Consider this example:


let doubler = {
    factor: 2,
    double(x) {
        return x * this.factor;
    }
}
let scores = [5, 6, 7];
let newScores = Array.from(scores, doubler.double, doubler);
console.log(newScores);

// D) Create an array from an iterable object
// Since the Array.from() method also works on an iterable object,  you can use it to create an array from any object that has a [symbol.iterator] property. For example:

let even = {
    *[Symbol.iterator]() {
        for (let i = 0; i < 10; i += 2) {
            yield i;
        }
    }
};
let evenNumbers = Array.from(even);
console.log(evenNumbers);


// First, define the even object with the [System.iterator] that returns even numbers from 0 to 10.
// Then, use the Array.from() method to create a new array of even numbers from the even object.




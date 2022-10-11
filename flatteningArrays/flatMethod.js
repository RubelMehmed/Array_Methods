
// let newArray = arrayObject.flat([depth])

//The following example shows how to flat an array of numbers:

const numbers = [1, 2, [3, 4, 5]];
const flatNumbers = numbers.flat();
console.log(numbers);
console.log(flatNumbers);

//The following example flats an array with two level depth:

const numbers2 = [1, 2, [3, 4, 5, [6, 7]]];
const flatNumbers2 = numbers2.flat(2);

console.log(flatNumbers2);

// you can pass the Infinity into the flat() method to recursively concatenate all elements of the sub-arrays into the new array:


const numbers3 = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
const flatNumbers3 = numbers3.flat(Infinity);

console.log(flatNumbers3);

// If an array has empty slots, you can use the flat() method to remove the holes, like this:

const numbers4 = [1, 2, , 4, , 5];
const sequence = numbers4.flat();

console.log(sequence);


// Use the Array.prototype.flat() method to flat an array with the nested arrays.
// Use the depth argument to specify how deep the nested arrays should be flattened. The depth is 1 by default.
// The flat() also removes the holes in the array with empty slots.



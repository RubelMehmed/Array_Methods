// #  at( ) Method



const scores = [5, 6, 7];

console.log(scores.at(1)); 
// same as scores[1] 


// get the last element
console.log(scores.at(-1)); // 7

console.log(scores.at(-1) === scores[scores.length - 1]); // true


Output:

6
7
true
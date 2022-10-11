


const cssClasses = ['btn', 'btn-primary', 'btn-active'];
const btnClass = cssClasses.join(' ');

console.log(btnClass);


//This example uses the JavaScript Array join() method to replace all occurrences of the space ' ' by the hyphen (-):


const title = 'JavaScript array join example';
const url = title.split(' ')
    .join('-')
    .toLowerCase();

console.log(url);


//How it works:

// First, split the title string by the space into an array by using the split() string method.
// Second, concatenate all elements in the result array into a string by using the join() method.
// Third, convert the result string to lower case by using the toLowerCase() method.
//learn arrow syntax, hangup on needing to omit the word "function"
//arrow appears to offer shorter hand solution

const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};


// test your code
console.log(myConcat([1, 2], [3, 4, 5]));

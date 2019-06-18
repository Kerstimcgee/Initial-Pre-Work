//learn to add a default setting in our program. Here we tell it to
//increment by one number if there are no values specified.  

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns NaN

//learn that deconstructing allows the choosing of elements, different than
//spread, which makes an array of all elements
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
const c = a;
a = b;
b = c;
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

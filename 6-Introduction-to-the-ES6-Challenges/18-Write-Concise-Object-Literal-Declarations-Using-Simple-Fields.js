//use concise object literal syntax to create an object

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  const personObjec = (name, age, gender) => ({ name, age, gender });

  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

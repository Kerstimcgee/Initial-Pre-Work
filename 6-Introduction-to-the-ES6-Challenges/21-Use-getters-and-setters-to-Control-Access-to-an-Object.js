//learn to use a class and a constructor to get value of object and set them
//within an object

function makeClass() {
"use strict";
/* Alter code below this line */
class Thermostat{
constructor(temp){
  this._temp = temp;
}
get temInCelsius(){
  return this._temp;
}
set temInCelsius(scale){
  return this._temp = scale;
}
}
/* Alter code above this line */
return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

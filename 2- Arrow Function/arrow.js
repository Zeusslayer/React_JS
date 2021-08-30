//regular function
function printMyName(name) {
  console.log(name);
}
printMyName("Zeus");

//arrow functions
const printMyName2 = (name2) => {
  //can omit the paranthesis if the argument is only one "name2" instead of "(name2)"
  console.log(name2);
};
printMyName2("Slayer");

const printMyName3 = () => {
  //no argument
  console.log("Using arrow functions");
};
printMyName3();

const printMyNameAndAge = (name3, age, skill) => {
  //multiple arguments
  console.log(name3, age, skill);
};
printMyNameAndAge("Zeus", 22, "can fly");

const multiply = (number) => {
  //returns
  number *= 4;
  return number * 2;
};
console.log(multiply(4));

//only when the code is one-line (also no paranthesis when it's one argument)
const multiply2 = number2 => number2 * 2; 
console.log(multiply2(4));

//primitive type = int, string, char..
const number = 1;
const num2 = number; //copies the value of number to num2
console.log(num2);

//reference type = objects, arrays
const person = {
  name: "Zeus",
};

const secondPerson = person; //copies the pointer to the memory, not the value

person.name = "Slayer";
console.log(secondPerson); //it will print Slayer because secondPerson points to the values of person

const thirdPerson = {
  // copies the values of the object
  ...person,
};

person.name = "Poseidon";
console.log(thirdPerson); //it will print Slayer because change in the person won't change the thirdPerson after the values are passed

//spread on arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

//spread on objects(properties)
const person = {
  name: "Zeus",
};

const newPerson = {
  ...person,
  age: 22,
};

console.log(newPerson);

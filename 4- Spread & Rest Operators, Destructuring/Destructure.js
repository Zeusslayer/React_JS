//array destructuring
const numbers = [1, 2, 3];
[num1, , num2] = numbers;
console.log(num1, num2);

//object destructuring
const person = {
  name: "Zeus",
  age: 22,
};

const { name, age } = person;
console.log(name);

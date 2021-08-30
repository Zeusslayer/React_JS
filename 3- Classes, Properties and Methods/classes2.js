class Human {
  //superclass
  gender = "Male";

  printGender = () => console.log(this.gender);
  
}
//new syntax
class Person extends Human {
  //subclass
  name = "Zeus";
  gender = "God";
  
  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

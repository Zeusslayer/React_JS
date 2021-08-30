class Human {
  //superclass
  constructor() {
    this.gender = "Male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  //subclass
  constructor() {
    super(); //must add if you are using constructor in a subclass
    this.name = "Zeus";
    this.gender = "God";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

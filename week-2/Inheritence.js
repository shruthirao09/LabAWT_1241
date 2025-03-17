

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); 
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} says woof!`);
    }
  }
  
  const dog1 = new Dog("Max", "Golden Retriever");
  
  dog1.sayHello();  
  dog1.bark();      
  
  console.log(dog1); 
  
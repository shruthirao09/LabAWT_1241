function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  function Dog(name, breed) {
    Animal.call(this, name); 
    this.breed = breed;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function() {
    console.log(`${this.name} says woof!`);
  };
  
  const dog1 = new Dog("Max", "Golden Retriever");
  
  dog1.sayHello();  
  dog1.bark();      
  
  console.log(dog1); 
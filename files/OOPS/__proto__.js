const animal = {
    speak() {
      console.log('Animal speaks');
    }
  };
  
  const dog = {
    bark() {
      console.log('Dog barks');
    }
  };
  
  dog.__proto__ = animal;
  
  console.log(dog.bark); // Logs: [Function: bark] (defined on `dog`)
  console.log(dog.speak); // Logs: [Function: speak] (inherited from `animal`)
const person = {
    name: 'Tanishq',
    greet: function(greeting) {
      console.log(`${greeting}, my name is ${this.name}`);
    }
  };
  
  const greetPerson = person.greet.bind(person, 'Hello');
  greetPerson();  // Output: Hello, my name is Tanishq
  
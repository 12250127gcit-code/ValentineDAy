// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greet() {
//         console.log(`Hi, I am ${this.firstName} ${this.lastName}`);
//     }

//     displayAge(userAge) {
//         console.log(`${this.firstName} is ${userAge} years old`);
//     }
// }

// const sonamObj = new Person('Sonam', 'Penjor');

// sonamObj.greet();       
// sonamObj.displayAge(19);

// class Person{
//     constructor(firstName,lastName){
//         this.firstName = firstName,
//         this.lastName = lastName
//     }
// }
// const person1 = new Person('Pema','Tenzin');
// console.log(person1.firstName,person1.lastName)

// class Person {
//     #firstName;   // private field

//     constructor(firstName, lastName) {
//         this.#firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFirstName() {           // public method to access private value
//         return this.#firstName;
//     }
// }

// const person1 = new Person('Pema', 'Tenzin');
// console.log(person1.getFirstName(), person1.lastName);


// class Rectangle {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }

//     getArea() {
//         return this.length * this.width;
//     }

//     getPerimeter() {
//         return 2 * (this.length + this.width);
//     }
// }

// const Rectangle1 = new Rectangle(10, 5);

// console.log(`Area of Rectangle is ${Rectangle1.getArea()}; Perimeter of Rectangle is ${Rectangle1.getPerimeter()}`);
 
//  class Animal {
//     #name;
//     constructor(name, color) {
//         this.#name = name;
//         this.color = color;
//     }

//     get Name() {
//         return this.#name;
//     }

//     set Name(newName) {
//         this.#name = newName;
//     }
// }

// let dog = new Animal("Buddy", "black");
// console.log(dog.Name);
// dog.Name = "Tashi Poktor"; //using setter
// console.log(dog.Name);    // Using getter
// console.log(dog.color);

'use strict';

//////OBJECT CONSTRUCTOR/////////

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // should never create method in constructor function
//   //   this.calcAge = function () {
//   //     return 2021 - this.birthYear;
//   //   };
// };

// const scott = new Person('scott', 1986);

// // console.log(scott.calcAge());

// ///////PROTOTYPES///////

// Person.prototype.calcAge = function () {
//   return 2021 - this.birthYear;
// };

// console.log(scott.calcAge());

// console.log(scott.__proto__ === Person.prototype);

// Person.prototype.species = 'Homo sapiens';

// console.log(scott);
// console.log(scott.hasOwnProperty('firstName'));
// console.log(scott.hasOwnProperty('species'));

// console.log(scott.__proto__); //prototype of scott
// console.log(scott.__proto__.__proto__); //object prototype
// scott.__proto__.__proto__.test = 'works'; //adding a property to obj prototype
// console.log(scott.__proto__.__proto__); //does add it
// console.log(scott.__proto__.__proto__.hasOwnProperty()); //but still dosnt have own property?
// console.log(scott.test); //gets inherited
// console.log(scott.__proto__.__proto__.__proto__); //null

// console.log(Person.prototype.constructor); //points back at the person
// console.dir(Person.prototype.constructor); // need to use dir to see it

// const arr = [1, 2, 3, 2, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// const arr1 = [1, 2, 3, 2, 3, 9, 2, 4, 9];
// console.log(arr1.unique()); //not a good idea to add methods to existing built in prototypes. (the next version of JS might add a method with the same name, also team of developer it would be a nightmare)
// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.log(h1.__proto__);
// console.log(h1.__proto__.__proto__);
// console.log(h1.__proto__.__proto__.__proto__);
// console.log(h1.__proto__.__proto__.__proto__.__proto__);
// console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__);
// console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);

// console.dir((x => x + 1).__proto__);

// ////coding challenge 1/////////

// // const Car = function (make, speed) {
// //   this.speed = speed;
// //   this.make = make;
// // };

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// // };
// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// // };

// // const car1 = new Car('BMW', 120);
// // const car2 = new Car('Mercedes', 95);

// // car1.accelerate();
// // car2.brake();

// // console.log(car1.make, car1.speed);
// // console.log(car2.make, car2.speed);

// ///////ES6 Classes////////

// //class expression
// // const PersonCl = class {};

// //class declaration

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //instance methods (added to the .prototype property - all intstances have access)

//   calcAge() {
//     console.log(2021 - this.birthYear);
//   } //methods written inside the class but outside of the constructor are added to the prototype automatically

//   get age() {
//     return 2021 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     }
//     //else alert(`${name} is not a full name`);
//   }

//   // use this when setting a property name that already exists
//   get fullName() {
//     return this._fullName;
//   }

//   //static method (added to the constructor fn only accessible via e.g PersonCl.hey)

//   static hey() {
//     console.log('Hey There 🖐🏻');
//     console.log(this);
//   }
// }

// const maria = new PersonCl('Maria Gallacher', 1988);

// PersonCl.hey();

// console.log('Age Getter:', maria.age);
// console.log(maria.firstName);
// maria.calcAge();
// console.log(maria);

// PersonCl.prototype.greet = function (name) {
//   console.log(`Hey ${name}, I'm ${this.firstName}!`); //methods written outside of the class declaration must have class.prototytpe
// };

// const brian = new PersonCl('Brian', '1986');

// brian.greet('Maria');

// // 1. classes are not hoisted (function declarations are - fn expressions and arrow functions arent)
// // 2. Classes are first-class citizens (we can pass them into and return from functions)
// // 3. Classes are excecuted in strict mode.

// ///////GETTERS AND SETTERS///////////(some stuff added above)

// const account = {
//   owner: 'Scott',
//   movements: [300, 400, 200, 20.99, 11.0],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     return this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// console.log(account.movements);

// account.latest = 50;

// console.log(account.latest);
// console.log(account.movements);

// console.log(maria.fullName);

// const PersonProto = {
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 1927;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1991);

// console.log(sarah);

// //////////coding challenge 2////////////

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//   }

//   brake() {
//     this.speed -= 5;
//   }

//   get speedUS() {
//     return `${this.speed / 1.6} mph`;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const car1 = new Car('Ford', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car2.brake();

// console.log(car1.speed, car2.speed);
// console.log(car1.speedUS);

// car1.speedUS = 50;
// console.log(car1);

// console.log(car1.speedUS);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //linking prototypes

// Student.prototype = Object.create(Person.prototype);

// const mike = new Student('Mike', '1955', 'JavaScript');

// Student.prototype.introduce = function () {
//   console.log(`Hey, my name is ${this.firstName} and I study ${this.course}`);
// };
// console.log(mike);

// mike.introduce();

// // mike.calcAge();

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// console.dir(Student.prototype.constructor); //student consructor is still person needs manually set

// Student.prototype.constructor = Student;

//////CODING CHALLENGE 3//////////////

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} brakes to ${this.speed}`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = new Object(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(`Battery charged to ${this.charge}`);
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} accelerates to ${this.speed}, battery now at ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);

// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.accelerate();
// tesla.chargeBattery(100);
// tesla.accelerate();
// tesla.brake();
// tesla.accelerate();

// console.log(tesla);

////LINKING PROTOTYPES WITH ES6 CLASSES////////

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //instance methods (added to the .prototype property - all intstances have access)

//   calcAge() {
//     console.log(2021 - this.birthYear);
//   } //methods written inside the class but outside of the constructor are added to the prototype automatically

//   get age() {
//     return 2021 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     }
//     //else alert(`${name} is not a full name`);
//   }

//   // use this when setting a property name that already exists
//   get fullName() {
//     return this._fullName;
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     ///super always needs to happen first as sets the this keyword
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce(name) {
//     console.log(`"Hey ${name}, I'm ${this.fullName}`);
//   }
// }

// const alan = new StudentCl('Alan Brown', 1960, 'HTML');

// alan.introduce('Scott');
// alan.calcAge();

// /////linking prototypes with object.create/////
// ////Arguably the best way but the others are well used - mostly you'll see ES6 classes

// const PersonProto = {
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// const bobby = Object.create(StudentProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(
//     `Hi my name is ${this.firstName} and I am studying ${this.course}`
//   );
// };

// bobby.init('Bobby', 1984, 'CSS');
// console.log(bobby);
// bobby.calcAge();
// bobby.introduce();

////////ENCAPSULATION/PRIVACY///////////

// class Account {
//   ////Public fields
//   locale = navigator.language;

//   ////Private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     ////protected property
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account ${owner}`);
//   }
//   //public interface
//   getMovements() {
//     console.log(this.#movements);
//     return this;
//   }
//   deposit(amount) {
//     this.#movements.push(amount);
//     return this;
//   }
//   withdraw(amount) {
//     this.deposit(-amount);
//     return this;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`You're loan of ${val} has been approved`);
//       return this;
//     }
//   }

//   //private methods (will be # when implemented - at presented just protected convention with _)
//   _approveLoan(val) {
//     if (val <= 10000) return true;
//     else return false;
//   }
// }

// const acc1 = new Account('Scott', 'GBP', 1234);
// console.log(acc1);

// acc1.deposit(300);
// acc1.withdraw(200);

// console.log(acc1);

// acc1.requestLoan(1000);

// console.log(acc1);

// acc1.getMovements();

// // CLASS FIELDS

// // Public and private fields & public and private methods

// // console.log(acc1.#movements); //cant use as private

// ///////CHAINING METHODS//////////

// acc1.deposit(200).deposit(500).withdraw(400).requestLoan(2000).getMovements();
///doesnt work unless you return "this" from each method

//////////////coding challenge 4///////////

class CarCl {
  constructor(make, speed, maxSpeed) {
    this.make = make;
    this.speed = speed;
    this.maxSpeed = maxSpeed;
  }

  accelerate() {
    this.speed += 10;
    return this;
  }

  brake() {
    this.speed -= 10;
    return this;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, maxSpeed, charge) {
    super(make, speed, maxSpeed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    if (this.speed >= this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else this.drain(1);
    return this;
  }

  drain(percent) {
    this.#charge -= percent;
    return this;
  }

  chargeTo(percent) {
    this.#charge = percent;
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new EVCl('Rivian', 0, 201, 100);

console.log(car1);
car1
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .accelerate();
console.log(car1);

console.log(car1.speedUS);
car1.speedUS = 100;
console.log(car1);

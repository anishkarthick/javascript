'use strict';

////////////////////////
/*
//scoping
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  //function scope
  function printAge() {
    let output = `Hey ${firstName} You are ${age}, born in  ${birthYear}`;
    console.log(output);

    //block scope
    if (birthYear >= 1980 && birthYear <= 1998) {
      var millinieal = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'karthick';
      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT';
      const str = `0h, you are a millinieal ${firstName}`;
      console.log(str);

      //functions are block scoped in stricrt mode
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    // console.log(add(2, 3));
    console.log(millinieal);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'anish';
calcAge(1998);
// console.log(age);
// console.log(printAge());

////////////////////////////////////////////////////////
//Hoisting and Temporal dead zone(TDZ)

//variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Anish';
let job = 'Developer';
const year = 1998;

//functions
console.log(Decl(2, 8));
// console.log(addExpr(2, 8));
// console.log(addArrow(2, 8));

function Decl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products are deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
///////////////////////////////////////////////////////
//This keyword
console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};

calcAge(1998);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};

calcAgeArrow(1998);

const anish = {
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
anish.calcAge();

const karthick = {
  year: 2003,
};
karthick.calcAge = anish.calcAge;
karthick.calcAge();

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'anish',
  year: 1998,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1998);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Anish',
  age: 24,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);

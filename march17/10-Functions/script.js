"use strict";

///////////////////////////////////////
// Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    // alert('Checked in');
  } else {
    alert("Wrong passport!");
  }
};

checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

// newPassport(jonas);
// checkIn(flight, jonas);

///////////////////////////////////////////////////

const counter = {
  value: 23,
  init() {
    this.value++;
    console.log(this.value);
  },
};
counter.init();

const i = function () {
  let value = 23;
  value++;
  console.log(value);
};
i();
///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);
["Anish", "Karthick", "AK"].forEach(high5);
///////////////////////////////////////////
//functions returning functions

const greet = function (greetings) {
  return function (name) {
    console.log(`${greetings} ${name}`);
  };
};

greet("hello")("anish");

// Challenge
// const wish = greetings => {
//   return name => {
//     console.log(`${greetings} ${name}`);
//   };
// };

const wish = (greetings) => (name) => console.log(`${greetings} ${name}`);
wish("HEY")("Arrow");

///////////////////////////////////////
// The call and apply Methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
console.table(lufthansa);
lufthansa.book(239, "Anish karthick");
lufthansa.book(635, "A K");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
///////////////////////////////////////
//Bind method

// const bnd = book.bind(swiss, 12345, 'slayer');
// bnd();

// const bnd = book.bind(swiss, 12345);
// bnd('bond');
// bnd('james');
// bnd('bond');
// bnd('007');
////////////////////////////

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

//challenge : convert the above code to function returning function method
//own solution
const addtax = (rate) => (value) => value + value * rate;
// const tax = addtax(0.23)(100);
console.log(addtax(0.23)(100));
console.log(addtax(0.23)(23));

//given solution
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

/////////////////////////////////////////////

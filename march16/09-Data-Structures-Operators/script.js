"use strict";
///////////////////////////////////////
// String Methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}

///////////////////////////////////////////
/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase   ✅
firstName        ✅✅
someVariable     ✅✅✅
calculateAge     ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �
*/
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// const undrScre = "anish_karthick";
// console.log(undrScre);
// const camelCase = undrScre.split("_");
// console.log(camelCase);
// const CC = [camelCase[0], camelCase[1].replace("k", "K")].join("");
// console.log(CC);
// ///////////////////////////////////////
// const value = "    anIsH_karThIck";
// console.log(value);
// const [first, second] = value.toLowerCase().trim().split("_");
// console.log(first);
// const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
// console.log(output);
// ////////////////////////////////////////////////

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  console.log(text);
  const rows = text.split("\n");
  //console.log(rows);

  for (const [i, row] of rows.entries()) {
    // console.log([i, row]);
    const [first, second] = row.toLocaleLowerCase().trim().split("_");
    // console.log(us);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

///////////////////////////////////////
// Working With Strings - Part 3
/*
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Anish Karthick'.split(' '));

const [firstName, lastName] = 'Anish Karthick'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('anish vignesh karthick nikil');
capitalizeName('anish karthick');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Anish'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

/////////////////////////////////////
// Working With Strings - Part 2
//fixing captialization in name
/*
const passenger = 'aNIsh';
console.log(passenger);
const passengerLower = passenger.toLowerCase();
const result = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(result);
// console.log(passenger.slice(-4, 5));
// console.log(`${passenger.toLowerCase().slice(1)}`);

//comparing emails
const email = 'anish@spritle.com';
const loginEmail = '    ANISH@SPRITLE.COM \n    ';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// const compareEmail = function () {
//   const normalizedMail = loginEmail.toLowerCase().trim();
//   if (email === normalizedMail) console.log('login succcess');
//   else console.log('Try Again!!');
// };
// compareEmail();

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////////////
// Working With Strings - Part 1
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Air Portugal'));

console.log(airline.slice(10));
console.log(airline.slice(11));
console.log(airline.slice(5, 11));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  console.log(s);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('anish'));
console.log(typeof new String('anish'));

console.log(typeof new String('anish').slice(1));
*/

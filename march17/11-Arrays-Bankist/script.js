"use strict";

// Simple Array Methods
let arr = ["a", "b", "c", "d", "e"];

// SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
console.log(arr);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(" - "));

/////////////////////////////
//for each

// console.log(movements);
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`'deposited', ${movement}`);
//   } else {
//     console.log(`'withrawl', ${Math.abs(movement)}`);
//   }
//

//movement = value, i = index, arr = fullArray;
movements.forEach((movement, i, arr) => {
  // if (movement > 0) {
  //   console.log(`'${i + 1} deposited'${padEnd}, ${movement}`);
  // } else {
  //   console.log(`'${(i = 1)} withrawl', ${Math.abs(movement)}`);
  // }

  movement > 0
    ? console.log(`'${i + 1} deposited', ${movement}`)
    : console.log(`'${(i = 1)} withrawl', ${Math.abs(movement)}`);
});
///////////////////////////////////////
// The map Method
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

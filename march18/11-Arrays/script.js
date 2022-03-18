//march 18
////////////////////////////////////////////
//iterating arrays with forEach
const type = [];
var food = [
  {
    id: "0001",
    type: "donut",
    name: "Cake",
    batters: {
      batter: [
        { id: ["1001/a", "1001/b", "1001/c", "1001/d"], type: "Regular" },
        { id: "1002", type: ["Chocolate", "Dark chocolate", "White Choloate"] },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5007", type: "Powdered Sugar" },
      { id: "5006", type: "Chocolate with Sprinkles" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
  {
    id: "0001",
    type: "donut",
    name: "Cake",
    batters: {
      batter: [
        { id: ["1/a", "1/b", "1/c", "1/d"], type: "Reg" },
        { id: "2", type: ["Choco", "Dk choco", "W Choco"] },
        { id: "3", type: "🔵berry" },
        { id: "4", type: "💀Food" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5007", type: "Powdered Sugar" },
      { id: "5006", type: "Chocolate with Sprinkles" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
];

try {
  // console.log(food[0]);
  // food[0].batters.batter;

  const get = food[0].batters.batter[0].id.forEach((item, i, arr) => {
    console.log(item);
  });
  console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

  const get0 = food[1].batters.batter[1].type.forEach((item, i) => {
    console.log(item);
  });

  console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
  const get1 = food[0].topping.forEach((item, i) => {
    console.log(item.type);
  });
  console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
} catch (e) {
  console.log(e, "error");
}

///////////////////////////////////////
// The filter Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

///////////////////////////////////////
// The reduce Method
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
///////////////////////////////////////
// The Magic of Chaining Methods
const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

//////////////////////////////

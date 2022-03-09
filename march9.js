/*FUNDAMENTAL PART 2*/

'use strict'

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} population and its captital city is ${capitalCity}`
}

const data = describeCountry('India', '10 m', 'Delhi');
const data1 = describeCountry('germany', '14 m', 'berlin');
const data2 = describeCountry('finland', '5 m', 'helsinki');
console.log(data, data1, data2);


//function declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

const popIndia = percentageOfWorld1(1200);
const popChina = percentageOfWorld1(1441);
const popGermany = percentageOfWorld1(1240);

console.log(`${popIndia}
${popChina}
${popGermany}`)

// function expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100
}

let pIndia = percentageOfWorld2(1200);
let pChina = percentageOfWorld2(1441);
let pGermany = percentageOfWorld2(1240);

console.log(`${pIndia},2
${pChina},2
${pGermany},2`)

//arrow functions
const percentageOfWorld3 = population => (population / 7900) * 100

pIndia = percentageOfWorld3(1200);
pChina = percentageOfWorld3(1441);
pGermany = percentageOfWorld3(1240);

console.log(`${pIndia},3
${pChina},3
${pGermany},3`)

//functions calling functions

let describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(1441)}% of the world.'`
}
console.log(describePopulation('China', 1441))
//---------------------------------------------------------------------------
describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
};
describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);


////////////////////////////////////////////////////////////
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK �
*/

//solution

let Dolphins = 85 + 54 + 41
let Koalas = 23 + 34 + 27

const calAverage = (average) => average / 3 //arrow function

const scoreDolphins = calAverage(Dolphins)
const scoreKoalas = calAverage(Koalas)
console.log(scoreDolphins, scoreKoalas)

const checkWinner = function (avgDolphins, avgKoalas) {  //function expression
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${scoreDolphins} vs ${scoreKoalas})`) //function calling function
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`)
    } else console.log(`No one won `)
}
checkWinner(scoreDolphins, scoreKoalas)
/////////////////////////////////////////////////////////



//ARRAYS

let populations = [1200, 1441, 10, 200]
if (populations.length = 4) {
    console.log(true)
} else console.log(false)
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]
console.log('percentages', percentages)

//basic array operation (methods)

const neighbours = ['India', 'China', 'Pakistan']
neighbours.push('Utopia')
console.log(neighbours)
neighbours.pop('Utopia')
console.log(neighbours)
if (neighbours.includes('Germany')) console.log('Yeah its a neighbor country')
else console.log('Sorry its not there')

// neighbours[0] = 'republic of India'
neighbours[neighbours.indexOf('India')] = 'republic of India'

console.log(neighbours)

/////////////////////////////////////////////////////////
/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK �
*/

//Solution


const calTip = function (bill) {
    // if (bill >= 50 && bill <= 300) {
    //     return 0.15 * bill
    // } else {
    //     return 0.2 * bill
    // }
    return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill

}

calTip(100)

let bills = [125, 555, 44]
let tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])]
console.log(bills, tips)

//bonus
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total)
/////////////////////////////////////////////////////////////////////////////




//OBJECTS

/*
const anish = {
    name: 'anish',
    birthYear: 2008,
    job: 'developer',
    friends: ['anish', 'karthick', 'anishkarthick'],
    hasDriversLisence: true,
    data: function () {
        this.age = 2022 - this.birthYear
        return this.age
    },
    description: function () {
        return `${anish.name} is a ${anish.age} year old developer, and has ${anish.hasDriversLisence && anish.age >= 18 ? 'a' : 'no'} drivers liscence`
    }
}

//'anish' has '3' friends , and his best friend is called 'karthick' 
// console.log(`${anish.name} has ${anish.friends.length} friends , and his best friend is called ${anish.friends[1]} `)

anish.data()
console.log(anish.age)

//'anish' is a '24'-year old developer, and he has a driving liscence 
if (anish.hasDriversLisence && anish.age >= 18) console.log(`${anish.name} is a ${anish.age} year old developer , and he has a drivinglisence`)
else console.log(`${anish.name} is a ${anish.age} year old developer , and he does not have a drivinglisence`)

console.log(anish.description())
*/


const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Tamil',
    population: 4,
    neighbours: ['Russia', 'China', 'Pakistan'],
    neighbouringCountries: true,
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, 
        ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? 'there are no neighbouring countries' :
            'there are neighbouring countries,'
    }
}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 
${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

console.log('hello', myCountry.describe())
myCountry.checkIsland()
console.log('hello', myCountry.isIsland)


myCountry.population = 6
console.log(myCountry)

myCountry['population'] = 4
console.log(myCountry)

///////////////////////////////////////////////////////////////////////

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

//solution
console.log('challenge#3')
const Mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

const Jhon = {
    firstName: 'Jhon',
    lastNmae: 'Smith',
    mass: 92,
    height: 1.95,
    calBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

Mark.calBMI()
Jhon.calBMI()

console.log(Mark.bmi)
console.log(Jhon.bmi)



Mark.bmi > Jhon.bmi ? console.log(`${Mark.firstName}'s BMI (${Mark.bmi}) is higher than ${Jhon.firstName}'s (${Jhon.bmi})!`) :
    console.log(`${Jhon.firstName}'s BMI (${Jhon.bmi}) is higher than ${Mark.firstName}'s (${Mark.bmi})!`)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LOOPS

//for loop

// for (i = 1; i <= 50; i++) {
//     console.log(`Voter number ${[i]} is currently voting`)
// }

populations = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);


//loop inside loop
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
/////////////////////////////////////////////////////

/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
GOOD LUCK �
*/

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tip = []
const totals = []

for (let i = 0; i < bills.length; i++) {
    tip.push(calTip(bills[i]))
    totals.push(calTip(bills[i]) + bills[i])
}
console.log('BILL:', bills, 'TIP:', tip, 'TOTAL:', totals)

///////////////////////////////////////////////////////////////////

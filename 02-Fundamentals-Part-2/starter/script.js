'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriversLicense = true;
// }
// if (hasDriversLicense) {
//     console.log(`I can drive!`);
// }

// function juicer(fruit, volume) {
//     if (volume > 10) {
//         return ("We can't deliver that much juice")
//     }
//     else if (fruit !== ("apple" || "orange")) {
//         return "We only do apple and orange juice"
//     }
//     else return (`Delivery received of ${volume} litres of ${fruit} juice`)
// }

// console.log(juicer("apple", 10));

// const ageCalc = function (birthYear, hadBirthday) {
//     const date = new Date;
//     const year = date.getFullYear();
//     if (hadBirthday) return year - birthYear;
//     else return (year - birthYear) - 1;
// }

// const age = ageCalc(1988, false);
// console.log(age)

// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }

// const calcAge3 = birthYear => 2021 - birthYear;

// console.log(calcAge3(1986));

// const yearsUntilRetirement = (birthYear, retirementAge) => {
//     const age = 2021 - birthYear;
//     return retirementAge - age;
// }

// const scottYearsLeft = yearsUntilRetirement(1986, 65);

// console.log(scottYearsLeft);

// function chopper(fruitNumber) {
//     return fruitNumber * 4;
// }

// function juicer(applesNumber, orangesNumber) {
//     const applePieces = chopper(applesNumber);
//     const orangePieces = chopper(orangesNumber)
//     return (`juice made with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`)
// }

//console.log(juicer(5, 10));

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores �

// const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

// const dolphinsAverage = calcAverage(23, 34, 27);
// const koalasAverage = calcAverage(85, 54, 41);

// console.log(dolphinsAverage, koalasAverage);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     else if (avgKoalas >= avgDolphins * 2) console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     else console.log("Nobody wins!");
// }

// console.log(checkWinner(dolphinsAverage, koalasAverage));

// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above(you can check out 
// the code from first tip calculator challenge if you need to).Use the function
//     type you like the most.Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function!So you can just call a function as array
// values(so don't store the tip values in separate variables first, but right in the new 
// array) �


// let calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [1250, 155, 44];
// const totals = []
// let billsIndex = 0;
// totals.push(calcTip(bills[billsIndex]) + bills[billsIndex])
// billsIndex++;
// totals.push(calcTip(bills[billsIndex]) + bills[billsIndex])
// billsIndex++;
// totals.push(calcTip(bills[billsIndex]) + bills[billsIndex])
// console.log(totals);





// const scott = {
//     firstName: "Scott",
//     lastName: "Hair",
//     birthYear: 1986,
//     driversLicense: true,
//     job: "Associate Software Engineer",
//     // calcAge: function () {
//     //     return 2021 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return this.Summary = `${this.firstName} is a ${this.calcAge()} year old ${this.job} who has ${this.driversLicense ? "a" : "no"} drivers license`
//     }
// }

// scott.location = "East Kilbride";
// scott.friends = ["maria", "steven", "dave", "rob"];


// console.log(scott.getSummary())
//scott.calcAge();

// const nameKey = "Name"
// console.log(scott["first" + nameKey])
// console.log(scott["last" + nameKey])



// const userRequest = prompt("What would you like to know about Scott?");
// if (scott[userRequest]) {
//     console.log(scott[userRequest]);
// }
// else console.log("thats not a valid property!");



// console.log(`${scott.firstName} has ${scott.friends.length} friends, his best friend is ${scott.friends[2]}`)

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass 
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
// tall.
// const mark = {
//     firstName: "Mark",
//     lastName: "Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     },
// }

// const john = {
//     firstName: "John",
//     lastName: "Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     },
// }


// john.calcBMI() > mark.calcBMI() ?
//     console.log(`${john.firstName} ${john.lastName}'s BMI (${john.BMI}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.BMI})`) :
//     console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s (${john.BMI})`);

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Weight lifting rep ${rep}`)
// }

// const scottArray = [
//     `Scott`,
//     `Hair`,
//     2021 - 1986,
//     `Web Developer`,
//     [`Maria`, `Dave`, `Steven`]
// ];
// const types = [];

// for (let i = 0; i < scottArray.length; i++) {
//     console.log(scottArray[i]);
//     types.unshift(scottArray[i]);
// }

// console.log(types)

// const birthYears = [1986, 1988, 1984, 1987, 1929];
// const ages = [];
// for (let i = 0; i < birthYears.length; i++) {
//     ages.push(2021 - birthYears[i]);
// }

// console.log(ages);

// const scottArray = [
//     `Scott`,
//     `Hair`,
//     2021 - 1986,
//     `Web Developer`,
//     [`Maria`, `Dave`, `Steven`]
// ];
// console.log(`---strings only---`)
// for (let i = 0; i < scottArray.length; i++) {
//     if (typeof scottArray[i] !== "string") continue;
//     console.log(scottArray[i]);
// }


const scottArray = [
    `Scott`,
    `Hair`,
    2021 - 1986,
    `Web Developer`,
    [`Maria`, `Dave`, `Steven`]
];

// console.log(`reverse loop`)
// for (let i = scottArray.length - 1; i >= 0; i--) {
//     console.log(scottArray[i])
// }

// for (let property = 0; property < scottArray.length; property++) {
//     if (typeof scottArray[property] == "object") {
//         for (let friend = 0; friend < (scottArray[property]).length; friend++) {
//             console.log(scottArray[property][friend]);
//         }
//     }
//     else {
//         console.log(scottArray[property]);
//     }
// }

// for (let exercise = 1; exercise <= 4; exercise++) {
//     console.log(`starting excersize ${exercise}`)
//     for (let rep = 1; rep <= 8; rep++) {
//         console.log(`repetition ${rep}`);
//     }
// }

let calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let bill = 0; bill < bills.length; bill++) {
    tips.push(calcTip(bills[bill]));
    totals.push(bills[bill] + tips[bill]);
}

console.log(`tips - ${tips}`, `totals ${totals}`);



// function calcAverage(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total / arr.length;
// }

// console.log(calcAverage([1, 2, 3, 4, 5]));

// let reps = 0

// while (reps <= 4) {
//     console.log(reps);
//     reps++;
// }

// let diceNumber = Math.trunc(Math.random() * 6) + 1
// while (diceNumber != 6) {
//     diceNumber = Math.trunc(Math.random() * 6) + 1
//     console.log(diceNumber)
// };






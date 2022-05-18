// // let js = 'amazong';

// // console.log(40 + 8 + 23 - 10);
// // const currentYear = 2021;
// // const birthYear = 1986;
// // const hadBirthday = true;

// // let ageScott = currentYear - birthYear;
// // if (!hadBirthday) ageScott -= 1;
// // console.log(ageScott);

// // const firstName = "Scott";
// // const job = "web developer"

// // console.log(`I'm ${firstName} a ${ageScott} year old ${job}`)

// // console.log(`multi
// // line
// // string baby!`)

// const markHeight = 1.88;
// const markWeight = 95;
// const johnHeight = 2.76;
// const johnWeight = 85;

// const markBMI = markWeight / markHeight ** 2
// const johnBMI = johnWeight / johnHeight ** 2

// console.log(markBMI);
// console.log(johnBMI);

// let isMarkBmiHigher = markBMI > johnBMI
// console.log(isMarkBmiHigher);

// if (isMarkBmiHigher) {
//     console.log("Mark's BMI (" + markBMI + ") is higher than John's (" + johnBMI + ").");
// }
// else console.log("John's BMI (" + markBMI + ") is higher than Mark's (" + johnBMI + ").");

// const age = 15;


// if (age >= 16) {
//     console.log("😎");
// }
// else {
//     console.log("😒");
// }

// const birthYear = 1986;

// const inputYear = "2012"
// const yearsSince = 8
// const currentYear = yearsSince + Number(inputYear);
// console.log(currentYear)

// let favNum = Number(prompt("what's you favourite number"));
// let favColor = prompt(`and your favourite color?`);

// console.log(`your favourite number is (${favNum}) and favourite color is ${favColor}`);

// There are two gymnastics teams, Dolphins and Koalas.They compete against each
// other 3 times.The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console.Don't forget that there can be a draw, so test for that 
// as well(draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points.Hint: Use a logical operator to test for minimum 
// score, as well as multiple else -if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points.Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;
// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 106;
// const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(dolphinsAverageScore, koalasAverageScore)
// if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) console.log("Koalas win! 🎉🐨");
// else if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) console.log("Dolphins win! 🦈");
// else if (dolphinsAverageScore === koalasAverageScore) console.log("its a draw")
// else console.log("nobody wins! ");
//const day = `sunday`;

// switch (day) {
//     case `monday`:
//         console.log("Catch up with emails");
//         break;
//     case `tuesday`:
//         console.log(`have first Team 5`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`same old shit`);
//         break;
//     case 'friday':
//         console.log(`get ready for the weekend`);
//         break;
//     case `saturday`:
//     case `sunday`:
//         console.log(`chill`);
//         break;
//     default:
//         console.log(`not a valid day`);
// }

// if (day === "monday") console.log("Catch up with emails");
// else if (day === "tuesday") console.log(`have first Team 5`);
// else if (day === "wednesday" || day === "thursday") console.log(`same old shit`);
// else if (day === "friday") console.log(`get ready for the weekend`);
// else if (day === "saturday" || day === "sunday") console.log(`chill`);
// else console.log(`not a valid day`);

// const age = 18;
// isOldEnough = age < 18 ? "too young" : "old enough";
// console.log(`The person is ${age} which is ${isOldEnough}.`);

// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

const bill = 10;
const tip = (bill >= 50 && bill <= 300) ? bill / 100 * 15 : bill / 100 * 20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${tip + bill}.`);


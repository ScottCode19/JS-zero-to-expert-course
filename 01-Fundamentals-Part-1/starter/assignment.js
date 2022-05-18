const country = "Scotland";
const contintent = "Europe";
let population = 5500000;
const isIsland = false;
const language = "English";


// console.log("I live in " + country + " which is in " + contintent + ". " + country + " has a population of " + population + ".");
// if (isIsland) console.log(country + " is an island")
// if (!isIsland) console.log(country + " is not an island")

// console.log(language);
// continent = "asia";
// // population /= 2;
// // population += 1;
// // console.log(population)
// // console.log(population > 6000000);
// // console.log(population < 33000000);
// const description = country + " is in " + contintent + ". Its " + population + " people speak " + language + "."
// console.log(description);

let averagePopulation = 33000000;
// if (population < averagePopulation) {
//     console.log(`${country}'s population is ${averagePopulation - population} less than average`);
// }
// else {
//     console.log(`${country}'s population is ${population - averagePopulation} more than average`);
// }

// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;

// numNeighbours = Number(prompt(`How many countries Neighbour your country?`));

// if (numNeighbours === 1) console.log('Only 1 border!');
// else if (numNeighbours > 1) console.log(`more than one border`);
// if (!numNeighbours) console.log("coersion")
// else console.log(`No borders`);


// const language = `french`;
// switch (language) {
//     case `mandarin`:
//         console.log(`${language} has the most number of native speakers`);
//         break;
//     case `spanish`:
//         console.log(`${language} has the 2nd most number of native speakers`);
//         break;
//     case `english`:
//         console.log(`${language} has the 3rd most number of native speakers`);
//         break;
//     default: console.log(`${language} is a great language too`)
// }



console.log(population > averagePopulation ? `${country}'s population is above average.` : `${country}'s population is below average.`);





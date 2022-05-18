'use strict'
// const country = "Scotland";
// const contintent = "Europe";
// let population = 5.5;
// const isIsland = false;
// const language = "English";

// function describeCountry(country, population, capitalCity) {
//     return (`${country} has a population of ${population} million and its capital city is ${capitalCity}.`)
// }

// const descriptionScotland = describeCountry("Scotland", 5.5, "Edinburgh");
// const descriptionJapan = describeCountry("Japan", 23, "Tokyo");
// const descriptionEngland = describeCountry("England", 60, "London");

// console.log(descriptionScotland, descriptionJapan, descriptionEngland);



// const percentOfUk = (population) => population / 68.2 * 100;
// const countryDescription = (country, population) => {
//     const percentNum = percentOfUk(population);
//     return `${country} has a population of ${population}, which is ${percentNum} percent of the uk`
// }
// const scotDescription = countryDescription("Scotland", 5.5);
// const engDescription = countryDescription("England", 56.2);
// const walesDescription = countryDescription("Wales", 3.2);
// const NorthernIrelandDescription = countryDescription("Northern Ireland", 1.8);

// // console.log(scotDescription, engDescription, walesDescription, NorthernIrelandDescription);

// const populations = [56, 5.5, 3.2, 1.9];
// console.log(populations.length == 4);

// const percentages = [percentOfUk(populations[0]), percentOfUk(populations[1]), percentOfUk(populations[2]), percentOfUk(populations[3]),]

// console.log(percentages)

// const neighbours = ["Wales", "England", "Northern Ireland"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop()
// console.log(neighbours);
// if (neighbours.includes("Germany")) {
//     console.log("Germany is a Neighbour");
// }
// else console.log("Probably not central euro");
// let walesIndex = neighbours.indexOf("Wales");
// neighbours[walesIndex] = "Republic of Sweden";
// console.log(neighbours);

// const myCountry = {
//     country: "Scotland",
//     capital: "Edinburgh",
//     language: "English",
//     population: 5.5,
//     neighbours: ["Wales", "England", "Northern Ireland"],
//     describe: function () {
//         this.description = `${myCountry.country} has ${myCountry.population + 2} millon ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbours and its capital is called ${myCountry.capital}.`;
//         return this.description;
//     },
//     checkIsland: function () {
//         this.neighbours == 0 ? this.isIsland = true : this.isIsland = false;
//         return this.isIsland;
//     }

// }

// console.log(myCountry.checkIsland());

// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`voter ${voter} is currently voting`)
// }


// const populations = [56, 5.4, 3.1, 1.9];
// const percentOfUk = (population) => population / 66.65 * 100;
// const percentage2 = [];
// for (let i = 0; i < populations.length; i++) {
//     percentage2.push(percentOfUk(populations[i]));
// }

// console.log(percentage2)

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
//     'Russia']];

// for (let neighbourBlock = 0; neighbourBlock < listOfNeighbours.length; neighbourBlock++) {
//     for (let neighbour = 0; neighbour < (listOfNeighbours[neighbourBlock]).length; neighbour++) {
//         console.log(listOfNeighbours[neighbourBlock][neighbour]);
//     }
// }

// const populations = [56, 5.4, 3.1, 1.9];
// const percentOfUk = (population) => population / 66.65 * 100;
// const percentages3 = [];

// let populationsCounter = 0;
// while (populationsCounter < populations.length) {
//     percentages3.push(percentOfUk(populations[populationsCounter]))
//     populationsCounter++;
// }
// console.log(percentages3);


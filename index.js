// This is just allowing us to use the dataset from the other file. You can ignore this line.
const UFO_SIGHTINGS = require("./nyc-ufo-sightings.json");

// ## Challenges

// * Write a function called `calculateMinutes` that takes in an argument called `seconds` and returns 
// how many minutes it is equal to, rounding down.

function calculateMinutes(seconds){
    let minutes = Math.floor(seconds / 60);
    return minutes 
}

// * Write a function called `getRandomSighting` that returns a **random** ufo sighting object 
// from the `UFO_SIGHTINGS` dataset. 
// If you need help or a hint,(https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array).

function getRandomSighting(dataset){
    let randomIndex = Math.floor(Math.random) * dataset.length; 
    let randomObject = dataset[randomIndex];
    return randomObject;  
}

// * Write a function called `getRandomSightings` that takes a number as an argument and 
// returns an array with that many random sightings.

function getRandomSightings(number){
    let sightings =[];
    for (let i=0; i< number; i++){
        let randomSighting = generateRandomSighting();
        sightings.push (randomSighting);
    }
    return sightings; 
}

// * Write a function called `getLongestSighting` that takes in an array of ufo sightings and returns the longest one.

function getLongestSighting(ufoSightings){
    let longestSighting = "";
    for (let i=0; i < ufoSightings.length; i++){
        if (ufoSightings[i].length > longestSighting.length){

        }
    }
    return longestSighting;
}

// * Write a function called `getComment` that takes in a ufo sighting object as an argument and returns the comment as a string.

function getComment(ufoSightings){
    return ufoSightings.comment.toString(); 
}

// * Write a function called `getFirstWordInComment` that takes a ufo sighting object as an argument and returns
//  the first word in the commnent.

function getFirstWordInComment(ufoSightings){

    // this will be tied to my comment.toString from above

let comment = ufoSightings.comment;
let words = comment.split('');

// the split method should gather an array of words 
    return words[0];

 // this will return the first word of out element index, since we set it at 0 
}

// * Write a function called `shapeTypes` that returns an array of all the different shapes that are 
// present in the `UFO_SIGHTINGS`. There should only be one copy of each shape in the returned array (no duplicates). 

function shapeTypes(UFO_SIGHTINGS){
    let uniqueShapes = new Set();
    // used new Set() to create a Set object 
    for (let sighting of UFO_SIGHTINGS) {
         let shape = sighting.shape;
        uniqueShapes.add(shape); 
    }

}
// * Write a function called `calculateViewDuration` that takes in a ufo sighting object and returns the string 
// `"Short"` if the object's duration is under 120, `"Average"` if the time is between 120 and 240, and `"Long"` if the time is greater than 240.

function calculateViewDuration(ufoSightings){
let ufoSightingDuration = ufoSightings.duration; 

if(ufoSightingDuration < 120){
    return 'Short'} 
        else if(ufoSightingDuration >= 120 && ufoSightingDuration <= 239) {
    return 'Average'} 
        else if (ufoSightingDuration > 240){
    return 'Long'}
}

// * Write a function that calculates the average duration of all sighting objects in `UFO_SIGHTINGS`.

function calculateAverage(UFO_SIGHTINGS){
   let totalDuration = 0;
   let numSightings = UFO_SIGHTINGS.length;

        for(let sighting of UFO_SIGHTINGS){
        totalDuration += sighting.duration
    }
    
        let average = totalDuration / numSightings; 

    return average; 
}

// * Write a function that returns the first ufo sighting in `UFO_SIGHTINGS` that's over 10 minutes long.

const overTenMinSightings = (UFO_SIGHTINGS) => {
    for (let sighting of UFO_SIGHTINGS) {
      if (sighting.duration > 10) {
        return sighting}
    }
  }
// * Write a function that returns an array of all the comments from ufo sightings that were less than one minute.

function underOneMinSightings() {
    let shortSightings = [];
      for (let sighting of UFO_SIGHTINGS) {
      if (sighting.duration < 1) {
        shortSightings.push(sighting.comment)}
    }
    return shortSightings;
}
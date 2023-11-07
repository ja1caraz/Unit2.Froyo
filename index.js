// Prompt the user for a list of flavors separated by commas.
const userInputString = prompt("Please enter from the following ice cream flavors separated by commas.", 
                        "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

// Split the string of flavors into an array of strings.
const stringArray = userInputString.split(",");

// Create an object to count each ice cream flavor.
const icecream = {
  vanilla: 0,
  strawberry: 0,
  coffee: 0
};

// Count the number of each flavor in the array.
for (let i = 0; i < stringArray.length; i++) {
  const flavor = stringArray[i];
  if (icecream.hasOwnProperty(flavor)) {
    icecream[flavor]++;
  }
}

// Count the total number of objects.
let totalIceCreams = 0;
for (const flavorCount of Object.values(icecream)) {
  totalIceCreams += flavorCount;
}

// Define functions for each flavor.
function getLength(icecream) {
  return Object.keys(icecream).length;
}

function getVanilla(icecream) {
  return icecream.vanilla;
}

function getStrawberry(icecream) {
  return icecream.strawberry;
}

function getCoffee(icecream) {
  return icecream.coffee;
}

// Display the results in the console.
console.log(icecream);
console.log(`You have ordered a total of ${getLength(icecream)} different ice cream flavors.`);
console.log(`You have ordered a total of ${totalIceCreams} ice creams.`);
console.log(`You have ordered a total of ${getVanilla(icecream)} Vanilla.`);
console.log(`You have ordered a total of ${getStrawberry(icecream)} Strawberry.`);
console.log(`You have ordered a total of ${getCoffee(icecream)} Coffee.`);

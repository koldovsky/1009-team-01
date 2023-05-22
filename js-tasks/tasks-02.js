// -------------------------------------------------- 1 ----------------------------------------------------------------
// Convert a string to an array:             https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
const stringToArray = string => string.split(" ");


// -------------------------------------------------- 2 ----------------------------------------------------------------
// DNA to RNA Conversion:                           https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
const DNAtoRNA = dna => dna.replaceAll("T", "U");


// -------------------------------------------------- 3 ----------------------------------------------------------------
// Find Maximum and Minimum Values of a List     https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = list => Math.min(...list);
const max = list => Math.max(...list);

// another solution:
const min = (list) =>
  list.reduce((minValue, e) => (e < minValue ? e : minValue));
const max = (list) =>
  list.reduce((maxValue, e) => (e > maxValue ? e : maxValue));

// -------------------------------------------------- 4 ----------------------------------------------------------------
// Smallest value of an array:                   https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    const minElement = Math.min(...arr);
    return toReturn === "index"
      ? arr.findIndex((number) => number === minElement)
      : minElement;
}

// -------------------------------------------------- 5* ----------------------------------------------------------------
//                   https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
const warnTheSheep = (queue) =>
  queue.at(-1) === "wolf"
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        queue.length - (queue.indexOf("wolf") + 1)
      }! You are about to be eaten by a wolf!`;
//another solution 
const warnTheSheep = queue => {
    const reverseQueue = queue.reverse();
    const indexOfWolf = reverseQueue.indexOf("wolf");
    if (indexOfWolf === 0) {
      return "Pls go away and stop eating my sheep";
    } else {
      return `Oi! Sheep number ${indexOfWolf}! You are about to be eaten by a wolf!`
    }
}

//another solution
function warnTheSheep(queue) {
    const sheepFlock = queue.reverse();
    return sheepFlock[0] === "wolf"
      ? "Pls go away and stop eating my sheep"
      : `Oi! Sheep number ${sheepFlock.findIndex(
          (wolfPosition) => wolfPosition === "wolf"
        )}! You are about to be eaten by a wolf!`;
  }


// -------------------------------------------------- 6* ----------------------------------------------------------------
//                   https://www.codewars.com/kata/beginner-lost-without-a-map
const maps = x => x.map(value => value * 2);

// -------------------------------------------------- 7* ----------------------------------------------------------------
//                   https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
    return (
      arr.find((elem, index) => {
        if (index === 0) return false;
        return elem !== arr[index - 1] + 1;
      }) ?? null
    );
 }

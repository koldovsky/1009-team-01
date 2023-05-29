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

//ADDITIONAL TASKS
// 14
// You Can't Code Under Pressure #1
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = (i) => i * 2;

// 15
// Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
const century = (year) => Math.ceil(year / 100);

// 16
// Function 3 - multiplying two numbers (retired)
// https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
const multiply = (operand1, operand2) => operand1 * operand2;

// 17
// Beginner Series #4 Cockroach
// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
const cockroachSpeed = (s) => Math.floor((s * 100000) / (60 * 60));

// 18
// Third Angle of a Triangle
// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
const otherAngle = (firstAngleOfTriangle, secondAngleOfTriangle) =>
  180 - firstAngleOfTriangle - secondAngleOfTriangle;

// 19
// Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - 2 * sonYearsOld);

// 20
// Get Nth Even Number
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = (n) => n * 2 - 2;

// 21
// What's the real floor
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
const getRealFloor = (n) => (n >= 1 ? (n >= 13 ? n - 2 : n - 1) : n);

// 22
// Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (h, m, s) => (h * 60 * 60 + m * 60 + s) * 1000;

// 23
// Is n divisible by x and y?
// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
const isDivisible = (n, x, y) => !(n % x || n % y);

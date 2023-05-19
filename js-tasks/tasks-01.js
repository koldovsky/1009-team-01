// ---------- 1 ------------
// Messi Goals              https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
//
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// ---------- 2 ------------
// Make negative            https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
//

const makeNegative = num => num >= 0 ? -num : num;


// ---------- 3 ------------
// Game Move               https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
//

const move = (position, roll) => {
    const newPosition = position + roll * 2;
    return newPosition;
}


// ---------- 4 ------------
// Personalized Message   https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
//

const greet = (name, owner) => {
    const greeting = (name == owner) ? 'Hello boss' : 'Hello guest';
    return greeting;
}


// ---------- 5 ------------
// Keep Hydrated          https://www.codewars.com/kata/keep-hydrated-1/train/javascript
//

const litres = (time) => {
    const waterUsage = 0.5;
    const waterTaken = Math.floor(time * waterUsage);
    return waterTaken;
}

// ---------- 6 ------------
// Opposites Attract      https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
//

const lovefunc = (flower1, flower2) => !!((flower1 + flower2) % 2);

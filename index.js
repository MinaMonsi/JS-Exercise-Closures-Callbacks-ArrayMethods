// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 * Counter1 is a higher order function that takes another function as an arguement.  It uses
 * the data inside the function.  Counter2 is not a higher order function.  It retieves its
 * data from outside the main function or counter1.
 *
 * 2. Which of the two uses a closure? How can you tell?
 * Counter2 is the closure.  The inner function has access to the variables and parameters of
 * the outer function.
 *
 * Counter1 is the main function and counter2 draws out information from the main function
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2
 * be better? Counter1 can be used throughout the rest of the program and counter2 does not
 * affect the entire program.  Counter2 is used to access data from counter1.
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  let score = Math.floor(3 * Math.random());
  return score;
}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(scoreInnings, numInnings) {
  let homeScore = 0;
  let awayScore = 0;
  for (i = 0; i < scoreInnings; i++) {
    homeScore += numInnings();
  }
  for (i = 0; i < scoreInnings; i++) {
    awayScore += numInnings();
  }
  return {
    home: homeScore,
    away: awayScore,
  };
}

console.log(finalScore(9, inning));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore, inning) {
  let finalScore = { away: 0, home: 0 };
  for (let i = 0; i <= inning; i++) {
    finalScore.home += getInningScore();
    finalScore.away += getInningScore();
    console.log(`${i} inning: ${finalScore.home} - ${finalScore.away}`);
  }
}

console.log(`final `);

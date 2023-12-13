import { time, distance } from '../inputs/day6.js';

const strToArr = (str) => str.trim().match(/\d+/g).map(Number);

const distances = strToArr(distance);
const times = strToArr(time);

const races = [];
for (let i = 0; i < times.length; i += 1) {
    races.push({
        time: times[i],
        distance: distances[i],
    });
}

const waysToWinArr = [];
races.forEach((race) => {
    let nrOfWays = 0;
    for (let i = 0; i <= race.time; i += 1) {
        if (i * (race.time - i) > race.distance) {
            nrOfWays += 1;
        }
    }
    waysToWinArr.push(nrOfWays);
});

const totalWaysToWin = waysToWinArr.reduce((a, b) => a * b, 1);
console.log(totalWaysToWin);
// Part 1: 800280
// Part 2: 45128024

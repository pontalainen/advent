import data from '../inputs/day_4.js';

const getNrsArr = (nrs) => nrs.split(' ').filter((nr) => nr.trim().length !== 0);

let arrTotal = 0;
data.forEach((line) => {
    const lineNrs = line.split(': ')[1].split(' | ');
    const winningNrs = getNrsArr(lineNrs[0]);
    const myNrs = getNrsArr(lineNrs[1]);

    let lineTotal = 0;
    myNrs.forEach((nr) => {
        if (winningNrs.includes(nr)) {
            // eslint-disable-next-line no-unused-expressions
            lineTotal === 0 ? (lineTotal = 1) : (lineTotal *= 2);
        }
    });
    arrTotal += lineTotal;
});
console.log(arrTotal);
// 25174

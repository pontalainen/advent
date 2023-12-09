import { data, letterNumbers } from '../inputs/day1.js';

let totalSum = 0;
data.forEach((line) => {
    let numberLine = line;
    letterNumbers.forEach((ln) => {
        numberLine = numberLine.replaceAll(ln.letters, ln.value);
    });

    const lineArr = numberLine.split('');
    const lineInts = [lineArr.filter((char) => Number(char))];
    const sum = lineInts.map((l) => l[0] + l[l.length - 1]);
    totalSum += Number(sum[0]);
});
console.log(totalSum);
// TODO 54170 not correct

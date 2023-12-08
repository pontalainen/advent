import { data, letterNumbers } from './data.js';

let totalSum = 0;
data.map((line) => {
    let numberLine = line;
    letterNumbers.map((ln) => {
        numberLine = numberLine.replaceAll(ln.letters, ln.value);
    });

    const lineArr = numberLine.split('');
    const lineInts = [
        lineArr.filter((char) => {
            return Number(char);
        }),
    ];
    const sum = lineInts.map((line) => {
        return line[0] + line[line.length - 1];
    });
    totalSum += Number(sum[0]);
});
console.log(totalSum);
// TODO 54170 not correct

import { data } from '../inputs/day1.js';

let totalSum = 0;
data.forEach((line) => {
    const lineArr = line.split('');
    const lineInts = [lineArr.filter((char) => Number(char))];
    const sum = lineInts.map((l) => l[0] + l[l.length - 1]);
    totalSum += Number(sum[0]);
});
console.log(totalSum);
// 53921

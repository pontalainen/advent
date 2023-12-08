import { data } from './data.js';

let totalSum = 0;
data.map((line) => {
    const lineArr = line.split('');
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
// 53921

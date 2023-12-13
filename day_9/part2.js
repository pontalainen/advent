import data from '../inputs/day9.js';

const dataArr = data.map((row) => row.split(' ').map(Number));

const allZero = (arr) => arr.every((val) => val === arr[0] && arr[0] === 0);
const lastElOf = (arr) => arr.slice(-1)[0];

let total = 0;
dataArr.forEach((row) => {
    const prevRows = [row];
    while (true) {
        const prevRow = prevRows[0];
        const currentRow = [];

        for (let i = 0; i < prevRow.length - 1; i += 1) {
            currentRow.push(prevRow[i + 1] - prevRow[i]);
        }

        prevRows.unshift(currentRow);
        if (allZero(currentRow)) {
            break;
        }
    }

    for (let i = 1; i < prevRows.length; i += 1) {
        prevRows[i].unshift(prevRows[i][0] - prevRows[i - 1][0]);
    }
    total += lastElOf(prevRows)[0];
});
console.log(total);
// 1118

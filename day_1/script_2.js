import data from './data.js';

const letterNumbers = [
    {
        letters: 'one',
        value: '1',
    },
    {
        letters: 'two',
        value: '2',
    },
    {
        letters: 'three',
        value: '3',
    },
    {
        letters: 'four',
        value: '4',
    },
    {
        letters: 'five',
        value: '5',
    },
    {
        letters: 'six',
        value: '6',
    },
    {
        letters: 'seven',
        value: '7',
    },
    {
        letters: 'eight',
        value: '8',
    },
    {
        letters: 'nine',
        value: '9',
    },
];

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

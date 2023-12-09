import data from '../inputs/day3.js';

const r = /\d+/g;
const newData = data.map((line) => {
    let prevStart = 0;
    return {
        string: line.split(''),
        numbers: line.match(r).map((number) => {
            const start = line.indexOf(number, prevStart);
            prevStart = start;
            return {
                value: number,
                start,
            };
        }),
    };
});

let lineSymbols = '';
data.forEach((line) => {
    lineSymbols += Array.from(new Set(line)).join('');
});

const symbols = Array.from(new Set(lineSymbols))
    .join('')
    .replace(/[\d.]+/g, '');

const isPart = (number, line) => {
    const start = number.start - 1;
    const end = start + number.value.length + 1;
    for (let i = start; i <= end; i += 1) {
        if (symbols.includes(line.string[i])) {
            return true;
        }
    }
    return false;
};

let partSum = 0;
newData.forEach((line, index) => {
    if (index !== 0) {
        line.numbers.forEach((number) => {
            number.isPart = isPart(number, newData[index - 1]);
            if (number.isPart) {
                partSum += Number(number.value);
            }
        });
    }

    line.numbers.forEach((number) => {
        if (number.isPart !== true) {
            number.isPart = isPart(number, newData[index]);
            if (number.isPart) {
                partSum += Number(number.value);
            }
        }
    });

    if (index !== newData.length - 1) {
        line.numbers.forEach((number) => {
            if (number.isPart !== true) {
                number.isPart = isPart(number, newData[index + 1]);
                if (number.isPart) {
                    partSum += Number(number.value);
                }
            }
        });
    }
});
console.log(partSum);
// TODO 527651

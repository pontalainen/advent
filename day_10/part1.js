import { data, symbols } from '../inputs/day10.js';

const dataArrs = data.map((row) => row.split(''));

const start = {
    row: 0,
    index: 0,
};

for (let i = 0; i < dataArrs.length; i += 1) {
    if (dataArrs[i].indexOf('S') !== -1) {
        start.row = i;
        start.index = dataArrs[i].indexOf('S');
        break;
    }
}

const hasBottom = () => {};

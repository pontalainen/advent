import { data } from './data.js';

const maxes = {
    red: 12,
    green: 13,
    blue: 14,
};

let gameIdSum = 0;
data.map((line) => {
    let possible = true;
    line.split(': ')[1]
        .split('; ')
        .map((set) => {
            const formatter = (color) => {
                let colorString = set.split(', ').filter((string) => string.includes(color))[0];

                if (typeof colorString === 'string') {
                    return Number(colorString.replace(` ${color}`, ''));
                }
                return 0;
            };
            if (
                possible !== true ||
                formatter('red') > maxes.red ||
                formatter('green') > maxes.green ||
                formatter('blue') > maxes.blue
            ) {
                possible = false;
            }
        });
    if (possible) {
        gameIdSum += Number(line.split(': ')[0].replace('Game ', ''));
    }
});
console.log(gameIdSum);

import { data } from './data.js';

let gamePowerSum = 0;
data.map((line) => {
    let maxes = {
        red: 0,
        green: 0,
        blue: 0,
    };

    line.split(': ')[1]
        .split('; ')
        .map((set) => {
            Object.keys(maxes).map((color) => {
                let colorString = set.split(', ').filter((string) => string.includes(color))[0];
                if (typeof colorString === 'string') {
                    const colorNumber = Number(colorString.replace(` ${color}`, ''));
                    if (Number(colorString.replace(` ${color}`, '')) > maxes[color]) {
                        maxes[color] = colorNumber;
                    }
                }
            });
        });
    gamePowerSum += maxes.red * maxes.green * maxes.blue;
});
console.log(gamePowerSum);
// 72513

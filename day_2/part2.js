import data from '../inputs/day2';

let gamePowerSum = 0;
data.forEach((line) => {
    const maxes = {
        red: 0,
        green: 0,
        blue: 0,
    };

    line.split(': ')[1]
        .split('; ')
        .forEach((set) => {
            Object.keys(maxes).forEach((color) => {
                const colorString = set.split(', ').filter((string) => string.includes(color))[0];
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

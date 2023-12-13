import { seeds, maps } from '../inputs/day5.js';

const seedsArr = seeds.split(' ');

// eslint-disable-next-line no-restricted-syntax
for (const key in maps) {
    if (Object.prototype.hasOwnProperty.call(maps, key)) {
        maps[key] = maps[key].map((element) => {
            const line = element.split(' ');
            return {
                drt: line[0],
                srs: line[1],
                rl: line[2],
            };
        });
    }
}

seedsArr.forEach((seed) => {});

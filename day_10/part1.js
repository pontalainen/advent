// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-fallthrough */
import { data, symbols } from '../inputs/day10.js';

const dataArrs = data.map((row) => row.split(''));

const start = {
    ver: 0,
    hor: 0,
};

for (let i = 0; i < dataArrs.length; i += 1) {
    if (dataArrs[i].indexOf('S') !== -1) {
        start.ver = i;
        start.hor = dataArrs[i].indexOf('S');
        break;
    }
}

const prevCoords = start;

// const lastElOf = (arr) => arr.slice(-1)[0];
const dirs = {
    north: (ver, hor) => ({
        ver: ver - 1,
        hor,
    }),
    east: (ver, hor) => ({
        ver,
        hor: hor + 1,
    }),
    south: (ver, hor) => ({
        ver: ver + 1,
        hor,
    }),
    west: (ver, hor) => ({
        ver,
        hor: hor - 1,
    }),
};

let totalStepsAround = 0;
const checkDir = (ver, hor, dir) => symbols[dataArrs[ver][hor]][dir];
const isStart = (ver, hor) => dataArrs[ver][hor] === 'S';
const checkPath = (ver, hor) => {
    const north = dirs.north(ver, hor);
    const east = dirs.east(ver, hor);
    const south = dirs.south(ver, hor);
    const west = dirs.west(ver, hor);

    switch (true) {
        case isStart(north.ver, north.hor) && totalStepsAround > 1:
            totalStepsAround += 1;
            break;
        case isStart(east.ver, east.hor) && totalStepsAround > 1:
            totalStepsAround += 1;
            break;
        case isStart(south.ver, south.hor) && totalStepsAround > 1:
            totalStepsAround += 1;
            break;
        case isStart(west.ver, west.hor) && totalStepsAround > 1:
            totalStepsAround += 1;
            break;
        default:
            console.log(prevCoords, 'prevCoords');
            console.log(ver, 'ver');
            console.log(hor, 'hor');
            console.log(dataArrs[prevCoords.ver][prevCoords.hor], 'prevCoords');
            switch (true || 1) {
                case checkDir(north.ver, north.hor, 'north'):
                    if (prevCoords.ver !== north.ver && prevCoords.hor !== north.hor) {
                        prevCoords.ver = north.ver;
                        prevCoords.hor = north.hor;
                        totalStepsAround += 1;
                        checkPath(prevCoords.ver, prevCoords.hor);
                        break;
                    }
                case checkDir(east.ver, east.hor, 'east'):
                    if (prevCoords.ver !== east.ver && prevCoords.hor !== east.hor) {
                        prevCoords.ver = east.ver;
                        prevCoords.hor = east.hor;
                        totalStepsAround += 1;
                        checkPath(prevCoords.ver, prevCoords.hor);
                        break;
                    }
                case checkDir(south.ver, south.hor, 'south'):
                    if (prevCoords.ver !== south.ver && prevCoords.hor !== south.hor) {
                        prevCoords.ver = south.ver;
                        prevCoords.hor = south.hor;
                        totalStepsAround += 1;
                        checkPath(prevCoords.ver, prevCoords.hor);
                        break;
                    }
                case checkDir(west.ver, west.hor, 'west'):
                    if (prevCoords.ver !== west.ver && prevCoords.hor !== west.hor) {
                        prevCoords.ver = west.ver;
                        prevCoords.hor = west.hor;
                        totalStepsAround += 1;
                        checkPath(prevCoords.ver, prevCoords.hor);
                        break;
                    }
                default:
                    console.log('something went wrong here :/');
            }
    }
};

checkPath(start.ver, start.hor);

// console.log(totalStepsAround);

import { data, possibleTypes, valueOrder } from './data.js';

function line(hand, bid) {
    return {
        hand,
        bid,
        handValue: 1,
    };
}

const objectData = data.map((element) => line(element.slice(0, 5), element.slice(6, element.length)));

const equalArray = (a, b) => {
    return a.length === b.length && a.every((value, index) => value === b[index]);
};

const sortedHands = objectData.map((element) => {
    const charMap = {};
    for (const char of element.hand) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    const handType = Object.values(charMap).sort();
    possibleTypes.map((type) => {
        if (equalArray(handType, type.hand)) {
            element.handValue = type.value;
        }
        return type;
    });
    return element;
});

const sortedData = sortedHands.sort((a, b) => {
    if (a.handValue > b.handValue) {
        return 1;
    }
    if (a.handValue < b.handValue) {
        return -1;
    }
    for (let i = 0; i <= 5; i += 1) {
        if (valueOrder.indexOf(a.hand[i]) < valueOrder.indexOf(b.hand[i])) {
            return 1;
        }
        if (valueOrder.indexOf(a.hand[i]) > valueOrder.indexOf(b.hand[i])) {
            return -1;
        }
    }
    return 0;
});

let totalWinnings = 0;

sortedData.map((line, index) => {
    const winnings = Number(line.bid) * (index + 1);
    totalWinnings += winnings;
    return line;
});

console.log(totalWinnings);
// 254024898

import data from '../inputs/day_4.js';

const getNrsArr = (nrs) => nrs.split(' ').filter((nr) => nr.trim().length !== 0);

const allCards = data.map((line) => ({
    value: line,
    copies: 1,
}));

let cardsWithCopies = 0;
allCards.forEach((line, index) => {
    const lineNrs = line.value.split(': ')[1].split(' | ');
    const winningNrs = getNrsArr(lineNrs[0]);
    const myNrs = getNrsArr(lineNrs[1]);

    let lineTotal = 0;
    myNrs.forEach((nr) => {
        if (winningNrs.includes(nr)) {
            lineTotal += 1;
        }
    });

    for (let i = 1; i <= lineTotal && index + i < allCards.length; i += 1) {
        allCards[index + i].copies += line.copies;
    }
});

allCards.forEach((line) => {
    cardsWithCopies += line.copies;
});
console.log(cardsWithCopies);
// 6420979

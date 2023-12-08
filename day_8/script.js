import { turnsRaw, nodesRaw } from './data.js';

const turns = turnsRaw.split('');
const nodes = nodesRaw.map((node) => {
    return {
        base: node.slice(0, 3),
        L: node.slice(7, 10),
        R: node.slice(12, 15),
    };
});

const startNode = nodes.find((node) => node.base === 'AAA');
let currentNode;
let totalTurns = 0;
for (let done = false; done === false; ) {
    turns.map((turn) => {
        currentNode = nodes.find((node) => node.base === (currentNode ? currentNode[turn] : startNode[turn]));
        totalTurns += 1;
        if (currentNode.base === 'ZZZ') {
            console.log(totalTurns);
            done = true;
        }
    });
}

import { turnsRaw, nodesRaw } from './data.js';

const turns = turnsRaw.split('');
const nodes = nodesRaw.map((node) => {
    return {
        base: node.slice(0, 3),
        baseEnd: node.slice(2, 3),
        L: node.slice(7, 10),
        R: node.slice(12, 15),
    };
});

const startNodes = nodes.filter((node) => node.baseEnd === 'A');
let totalTotal = 0;
startNodes.map((startNode) => {
    let currentNode;
    let totalTurns = 0;
    for (let done = false; done === false; ) {
        turns.map((turn) => {
            currentNode = nodes.find((node) => node.base === (currentNode ? currentNode[turn] : startNode[turn]));
            totalTurns += 1;
            if (currentNode.baseEnd === 'Z') {
                totalTotal += totalTurns;
                done = true;
            }
        });
    }
});
console.log(totalTotal);

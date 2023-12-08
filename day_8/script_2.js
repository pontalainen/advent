import { turnsRaw, nodesRaw } from './data.js';

const turns = turnsRaw.split('');
const nodes = nodesRaw.map((node) => {
    return {
        base: node.slice(0, 3),
        baseEnd: node.slice(2, 3),
        L: node.slice(7, 10),
        R: node.slice(12, 15),
        turnsTaken: 0,
    };
});

const startNodes = nodes.filter((node) => node.baseEnd === 'A');

while (true) {
    startNodes.map((startNode) => {
        let currentNode;
        let totalTurns = 0;

        while (true) {
            const turn = turns[totalTurns % turns.length];
            currentNode = nodes.find((node) => node.base === (currentNode ? currentNode[turn] : startNode[turn]));
            totalTurns += 1;
            if (currentNode.baseEnd === 'Z') {
                startNode.turnsTaken = totalTurns;
                break;
            }
        }
    });
    break;
}

const turnsArr = startNodes.map((node) => {
    return node.turnsTaken;
});

const gcd = (a, b) => (a ? gcd(b % a, a) : b);

const lcm = (a, b) => (a * b) / gcd(a, b);

console.log(turnsArr.reduce(lcm));

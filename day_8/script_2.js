import { turnsRaw, nodesRaw } from './data.js';

const turns = turnsRaw.split('');
const nodes = nodesRaw.map((node) => {
    return {
        base: node.slice(0, 3),
        baseEnd: node.slice(2, 3),
        L: node.slice(7, 10),
        R: node.slice(12, 15),
        previousEnd: null,
        turnsTaken: 0,
    };
});

const startNodes = nodes.filter((node) => node.baseEnd === 'A');

let totalTotal = 0;
for (let allSame = false; allSame === false; ) {
    startNodes.map((startNode) => {
        let currentNode;
        let totalTurns = 0;

        for (let done = false; done === false; ) {
            turns.map((turn) => {
                currentNode = nodes.find(
                    (node) =>
                        node.base ===
                        (currentNode
                            ? currentNode.previousEnd
                                ? currentNode.previousEnd[turn]
                                : currentNode[turn]
                            : startNode[turn]),
                );

                totalTurns += 1;
                if (currentNode.baseEnd === 'Z') {
                    startNode.previousEnd = currentNode;
                    startNode.turnsTaken += totalTurns;
                    done = true;
                }
            });
        }
    });

    const allSameArray = startNodes.filter(
        (node) => node.turnsTaken === startNodes[0].turnsTaken && startNodes[0].turnsTaken !== 0,
    );
    console.log(allSameArray);

    if (allSameArray.length === startNodes.length) {
        console.log(startNodes[0].turnsTaken);
        allSame = true;
    }
}
console.log(totalTotal);

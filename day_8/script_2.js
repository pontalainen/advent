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

// If not all nodes are on the same turn when having found a Z, this repeats
for (let allSame = false; allSame === false; ) {
    // Iterates over each starting node
    startNodes.map((startNode) => {
        let currentNode;
        let totalTurns = 0;
        // Restarts the turn iteration of the array ends
        for (let done = false; done === false; ) {
            // Iterates over all turns
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

    // A filtered array with only startNodes with the same turnsTaken as the first startNode
    const allSameArray = startNodes.filter(
        (node) => node.turnsTaken === startNodes[0].turnsTaken && startNodes[0].turnsTaken !== 0,
    );
    console.log(allSameArray);

    // If all startNodes are included in the allSameArray the total turns taken has been found
    if (allSameArray.length === startNodes.length) {
        console.log(startNodes[0].turnsTaken);
        allSame = true;
    }
}
console.log(totalTotal);

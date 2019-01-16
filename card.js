const cards = [];

addCards = () => {
    for(let iterator = 1; iterator < 53; iterator++) {
        cards.push(iterator);
    }
    cards.push('A');
    cards.push('B');
}
// Helper function to rotate the array
function arrayRotate(array) {
    array.unshift(array.pop());
    return array
}

// Helper function to move an element to a particular place
function move (from, to, array) {
    array.splice(to, 0, array.splice(from, 1)[0]);
}

/**
 * The first letter should move 2 times when 'A' moves once
 */
moveA = (cards) => {
    // Store the first card
    const first = cards[0];

    // 'A's movement is going to cause all other elements to move once
    const rotatedArray = arrayRotate(cards);

    // We expect the new index of the first element to be 2 since it has to move twice
    move(rotatedArray.indexOf(first), 2, rotatedArray);
    return rotatedArray;
}

const solutionOneTestCards = [1, 2, 3, 4, 'A', 'B'];
console.log(`Solution one test cards: ${solutionOneTestCards}`)
console.log(`Solution one output: ${moveA(solutionOneTestCards)}`); // -> [ B ,2 ,1 ,3 ,4 ,A ]

/**
 *  This moves all elements after 'A' and places them after 'B'
 *  It also moves all elements after 'B' and places them after 'A'
 **/
function swapCardsAfterLetters(cards) {
    const indexOfA = cards.indexOf('A');
    const indexOfB = cards.indexOf('B');
    const firstIndex = Math.min(indexOfA, indexOfB);
    const lastIndex = Math.max(indexOfA, indexOfB);
    const elementsAfterFirstLetter = cards.slice(firstIndex + 1, lastIndex);
    const numberToAdd = (cards.length - 1) - lastIndex;
    const firstLetters = cards.slice(0, firstIndex);

    const addedElements = [];
    for(let i = 0; i < numberToAdd; i++){
        addedElements.push(elementsAfterFirstLetter.shift());
    }
    const elementsAfterLastLetter = lastIndex !== (cards.length - 1)? cards.slice(lastIndex + 1) : [];
    return [
        ...elementsAfterFirstLetter,
        cards[firstIndex],
        ...elementsAfterLastLetter,
        ...firstLetters,
        cards[lastIndex],
        ...addedElements
    ];
}

const solutionTwoTestCards = [1, 'A', 3, 4, 1, 'B', 2];
console.log(`Solution two test cards: ${solutionTwoTestCards}`)
console.log(`Solution two output: ${swapCardsAfterLetters(solutionTwoTestCards)}`); // -> [ 4 , 1 , A , 2 , 1 , B ,3 ]

/**
 * This question required us to get the last element of either 'A' or 'B'
 * and use the element after it to determine the number of times the elements would move
 */
function rotateCardsWithValueAfterLastLetter(cards) {
    const indexOfA = cards.indexOf('A');
    const indexOfB = cards.indexOf('B');
    const lastIndex = Math.max(indexOfA, indexOfB);
    if(!(lastIndex === cards.length - 1)) {
        const bound = cards[lastIndex + 1]
        for(let i = 0; i < bound; i++) {
            arrayRotate(cards);
        }
    }
    return cards;
}

const solutionThreeTestCards = [1, 2, 3, 4, 'A', 'B', 2];
console.log(`Solution three test cards: ${solutionThreeTestCards}`)
console.log(`Solution three output: ${rotateCardsWithValueAfterLastLetter(solutionThreeTestCards)}`); // -> [ B, 2, 1, 2, 3, 4, A ]

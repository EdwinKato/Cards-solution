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

moveA = (cards) => {
    // Store the first card
    const first = cards[0];

    // 'A's movement is going to cause all other elements to move once
    const rotatedArray = arrayRotate(cards);

    // We expect the new index of the first element to be 2 since it has to move twice
    move(rotatedArray.indexOf(first), 2, rotatedArray);
    return rotatedArray;
}

const testArray = [1,2,3,4,'A','B'];
//Test move cards
console.log(`Cards: ${testArray}`)
console.log(`New Cards: ${moveA(testArray)}`);


// The card after the last index determines the number of times all the cards will move
function solutionFour(cards) {
    const indexOfA = cards.indexOf('A');
    const indexOfB = cards.indexOf('B');
    const lastIndex = Math.max((indexOfA, indexOfB));
    if(!(lastIndex === cards.length - 1)) {
        const bound = cards[lastIndex + 1]
        for(let i = 0; i < bound; i++) {
            arrayRotate(cards);
        }
    }
    return cards;
}

//Test solution four
const newTestArray = [1,2,3,4,'A','B', '2'];
console.log(`Solution four test cards: ${newTestArray}`)
console.log(`Cards: ${solutionFour(newTestArray)}`);
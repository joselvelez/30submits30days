const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]

function getArraySet(arrayLength) {
    arraySet = new Set();
    arrayDoubled = [];

    while(arraySet.size < arrayLength) {
        arraySet.add(letters[Math.floor(Math.random() * letters.length)]);
    }

    arrayDoubled.push(...arraySet, ...arraySet);
    return arrayDoubled;
}

// Helper function to get a random array of element indexes for a given array
function getRandomArrayIndexes(arr) {
    const arrLength = arr.length;
    const randomSet = new Set();

    while (randomSet.size != arrLength) {
        randomSet.add(Math.floor(Math.random() * arrLength));
    }
    return [...randomSet];
}

function constructGrid(dimLength) {
    return () => {
        const setSize = (dimLength**2) / 2;
        const arraySet = getArraySet(setSize);
        let randomArray = getRandomArrayIndexes(arraySet);
        const mainDiv = document.getElementById('main');

        // If the grid size button is selected, the game resets.
        mainDiv.innerHTML = "";

        // Set the game state for tracking the number of turns taken,
        // the number of successful matches, and the value of the two
        // consecutive flips during a turn.
        // Each turn consists of 2 consecutive square selections.

        const gameState = document.createElement('div');
        gameState.setAttribute('class', 'game-state');
        gameState.setAttribute('id', 'game-state');

        const gameStatus = document.createElement('div');
        gameStatus.setAttribute('class', 'game-status');
        gameStatus.setAttribute('id', 'game-status');

        const gameProceed = document.createElement('button');
        gameProceed.innerText = 'Continue';
        gameProceed.setAttribute('id', 'game-proceed');
        gameProceed.setAttribute('class', 'game-proceed-hide');

        const gameTurns = document.createElement('div');
        gameTurns.setAttribute('class', 'hideTurns');
        gameTurns.setAttribute('id', 'turns');

        let turns = 0;
        let flips = 0;
        let matches = 0;
        let flipOneValue = null;
        let flipOneBtn = null;
        let flipTwoValue = null;
        let flipTwoBtn = null;
        gameTurns.textContent = `Turns: ${turns}`;
        gameStatus.textContent = 'Pick two squares!';

        function checkMatch(flipOne, flipTwo) {
            if (flipOne === flipTwo) {
                return true;
            } else {
                return false;
            }
        }

        function noMatchNextTurn() {
            flips = 0;
            turns ++;
            gameTurns.textContent = `Turns: ${turns}`;
            gameProceed.classList.replace('game-proceed-display', 'game-proceed-hide');
            flipOneBtn.classList.replace('matched', 'unmatched');
            flipOneBtn.disabled = false;
            flipOneValue = null;
            flipTwoBtn.classList.replace('matched', 'unmatched');
            flipTwoBtn.disabled = false;
            flipTwoValue = null;

            const btns = document.querySelectorAll('button.pause');
            btns.forEach(item => {
                item.classList.remove('pause');
                item.classList.add('unmatched');
            })
        }

        function playTurn(btn, boxValue) {
            return () => {
                // Check if all squares have been matched
                if (matches === setSize) {
                    gameStatus.textContent = 'Congrats! You matched them all!';
                } else {
                    // check for first flip
                    if (flips === 0) {
                        flips = 1;
                        flipOneValue = boxValue;
                        flipOneBtn = btn;
                        btn.disabled = true;
                        btn.classList.replace('unmatched', 'matched');
                        gameStatus.textContent = 'Pick one more square!';
                    } else {
                        flipTwoBtn = btn;
                        flipTwoValue = boxValue;
                        // check for second flip & if both flips match and all matches have been found
                        if (flips === 1 && checkMatch(flipOneValue, flipTwoValue) && (matches === setSize - 1)) {
                            flipTwoValue = boxValue;
                            flipTwoBtn = btn;
                            btn.disabled = true;
                            btn.classList.replace('unmatched', 'matched');
                            gameStatus.textContent = 'Congrats! You matched them all!';
                        // check if second flip and if both flips match and not all matches have been found
                        } else if (flips === 1 && checkMatch(flipOneValue, flipTwoValue)) {
                            flipTwoBtn.classList.replace('unmatched', 'matched');
                            gameStatus.textContent = 'Nice Job! Keep going!';
                            matches ++;
                            turns ++;
                            flips = 0;
                            flipOneValue = null;
                            flipTwoValue = null;
                            gameTurns.textContent = `Turns: ${turns}`;
                        // check if second flip and both flips to not match
                        } else if (flips === 1 && !checkMatch(flipOneValue, flipTwoValue)) {
                            btn.disabled = true;
                            btn.classList.replace('unmatched', 'matched');
                            gameStatus.textContent = 'No dice. Try again.';
                            gameProceed.addEventListener('click', noMatchNextTurn);
                            gameProceed.classList.replace('game-proceed-hide', 'game-proceed-display');
                            const btns = document.querySelectorAll('button.unmatched');
                            
                            btns.forEach(item => {
                                item.classList.remove('unmatched');
                                item.classList.add('pause');
                            })
                        }
                    }
                }
            }
        }

        for (let ri = 1; ri <= dimLength; ri++) {
            const row = document.createElement('div');
            row.setAttribute('id', `r${ri}`);
            row.setAttribute('class', 'row');
            mainDiv.appendChild(row);

            for (let ci = 1; ci <= dimLength; ci++) {
                const btn = document.createElement('button');
                const boxId = `r${ri}c${ci}`;
                btn.setAttribute('id', `r${ri}c${ci}`);
                btn.classList.toggle('unmatched');
                row.appendChild(btn);
                const box = document.getElementById(boxId);
                const boxValue = arraySet[randomArray.pop()];
                box.setAttribute('value', boxValue);
                box.innerText = boxValue; 
                
                box.addEventListener('click', playTurn(btn, boxValue));
            }
        }

        mainDiv.appendChild(gameState);
        gameState.appendChild(gameStatus);
        gameState.appendChild(gameProceed);
        gameState.appendChild(gameTurns);
        gameTurns.classList.replace('hideTurns', 'displayTurns');
        mainDiv.style.padding = '30px';
    }
}

const buttonFour = document.getElementById('four');
buttonFour.addEventListener('click', constructGrid(buttonFour.value));

const buttonSix = document.getElementById('six');
buttonSix.addEventListener('click', constructGrid(buttonSix.value));
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
        const arraySet = getArraySet((dimLength**2)/2);
        let randomArray = getRandomArrayIndexes(arraySet);
        const mainDiv = document.getElementById('main');

        mainDiv.innerHTML = "";

        for (let ri = 1; ri <= dimLength; ri++) {
            const row = document.createElement('div');
            row.setAttribute('id', `r${ri}`);
            row.setAttribute('class', 'row');
            mainDiv.appendChild(row);

            for (let ci = 1; ci <= dimLength; ci++) {
                const box = document.createElement('button');
                const boxId = `r${ri}c${ci}`;
                box.setAttribute('id', `r${ri}c${ci}`);
                box.setAttribute('class', 'box');
                row.appendChild(box);
                document.getElementById(boxId).innerText = arraySet[randomArray.pop()];
            }
        }
        mainDiv.style.padding = '30px';
    }
}

const buttonFour = document.getElementById('four');
buttonFour.addEventListener('click', constructGrid(buttonFour.value));

const buttonSix = document.getElementById('six');
buttonSix.addEventListener('click', constructGrid(buttonSix.value));
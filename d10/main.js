
function constructMatrix(dimLength) {
    return () => {
        const mainDiv = document.getElementById('main');

        mainDiv.innerHTML = "";

        for (let ri = 1; ri <= dimLength; ri++) {
            const row = document.createElement('div');
            row.setAttribute('id', `r${ri}`);
            row.setAttribute('class', 'row');
            mainDiv.appendChild(row);

            for (let ci = 1; ci <= dimLength; ci++) {
                const box = document.createElement('div');
                box.setAttribute('id', `r${ri}${ci}`);
                box.setAttribute('class', 'box');
                row.appendChild(box);
            }
        }
        mainDiv.style.padding = '30px';
    }
}

const buttonThree = document.getElementById('three');
buttonThree.addEventListener('click', constructMatrix(buttonThree.value));

const buttonFour = document.getElementById('four');
buttonFour.addEventListener('click', constructMatrix(buttonFour.value));

const buttonFive = document.getElementById('five');
buttonFive.addEventListener('click', constructMatrix(buttonFive.value));

const buttonSix = document.getElementById('six');
buttonSix.addEventListener('click', constructMatrix(buttonSix.value));
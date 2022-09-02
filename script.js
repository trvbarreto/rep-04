const motherOfDivs = document.querySelector('#container');
const button = document.querySelector('button');

let numberOfSquares = 16;

button.addEventListener('click', () => {
    numberOfSquares = prompt('Enter the number of squares on each side');
    clearMotherOfDivs();
    divGenerator();
});

function divGenerator() {
    let counter = 0;

    while (counter < (numberOfSquares * numberOfSquares)) {
        const div = document.createElement('div');

        let divSize = 48 / (numberOfSquares);

        div.style.width = `${divSize}rem`;
        div.style.height = `${divSize}rem`;

        console.log(div.style.height);

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = '#c08009';
        });

        motherOfDivs.appendChild(div);
        
        console.log(`${counter} div created`);

        counter++;
    }
}

function clearMotherOfDivs() {
    let child = motherOfDivs.lastElementChild;

    while (child) {
        motherOfDivs.removeChild(child);
        child = motherOfDivs.lastElementChild;
    }
}

divGenerator()
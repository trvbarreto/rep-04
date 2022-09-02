const motherOfDivs = document.querySelector('#container');

function divGenerator() {
    let counter = 0;

    while (counter < 16) {
        const div = document.createElement('div');
        div.style.width = '3rem';
        div.style.height = '3rem'

        motherOfDivs.appendChild(div);        

        counter++;
    }
}

divGenerator()
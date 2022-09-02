const motherOfDivs = document.querySelector('#container');

function divGenerator() {
    let counter = 0;

    while (counter < 256) {
        const div = document.createElement('div');
        div.style.width = '3rem';
        div.style.height = '3rem';

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = '#c08009';
        });

        motherOfDivs.appendChild(div);        

        counter++;
    }
}

divGenerator()
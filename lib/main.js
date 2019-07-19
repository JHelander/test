const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50)
        main.style.opacity = 1;
    }, 4000);
}
init();

function toggleMenu() {
    const x = document.querySelector('.navbar-menu');
    const lineOne = document.querySelector('.navbar-line1');
    const lineTwo = document.querySelector('.navbar-line2');
    const lineThree = document.querySelector('.navbar-line3');
    if (
        x.style.opacity === '0.92',
        lineOne.style.opacity === '0',
        lineTwo.style.transform === 'rotate(-45deg)',
        lineThree.style.transform === 'translateY(-9px)') {
           
            x.style.opacity = '0';
            x.style.zIndex = '-1';
            
            lineOne.style.opacity = '1';
            lineTwo.style.transform = 'rotate(0)';
            lineThree.style.transform = 'translateY(0)';
        } else {
            
            x.style.opacity = '0.92';
            x.style.zIndex = '10';

            lineOne.style.opacity = '0';
            lineTwo.style.transform = 'rotate(-90deg)';
            lineThree.style.transform = 'translateY(-9px)';
        
        }   
    }

    


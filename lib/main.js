// Scrolling Effects

const parallaxes = document.querySelectorAll('.section-1');

window.addEventListener('scroll', () => {
    const scrollTop =  window.scrollY;
    parallaxes.forEach(parallax => {
        if ((scrollTop + windows.innerHeight / 2) > parallax.offsetTop) {
            const yPosition = 0;
            const oldMin = (parallax.offsetTop < window.innerHeight / 2) ? parallax.offsetTop :
            parallax.offsetTop - window.innerHeight / 2;

            const oldMax = oldMin + parallax.offsetHeight;
            parallax.style.backgroundPosition + 'center ${yPosition}px';
        }
    })
});
// VARIABLES

arrowToTop = document.querySelector('#scrollRemote');
header = document.querySelector('#headerBar')


// FUNCTIONS

window.addEventListener('scroll', function() {
    arrowToTop.hidden = (scrollY < 300);

    if (scrollY > 50) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    };
});


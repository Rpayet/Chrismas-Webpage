// VARIABLES
// VARIABLES

arrowToTop = document.querySelector('#scrollRemote');
header = document.querySelector('#headerBar');
toggleMode = document.querySelector('body');
darkMode = document.querySelector('#light');
lightMode = document.querySelector('#dark');

// FUNCTIONS
// FUNCTIONS

// SCROLL EVENT
window.addEventListener('scroll', function() {
    arrowToTop.hidden = (scrollY < 300);

    if (scrollY > 50) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    };
});

// DARK LIGHT MODE
darkMode.addEventListener('click', () => {

    darkModeToggle();
    
});

lightMode.addEventListener('click', () => {
    
    lightModeToggle();

});


let darkModeToggle = () => {
    toggleMode.classList.add('darkMode');
    darkMode.classList.remove('active');
    lightMode.classList.add('active');

};

let lightModeToggle = () => {
    toggleMode.classList.remove('darkMode');
    darkMode.classList.add('active');
    lightMode.classList.remove('active');
};
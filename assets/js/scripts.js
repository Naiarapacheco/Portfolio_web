function toggleMenu(){
    const menuLinks = document.querySelector(".menu__links");
    const hamburguerIcon = document.querySelector(".hamburguer__icon");
    menuLinks.classList.toggle('open');
    hamburguerIcon.classList.toggle('open');
};

// SCROLL
document.getElementById('scrollTo').addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

// Menu Title
const typed = new Typed(".typing__text",{
    strings: ["Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
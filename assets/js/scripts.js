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
    strings: ["Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
import Typed from "typed.js";

const myTyped = new Typed("#greeting", {
    strings: ["Software Engineer.", "Fullstack Developer."],
    loop: true,
    typeSpeed: 35
})

window.toggleMenu = function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
}

const toggleDark = document.getElementById('toggleDark');
toggleDark.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
});

if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}
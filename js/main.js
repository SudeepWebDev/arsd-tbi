const toggleButton = document.getElementById('menuToggle');
const navMenu = document.getElementById('navbarNav');
const menu_btn_3line = document.getElementById('menu-btn-3line');
const menu_btn_xmark = document.getElementById('menu-btn-xmark');
const theme_toggler = document.getElementById('theme-toggler');
const sun_icon = document.getElementById('sun-icon');
const moon_icon = document.getElementById('moon-icon');
const topButton = document.getElementsByClassName("top-button")[0];

if (toggleButton) {

    toggleButton.addEventListener('click', function () {
        if (navMenu.classList.contains('hidden')) {
            navMenu.classList.remove('hidden');
            menu_btn_3line.classList.add('hidden');
            menu_btn_xmark.classList.remove('hidden');
        } else {
            navMenu.classList.add('hidden');
            menu_btn_xmark.classList.add('hidden');
            menu_btn_3line.classList.remove('hidden');

        }
    });
}

if (theme_toggler) {
    theme_toggler.addEventListener('click', function () {

        if (sun_icon.classList.contains('hidden')) {
            sun_icon.classList.remove('hidden');
            moon_icon.classList.add('hidden');
        } else {
            sun_icon.classList.add('hidden');
            moon_icon.classList.remove('hidden');
            // document.documentElement.classList.toggle('dark');

        }
    });
}

if (topButton) {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    function toggleButtonF() {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        
        if (scrollPosition > 100) {
            topButton.hidden = false;
        }
        else {
            topButton.hidden = true;
        }
    }
    window.addEventListener("scroll", toggleButtonF);
}
const toggleButton = document.getElementById('menuToggle');
const navMenu = document.getElementById('navbarNav');
const menu_btn_3line = document.getElementById('menu-btn-3line');
const menu_btn_xmark = document.getElementById('menu-btn-xmark');
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
let menu = document.getElementById('burgerMenu');
let menu_item = document.getElementById('menu_item');

function oneTimeRunner() {
    if (window.innerWidth < 850) {
        menu_item.style.display = 'none';
    }
}

menu.addEventListener('click', function () {
    if (menu_item.style.display == 'none') {
        menu_item.style.display = 'flex';
    } else {
        menu_item.style.display = 'none';
    }
})

window.addEventListener('resize', function () {
    if (window.innerWidth >= 850) {
        menu_item.style.display = 'flex';
    } else {
        menu_item.style.display = 'none';
    }
})

oneTimeRunner();
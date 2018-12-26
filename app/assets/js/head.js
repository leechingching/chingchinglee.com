const hamburgerMenu = document.querySelector('.hamburgerMenu')
const mobileDlay = document.querySelector('.mobileNav');

function showMobileMenu() {
    let clicked = false
    clicked = !clicked

    if(clicked) {
        mobileDlay.classList.remove('mobile__display--false')
        mobileDlay.classList.add('mobile-nav__full')
    }

}

hamburgerMenu.addEventListener('click', showMobileMenu)

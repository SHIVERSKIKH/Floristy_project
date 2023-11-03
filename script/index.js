const mobileLab = document.querySelector('.mobile-menu__burger');
const menu = document.querySelector('.menu__list');

mobileLab.addEventListener('click', () => {
    menu.style.display = 'flex';
});


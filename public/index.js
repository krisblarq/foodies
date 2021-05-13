const svg = document.querySelector('#svg');
const menu = document.querySelector('#menu');

svg.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})  

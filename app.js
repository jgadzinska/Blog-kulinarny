const searchOn = document.querySelector('#searchOpen');
const searchOff = document.querySelector('#removeSearch');
const searchInput = document.querySelector('.searchInput');

searchInput.style.display = "none";

searchOn.addEventListener('click', () => {
    if(searchInput.style.display === 'none') {
        searchInput.style.display = 'flex';
    } else {
        searchInput.style.display = 'none';
    }
});

searchOff.addEventListener('click', () => {
    if(searchInput.style.display === 'flex') {
        searchInput.style.display = 'none';
    } else {
        searchInput.style.display = 'flex';
    }
});


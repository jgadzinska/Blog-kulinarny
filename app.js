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


  // STICKY

const mainnav = document.querySelector('.mainNav');

window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 2){
        mainnav.classList.add('sticky');
    }else{
        mainnav.classList.remove('sticky');
    }
});




const navonof = document.querySelector('.navOnOff');
const navtoggle = document.querySelector('#checkbox1');
const navlist = document.querySelector('.navList');

navtoggle.addEventListener('change', () => {
    if(navtoggle.checked) {
        navlist.style.right = '-150px'
    }else{
        navlist.style.right = '-400px'
    }
})
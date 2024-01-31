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


const posts = [
    {
        title: "Browni",
        desc: "Zobacz jak upiec wilgotne i mocno czekoladowe brownie. A do tego sposób przygotowania jest bardzo proste!",
        link: "https://google.com/",
        bgImg: "brownie.jpeg",
        label: "Ciasta"
    },
    {
        title: "Sałatka grecka",
        desc: "Sałatka grecka ze świeżych warzyw, wyrazistych w smaku czarnych oliwek i sera fety, który jest uważany za najlepszy kulinarny wynalazek greckiej kuchni!",
        link: "https://google.com/",
        bgImg: "salatkaGrecka.jpeg",
        label: "Sałatki"
    },
    {
        title: "Paella",
        desc: "Zanurz się w świecie hiszpańskich smaków z naszym przepisem na tradycyjną paellę. Z soczystym kurczakiem oraz aromatycznymi warzywami!",
        link: "https://google.com/",
        bgImg: "paella.png",
        label: "Dania główne"
    }
];

let currentSlider = 0;

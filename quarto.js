document.getElementById('btn-grid').addEventListener('click', function() {
    const quartosContainer = document.querySelector('.quartosLuxo-grid ');
    quartosContainer.classList.remove('lista-view');
});

document.getElementById('btn-list').addEventListener('click', function() {
    const quartosContainer = document.querySelector('.quartosLuxo-grid');
    quartosContainer.classList.add('lista-view');
});

//sobre os filtros dos quartos

document.getElementById('filtro-quartos').addEventListener('change', function() {
    let filtro = this.value;
    let quartos = document.querySelectorAll('.Luxo-card');

    quartos.forEach(quarto => {
        quarto.style.display = (filtro === 'todos' || quarto.classList.contains(filtro)) ? 'block' : 'none';
    });
        if (filtro === 'todos') {
            quarto.style.display = 'block';
        } else if (quarto.classList.contains(filtro)) {
            quarto.style.display = 'block';
        } else {
            quarto.style.display = 'none';
        }
    });

const imagensBanner = [
    "url('https://images.unsplash.com/photo-1455587734955-081b22074882')",
    "url('https://vejario.abril.com.br/wp-content/uploads/2016/12/hilton-barra-rio-de-janeiro-pool-1043421-divulgac3a7c3a3o-2.jpg?quality=70&strip=all')",
    "url('https://tse2.mm.bing.net/th?id=OIP.TUdYgzScCKMZNEY6CtGDvwHaEx&pid=Api&P=0&h=180')"
];

let index = 0;
const banner = document.querySelector(".banner");

function trocarBanner() {
    index = (index + 1) % imagensBanner.length; // Loop infinito (index+1) 3%1+3%2+3%3 + 3%0
    banner.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), ${imagensBanner[index]}`;
}

setInterval(trocarBanner, 5000); // Troca a cada 5 segundos
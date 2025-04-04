// Preço dos quartos 
const PRECOS = {
    standard: 120.00,
    luxo: 210.00,
    presidencial: 580.00
};

// Funçao para calcular a diferencia em dias entre duas datas
function calcularDias(dataInicio, dataFim) {
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);
    const diferenca = fim.getTime() - inicio.getTime();
    return Math.ceil(diferenca / (1000 * 3600 * 24));
}

// funçao para formatar valor em reais 
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' });
}

//Funçao para calcular e atualizar o valor total 
function atualizarValores() {
    const tipoQuarto = document.getElementById('tipo-quarto').value;
    const dataChegada = document.getElementById('data-chegada').value;

    const dataSaida = document.getElementById('data-saida').value;

    if (tipoQuarto && dataChegada && dataSaida) {
     const dias = calcularDias(dataChegada, dataSaida);
        if (dias > 0){
            const valorDiaria = PRECOS[tipoQuarto];
            const valorTotal = dias * valorDiaria;

            document.getElementById('qtd-dias').textContent = dias;
            document.getElementById('valor-total').textContent = formatarMoeda(valorTotal);
        } else {
            document.getElementById('qtd-dias').textContent = '0';
            document.getElementById('valor-total').textContent = 'R$ 0,00';
            alert(`A data de saida deve ser posterior à data de Chegada!`);
        }
    }
}

// funcao para rolar até a seçao de reservas
function scrollToReservas() {
    document.getElementById('reservas').scrollIntoView({
       behavior: 'smooth',
       block: 'start' 
    });
}

//Adiciona listeners para os campos do formulario
document.getElementById('tipo-quarto').addEventListener('change', atualizarValores);
document.getElementById('data-chegada').addEventListener('change', atualizarValores);
document.getElementById('data-saida').addEventListener('change', atualizarValores);

// Manipula o envio do formulário de reservas 
document.getElementById('formulario-reserva').addEventListener('submit', function(e) {
    e.preventDefault();

    const tipoQuarto = document.getElementById('tipo-quarto').value;
    const dias =parseInt(document.getElementById('qtd-dias').textContent);
    const valorTotal = document.getElementById('valor-total').textContent;

    if (dias <=0) {
        alert(`Por favor, selecione datas validas para sua reserva.`);
        return;
    }

    alert(`Reserva realizada com sucesso!\n\nDetalhes da reserva:\nTipo de quarto: ${tipoQuarto}\nQuantidade de dias: ${dias}\nValor total: ${valorTotal}`);


        this.reset();
        document.getElementById('qtd-dias').textContent = '0';
        
         document.getElementById('valor-total').textContent = 'R$ 0,00';
    });

// Funçao para animaçao suave do scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click',function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

//função para adicionar classe ativa ao menu quando scrollar

window.addEventListener('scroll', function(){
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50){
        document.querySelector('.header').style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
    }else{
        document.querySelector('.header').style.backgroundColor = '#1a1a1a';
    }
});

//função para animação de entrada dos elementos

function animateOnScroll(){
    const elements = document.querySelectorAll('.quarto-card, .servico-item');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible){
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
    });
}

//Adicione o evento de scroll para animação
window.addEventListener('scroll', animateOnScroll);

//Inicializa as animações quando a pagina carrega 

window.addEventListener('load', animateOnScroll);

//Define data manima como hoje para os campos de data

window.addEventListener('load', function(){
    const hoje = new Date().toISOString().split('T')[0];
    document.getElementById('data-chegada').min = hoje;
    document.getElementById('data-saida').min = hoje;
});
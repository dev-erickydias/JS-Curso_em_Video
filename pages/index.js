const page = document.querySelector('.page');
const titlePage = document.querySelector('.title');
const contain = document.querySelector('.contain');
const subtitlePage = document.querySelector('.subtitle');
const img = document.querySelector('.img');
const conText = document.querySelector('.contain__text');
const textFooter = document.querySelector('.footer__text');
const dataAtual = new Date();
const horas = dataAtual.getHours(); 

function atualizarTempo() {
    const dataAtual = new Date();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();
    

    const horasFormatadas = horas < 10 ? `0${horas}` : horas;
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;
    
    subtitlePage.textContent = "As horas Atuais São " + horasFormatadas + ":" + minutosFormatados + ":" + segundosFormatados;
}
setInterval(atualizarTempo, 1000);
atualizarTempo()

function mudarCorNoite () {
    page.style.background = 'rgb(63, 25, 214)';
    page.style.color = '#fff';
    contain.style.background = 'rgb(232, 207, 118)'
    img.src = 'https://img.freepik.com/fotos-premium/uma-noite-de-luar_445983-3249.jpg' 
    conText.textContent = "Boa noite 🌙"
    conText.style.color = '#000';
}
function mudarCorTarde () {
    page.style.background = 'rgb(223, 138, 10)';
    page.style.color = '#fff';
    contain.style.background = 'rgb(43, 32, 32)'
    img.src = '../image/pordosol.jpg' 
    conText.textContent = "Boa Tarde 🌇"
}
function mudarCorMadrugada () {
    page.style.background = 'rgb(63, 25, 214)';
    page.style.color = '#fff';
    contain.style.background = 'rgb(232, 207, 118)';
    img.src = '../image/luar.jpeg' ;
    conText.textContent = "Boa Madrugada 🌙"
}

if (horas >= 18 && horas <= 23)  {
    mudarCorNoite()
} 
if (horas >= 1 && horas < 6){
    mudarCorMadrugada()
}
if (horas >= 12 && horas <= 17){
    mudarCorTarde()
}


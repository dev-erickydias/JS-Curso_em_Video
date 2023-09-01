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
    img.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FP%25C3%25B4r_do_sol&psig=AOvVaw3nL3Zp7hIV4tgMv5-1JUB2&ust=1693677702047000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPDDzKD_iYEDFQAAAAAdAAAAABAE' 
    conText.textContent = "Boa Tarde 🌇"
}
function mudarCorMadrugada () {
    page.style.background = 'rgb(63, 25, 214)';
    page.style.color = '#fff';
    contain.style.background = 'rgb(232, 207, 118)';
    img.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.1zoom.me%2Fpt%2Fwallpaper%2F431985%2Fz1202.5%2F&psig=AOvVaw1jh1bxZQSB4FqVovbE8RSl&ust=1693677764817000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKinrb7_iYEDFQAAAAAdAAAAABAE' ;
    conText.textContent = "Boa Madrugada 🌙"
}
function mudarCorManha () {
    page.style.background = '#e8cf76';
    page.style.color = '#000';
    contain.style.background = '#fff';
    img.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.discover-azores.com%2Fpt%2Fnascer-e-por-do-sol%2F&psig=AOvVaw1Di-eKv2G8nfJ6YvzLRUqi&ust=1693677672057000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIC4l5L_iYEDFQAAAAAdAAAAABAE' ;
    conText.textContent = "Bom Dia ☀️"
}
if (horas >= 18 && horas <= 23)  {
    mudarCorNoite()
} else if (horas >= 1 && horas < 6){
    mudarCorMadrugada()
} else if (horas >= 12 && horas <= 17){
    mudarCorTarde()
} else {
    mudarCorManha()
}
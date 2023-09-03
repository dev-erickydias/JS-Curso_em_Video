// pego os elementos de interação com html
const page = document.querySelector('.page');
const titlePage = document.querySelector('.title');
const contain = document.querySelector('.contain');
const subtitlePage = document.querySelector('.subtitle');
const img = document.querySelector('.img');
const conText = document.querySelector('.contain__text');
const textFooter = document.querySelector('.footer__text');
const dataAtual = new Date();
const horas = dataAtual.getHours(); 

//função para atualizar a hora e para acrecentar os zeros a esqueda 
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
//chamada para atualizar o horario a cada segundo
setInterval(atualizarTempo, 1000);
atualizarTempo()

// funções para fazer a troca de fotos no meu contain principal 
function mudarCorNoite () {
    conText.textContent = "Boa noite 🌙"
    page.style.background = 'rgb(63, 25, 50)';
    page.style.color = '#fff';
    contain.style.background = 'rgb(232, 207, 200)';
    img.src = 'https://www.vulco.pt/uploads/finder/conducir_niebla_luces.jpg' ;
    subtitlePage.style.color = '#000';
    conText.style.color = '#000';
}
function mudarCorTarde () {
    page.style.background = 'rgb(223, 138, 10)';
    page.style.color = '#fff';
    contain.style.background = 'rgb(43, 32, 32)'
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sunset_2007-1.jpg/1024px-Sunset_2007-1.jpg' 
    conText.textContent = "Boa Tarde 🌇"
    subtitlePage.style.color = '#fff';
}
function mudarCorMadrugada () {

}
function mudarCorManha () {
    page.style.background = '#e8cf76';
    page.style.color = '#000';
    contain.style.background = '#fff';
    img.src = 'https://media.istockphoto.com/id/620951116/pt/foto/panoramic-view-of-colorful-sunrise-in-mountains.jpg?s=612x612&w=0&k=20&c=48Ykdw1ta86_cw72spBnrAzKQxR0Wabc-22XjMRnozo=' ;
    conText.textContent = "Bom Dia ☀️"
}

//validações dos horarios para que cada função seja execultada na ordem
if (horas >= 18 || horas < 6)  {
    mudarCorNoite();
} else if (horas >= 6 && horas < 12){
    mudarCorManha();
} else if (horas >= 12 && horas <= 17){
    mudarCorTarde();
} else {
    mudarCorManha()
}

// Função para recarregar a página automaticamente
function recarregarPagina() {
    location.reload();
}

// Chama a função de recarregar a página após a troca de cores

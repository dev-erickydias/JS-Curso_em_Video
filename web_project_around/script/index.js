import FormValidator from './FormValidator.js';
import Card from './card.js';
import { Section } from './section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { Popup } from './Popup.js';
//INITIAL CARDS//

 const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

//Constantes//

export const profileButton = document.querySelector('.profile__info-button');
export const formOpen = document.querySelector('.popup-opened');
export const formClose = document.querySelector('.popup__close');
export const formElement = document.querySelector('.form__fieldset');
export const nameInput = document.querySelector('.form__input-name');
export const jobInput = document.querySelector('.form__input-job');
export const nameProfile = document.querySelector('.profile__info-name');
export const jobProfile = document.querySelector('.profile__info-text');
export const cardButton = document.querySelector('.profile__button');
export const Overlay = document.querySelector('.overlay');
export const zoomOpen = document.querySelector('.zoom-open');
export const zoom = document.querySelector('.popup_image');
const imgbtn = document.querySelector(".profile__info-button-image")

// add estania de popup
const instPopupFormEdit = new Popup ('.popup')
instPopupFormEdit.setEventListeners()



profileButton.addEventListener("click", ()=>{
  instPopupFormEdit.open()
  
})



formElement.addEventListener("submit", function(evt){
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  formOpen.style.display = 'none';
})

const popupImg = new PopupWithImage(
  ".zoom__popup-image",
   ".zoom__popup-text",
    ".popup_image");
// Gerador de cards //

const section = new Section ({
  items: initialCards,
  renderer: (item) => {
    console.log(item)
  const card = new Card(item, document.querySelector("#template"), (image, title) => {
    console.log(image)
    popupImg.open(image, title);
    popupImg.setEventListeners();
  });
  return card.generateCard();
  },
}, ".elements");
section.renderItems();

const formAddCard = document.querySelector('.formcard__fieldset');

formAddCard.addEventListener("submit", function(evt) {
  evt.preventDefault();

  const inputTitle = formAddCard.querySelector('.formcard__input-title');
  const inputImage = formAddCard.querySelector('.formcard__input-link');

  const newCard = new Card({
    name: inputTitle.value,
    link: inputImage.value,
  });

  const generatedCard = newCard.generateCard();

  document.querySelector(".elements").prepend(generatedCard);

  formAddCard.reset();

  cardOpen.style.display = 'none';
});

// Objetos //

new FormValidator({
  formSelector: ".formcard__fieldset",
  inputSelectorOne: ".formcard__input-title",
  inputSelectorTwo: ".formcard__input-link",
  submitButtonSelector: ".formcard__submit",
  errorClassOne: ".formcard__input-title-error",
  errorClassTwo: ".formcard__input-link-error",
}, formAddCard).enableValidation();

new FormValidator({
  formSelector: ".form__fieldset",
  inputSelectorOne: ".form__input-name",
  inputSelectorTwo: ".form__input-job",
  submitButtonSelector: ".form__submit",
  errorClassOne: ".form__input-name-error",
  errorClassTwo: ".form__input-job-error",
}, formElement).enableValidation();
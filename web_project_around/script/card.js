export default class Card {
  constructor(data, dataTemplate, hadleImagePopup){
    this._name = data.name;
    this._link = data.link;
    this._dataTemplate = dataTemplate;
    this._hadleImagePopup = hadleImagePopup
  }

  _getTemplate(){
    const cardElement = document.querySelector("#template").content.querySelector(".elements__card").cloneNode(true);

    return cardElement;
  }

  _setEventListeners(){
    this._element.querySelector(".elements__delete-button").addEventListener("click", () => {
      this._deleteCard();
    })

    this._element.querySelector(".elements__like-button").addEventListener("click", (evt) => {
      this._likeButton(evt);
    })

    this._element.querySelector(".elements__card-image").addEventListener("click", () => {
      this._hadleImagePopup(this._link ,this._name )
    })
}

  /*_showZoomPopup() {
    const zoomOpen = document.querySelector('.zoom-open');
    const zoomClose = document.querySelector('.zoom__close-img');
    const imageElement = document.querySelector('.zoom__popup-image');
    const nameElement = document.querySelector('.zoom__popup-text');

    imageElement.src = this._link;
    imageElement.alt = this._name;
    nameElement.textContent = this._name;

    zoomOpen.style.display = 'flex';

    zoomClose.addEventListener("click", (e) => {
        if (e.target == zoomClose) {
        zoomOpen.style.display = 'none';
      }
    })
  }*/

  _deleteCard() {
    const elements = document.querySelector(".elements");
    const card = this._element;
    elements.removeChild(card);
  }

  _likeButton(evt) {
    const target = evt.target;
    const currentSrc = target.getAttribute("src");

    if (currentSrc.includes('heart.svg')) {
      target.setAttribute("src", '../images/like.svg');
    } else if (currentSrc.includes('like.svg')) {
      target.setAttribute("src", '../images/heart.svg');
    }
  }

  generateCard(){
    this._element = this._getTemplate();
    const currentCardName = this._element.querySelector(".elements__card-name");
    currentCardName.textContent = this._name;

    this._setEventListeners();

    const imageElement = this._element.querySelector(".elements__card-image");
    imageElement.setAttribute("src", this._link);
    imageElement.setAttribute("alt", this._name);

    return this._element;
}
}
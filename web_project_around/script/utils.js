import {
  profileButton,
  formOpen,
  formClose,
  formElement,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
  cardButton,
  cardOpen,
  cardClose,
  cardOut,
  zoomOpen,
  zoom,
} from './index.js';

// POPUP PROFILE //
// profileButton.addEventListener("click", function(){
//   console.log(formEdit)
//   formEdit.classList.add("popup-opened")
// });

// formClose.addEventListener("click", function(){
//   formOpen.classList.remove("popup-opened")
// });

// formEdit.addEventListener("click", function(e) {
//   if(e.target == formEdit) {
//     formOpen.classList.remove("popup-opened")
//   }
// });

// POPUP CARD //

/*cardButton.addEventListener("click", function(){
  cardOpen.style.display = 'flex';
});

formClose.addEventListener("click", function(){
  cardOpen.style.display = 'none';
});

cardOut.addEventListener("click", function(e) {
  if(e.target == cardOut) {
    cardOpen.style.display = 'none';
  }
});*/

cardButton.addEventListener("click", function(){
  console.log("Botão de card clicado");
  cardOpen.style.display = 'flex';
});

formClose.addEventListener("click", function(){
  console.log("Botão de fechar clicado");
  cardOpen.style.display = 'none';
});

cardOut.addEventListener("click", function(e) {
  console.log("Área externa do card clicada");
  if(e.target == cardOut) {
    cardOpen.style.display = 'none';
  }
});

// POPUP ZOOM //

zoom.addEventListener("click", function(e) {
  if(e.target == zoom) {
    zoomOpen.style.display = 'none';
  }
});

// ESC key

/*function escEventListener(event) {
  if (event.key === "Escape") {
    formOpen.style.display = 'none';
    cardOpen.style.display = 'none';
    zoomOpen.style.display = 'none';
  }
}

document.addEventListener('keydown', escEventListener);*/
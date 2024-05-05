export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll('input'));
  }

  _checkInputLength(input, errorElement) {
    if (input.value.trim().length === 0) {
      errorElement.textContent = "Preencha este campo.";
      return false;
    } else if (input.value.trim().length < 2) {
      errorElement.textContent = "O campo deve ter pelo menos 2 caracteres.";
      return false;
    } else {
      errorElement.textContent = "";
      return true;
    }
  }

  _checkInputValidity(input, errorElement) {
    if (!input.validity.valid) {
      errorElement.textContent = input.validationMessage;
      return false;
    } else {
      errorElement.textContent = "";
      return true;
    }
  }

  _buttonState() {
    const submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
    const inputOne = this._formElement.querySelector(this._config.inputSelectorOne);
    const inputTwo = this._formElement.querySelector(this._config.inputSelectorTwo);
    const errorElementOne = this._formElement.querySelector(this._config.errorClassOne);
    const errorElementTwo = this._formElement.querySelector(this._config.errorClassTwo);

    const isInputOneValid = this._checkInputLength(inputOne, errorElementOne);
    const isInputTwoValid = this._checkInputLength(inputTwo, errorElementTwo) && this._checkInputValidity(inputTwo, errorElementTwo);

    submitButton.disabled = !(isInputOneValid && isInputTwoValid);
  }

  _clearErrorMessages() {
    const errorElementOne = this._formElement.querySelector(this._config.errorClassOne);
    const errorElementTwo = this._formElement.querySelector(this._config.errorClassTwo);

    errorElementOne.textContent = "";
    errorElementTwo.textContent = "";
  }

  _handleInputChange() {
    this._buttonState();
  }

  _setEventListeners() {
    const inputOne = this._formElement.querySelector(this._config.inputSelectorOne);
    const inputTwo = this._formElement.querySelector(this._config.inputSelectorTwo);
    inputOne.addEventListener("input", this._handleInputChange());
    inputTwo.addEventListener("input", this._handleInputChange());
  }

  enableValidation() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._buttonState();
      });
    });
    this._setEventListeners();
  }
}


import Popup from "./Popup.js"

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallBack, popupForm){
        super(popupSelector);
        this._submitCallBack = submitCallBack;
        this._popupForm = popupForm;
    }
    _getInputValues(){}
    setEventListeners(){}
    close(){
        super.close();
    }
    reset(){
        this._popupForm.reset()
    }


}
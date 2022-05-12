import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup {
    constructor(popupSelector, { handleSubmit }) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._formElement = this._popupSelector.querySelector('.popup__form');
        this._inputList = this._formElement.querySelectorAll('.popup__input');
    }
    
    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
            console.log(this._inputValues);
        });
        return this._inputValues;
    }
    
    close() {
        super.close();
        this._formElement.reset();
    }
    setEventListeners() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault;
            this._handleSubmit(this._getInputValues());
        });

        super.setEventListeners();
    }
}

import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup {
    constructor(popupSelector, { handleSubmit }) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._formElement = this._popup.querySelector('.popup__form');
        this._inputList = this._formElement.querySelectorAll('.popup__input');
        this._formSubmitBtn = this._formElement.querySelector('.popup__button');
        this._formSubmitBtnValue = this._formSubmitBtn.textContent;
    }
    
    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
          this._handleSubmit(this._getInputValues());
        });
      }
    close() {
        super.close();
        this._formElement.reset();
    }

    toggleBtnValue(status) {
        if (status) {
            this._formSubmitBtn.textContent = 'Сохранение...'
        } else {
            this._formSubmitBtn.textContent = this._formSubmitBtnValue;
        }
    }
}

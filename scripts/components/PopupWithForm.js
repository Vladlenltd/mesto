import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup {
    constructor(selector, { handleSubmit }) {
        super(selector);
        this._handleSubmit = handleSubmit;
        this._formElement = this._selector.querySelector('.popup__form');
        this._inputList = this._formElement.querySelectorAll('.popup__input');
        this._formElement.addEventListener('submit', () => {
            this._handleSubmit(this._getInputValues());
            this._formElement.reset();
        });
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    close() {
        this._formElement.reset();
        super.close();
    }

    setEventListeners() {
        this._selector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
            this._close();
        })
        super._setEventListeners()
    }
}

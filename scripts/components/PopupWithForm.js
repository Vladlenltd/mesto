import { Popup } from "./Popup.js"

export class PopupWithImage extends Popup {
    constructor(popupSelector, { handleSubmit }) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._formElement = this._popupSelector.querySelector('.popup__form');
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    setEventListeners() {
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
            this._close();
        })
        super._setEventListeners()
    }

    close() {
        this._formElement.reset();
        super.close();
    }
}

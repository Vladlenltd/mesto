import { Popup } from "./Popup.js"

export class PopupWithSubmit extends Popup {
    constructor(popupSelector, { handleSubmit }) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._formElement = this._popup.querySelector('.popup__form');
        this._submitBinded = this._submitEvent.bind(this);
    }

    _submitEvent(evt) {
        evt.preventDefault();
        this._handleSubmit(this._data);
    }

    setEventListeners() {
        this._formElement.addEventListener('submit', this._submitBinded);
        super.setEventListeners();
    }

    open(data) {
        this._data = data;
        super.open();
    }
}
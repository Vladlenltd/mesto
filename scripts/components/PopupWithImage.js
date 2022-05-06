import { Popup  } from "../components/Popup.js";

export class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._popupImage = this._selector.querySelector('.popup__img');
        this._popupText = this._selector.querySelector('.popup__caption');
    } 
    open(title, link) {
        this._popupImage.src = link;
        this._popupImage.alt = title;
        this._popupText.textContent = title; 
        super.open();
    }
}
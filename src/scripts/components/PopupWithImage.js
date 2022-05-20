import { Popup  } from "../components/Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__img');
        this._popupText = this._popup.querySelector('.popup__caption');
    } 
    open(title, link) {
        this._popupImage.src = link;
        this._popupImage.alt = title;
        this._popupText.textContent = title; 
        super.open();
    }
}
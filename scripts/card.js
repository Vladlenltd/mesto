/* мои пометки
NB - NotaBene(внимание)
*/
import { openPopup } from "./index.js";
export class Card {
    constructor(title, link, templateSelector) {
        this._title = title;
        this._link = link;
        this._templateSelector = templateSelector;
    }
    //получаю готовую разметку
    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

    return cardElement
    };
    //метод кнопки Like
    _likeCard(evt) {
        evt.target.classList.toggle('element__like-btn_active');
    };
    //метод кнопки "удалить"
    _delCard(evt) {
        evt.target.closest('.element').remove();
    };
    //метод полноэкранного открытия popup
    _openPopupCard() {
        openPopup (this.popup);
    }
    _openPopupCard = () => {
        this._imageElement.src = this._link;
        this._imageElement.alt = this._title; //NB
        this._captionElement.textContent = this._popupImg.alt; //NB
        openPopup(this.popup);//NB
    };
    //обработчик событий
    _setEventListeners () {
    this._imageElement.addEventListener('click', this._openPopupCard);    
    this._likeBtnElement.addEventListener('click', this._likeCard);
    this._delBtnElement.addEventListener('click', this._delCard);
    };
    //метод создания карточки
    generateCard () {
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector('.element__item');
        this._captionElement = this._element.querySelector('.element__title');
        this._likeBtnElement = this._element.querySelector('.element__like-btn');
        this._delBtnElement = this._element.querySelector('.element__delete-btn');
        
        this._imageElement.src = this.link;
        this._imageElement.alt = this.title;
        this._captionElement.textContent = this.title;
        
        this._setEventListeners();
        return this._element
    }
}
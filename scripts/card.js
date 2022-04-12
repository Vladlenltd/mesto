/* мои пометки
NB - NotaBene(внимание)
*/
import { openPopup } from ".index.js";
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

        return cardElement;
    }
    //метод кнопки Like
    _likeCard(evt) {
        evt.target.classList.toggle('element__like-btn_active');
    };
    //метод кнопки "удалить"
    _delCard(evt) {
        this._element.remove();
    };
    //метод полноэкранного открытия изображения
    _fullViewPicture (popupImg, popup) {
        this._imageElement.src = popupImg.src;
        this._imageElement.alt = popupImg.alt; //NB
        this._captionElement.textContent = popupImg.alt; //NB
        openPopup(popup);//NB
    };
    //обработчик событий
    _setEventListeners () {
    this._fullViewBtn.addEventListener('click', this._fullViewPicture);    
    this._likeBtnElement.addEventListener('click', this._likeCard(evt));
    this._delBtnElement.addEventListener('click', this._delCard);
    };
    //метод создания карточки
    generateCard () {
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector('.popup__img');
        this._captionElement = this._element.querySelector('.popup__caption');
        this._likeBtnElement = this._element.querySelector('.element__like-btn');
        this._delBtnElement = this._element.querySelector('.element__del-btn');
        
        this._imageElement.src = this._link;
        this._imageElement.alt = this._title;
        this._captionElement.textContent = this._title;
        
        this._setEventListeners();
        return this._element
    }
}

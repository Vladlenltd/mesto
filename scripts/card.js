/* мои пометки
NB - NotaBene
*/

class Card {
    constructor(title, link, templateSelector, popup) {
        this._title = title;
        this._link = link;
        this._templateSelector = templateSelector;
        this._popup = popup;//NB
        this._imageElement = popup.querySelector('.popup__img');//NB
        this._captionElement = popup.querySelector('.popup__caption');//NB
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
    _setEventListener () {
        
    }
}

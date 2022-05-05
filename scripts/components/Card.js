export class Card {
    constructor({ data, handleCardClick}, selector) {
        this.data = data;
        this.selector = selector;
        this.handleCardClick = handleCardClick;
    }

    //получаю готовую разметку
    _getTemplate() {
        const cardElement = document
        .querySelector(this.selector)
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


    //обработчик событий
    _setEventListeners () {
    this._imageElement.addEventListener('click', this.handleCardClick);    
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
        this._imageElement.src = this.data.link;
        this._imageElement.alt = this.data.name;
        this._captionElement.textContent = this.data.name;
        
        this._setEventListeners();
        return this._element
    }
}

export class Card {
    constructor({ data, ownerId, handleCardClick, handleDeleteIconClick, giveLike, removeLike }, selector) {
        this.data = data;
        this.selector = selector;
        this.handleCardClick = handleCardClick;
        this.handleDeleteIconClick = handleDeleteIconClick;
        this._ownerId = ownerId;
        this._giveLike = giveLike;
        this._removeLike = removeLike;
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

    _removeCard(card) {
        card.remove();
        card = null;
    }

    delCard() {
        debugger;
        this._removeCard(this._element)
    }

    _checkOwner() {
        return (this.data.owner._id === this._ownerId)
    }

    _toggleBtnVisibility() {
        if (!this._checkOwner()) {
            this._delBtnElement.classList.add('element__delete-btn_disable')
        }
    }

    _setLike(data) {
        this._giveLike(data);
    }

    _delLike(data) {
        this._removeLike(data);
    }
    addLikeClass() {
        this._likeBtnElement.classList.add('element__like-btn_active')
    }

    removeLikeClass() {
        this._likeBtnElement.classList.remove('element__like-btn_active')
    }

    setLikesCount(data) {
        this._likesCount.textContent = data.likes.length;
    }

    _checkOwnLike() {
        this.data.likes.forEach((likeOwner) => {
            if (likeOwner._id === this._ownerId) {
                this.addLikeClass();
            }
        })
    }
    //обработчик событий
    _setEventListeners () {
    this._imageElement.addEventListener('click', this.handleCardClick);  
    this._delBtnElement.addEventListener('click', this.handleDeleteIconClick);
    this._likeBtnElement.addEventListener('click', () => {
        if (this._likeBtnElement.classList.contains('element__like-btn_active')) {
            this._delLike()
        } else {
            this._setLike()
        }
    });
    };

    //метод создания карточки
    generateCard () {
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector('.element__item');
        this._captionElement = this._element.querySelector('.element__title');
        this._likeBtnElement = this._element.querySelector('.element__like-btn');
        this._likesCount = this._element.querySelector('.element__like-count');
        this._delBtnElement = this._element.querySelector('.element__delete-btn');
        this._imageElement.src = this.data.link;
        this._imageElement.alt = this.data.name;
        this._captionElement.textContent = this.data.name;
        this._checkOwnLike();
        this.setLikesCount(this.data);
        this._toggleBtnVisibility();
        this._setEventListeners();
        return this._element
    }
}
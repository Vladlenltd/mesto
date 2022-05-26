export class Card {
    constructor({ data, ownerId, handleCardClick, handleCardDelete, addLike, removeLike }, selector) {
        this.data = data;
        this.selector = selector;
        this.handleCardClick = handleCardClick;
        this.handleCardDelete = handleCardDelete;
        this._addLike = addLike;
        this._removeLike = removeLike;
        this._ownerId = ownerId;
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
        card = null
    }

    delCard() {
        this._removeCard(this._element);
    };

    _setEventListeners () {
    this._imageElement.addEventListener('click', this.handleCardClick);    
    this._delBtnElement.addEventListener('click', this.delCard);
    this._likeBtnElement.addEventListeners('click', () => {
        if(this._likeBtnElement.classList.contains('element__like-btn_active')) {
            this._removeLikeElement()
        } else {
            this._addLikeElement()
        }
    });
    };

    _checkOwner() {
        return (this.data.owner._id === this.ownerId);
    }

    _toggleDelBtnElementVisibility() {
        if (!this._checkOwner()) {
            this._delBtnElement.classList.add('element__delete-btn_disable')
        }
    }

    _addLikeElement(data) {
        this._addLike(data);
    }

    _removeLikeElement(data) {
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

    checkOwnLike() {
        this.data.likes.forEach((likeOwner) => {
            if (likeOwner._id === this._ownerId) {
                this.addLikeClass();
            }
        })
    }
    //метод создания карточки
    generateCard () {
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector('.element__item');
        this._captionElement = this._element.querySelector('.element__title');
        this._likeBtnElement = this._element.querySelector('.element__like-btn');
        this._likesCount = this._element.querySelector('.element__like-count');
        this._delBtnElement = this._element.querySelector('.element__delete-btn');
        this._imageElement.src = this.data.url;
        this._imageElement.alt = this.data.title;
        this._captionElement.textContent = this.data.title;
        this._checkOwnLike();
        this.setLikesCount(this.data);
        this._toggleDelBtnElementVisibility();
        this._setEventListeners();
        return this._element
    }
}

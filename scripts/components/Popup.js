export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeBtn = document.querySelector('.popup__close-btn')
    }
    
    open() {// публичный метод открытия popup
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {// публичный метод закрытия popup
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {// приватный метод закрытия popup клавишей ESC
        if (evt.key === 'Escape') {
            this.close()
        };
    }

    setEventListeners() { // публичный метод закрытия popup по клику на overlay и кнопку закрытия
        this._popupSelector.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close()
            }
        });
    }
}

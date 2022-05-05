export class Popup {
    constructor(selector) {
        this._selector = selector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this)
        this._closeBtn = this._selector.querySelector('.popup__close-btn')
    }
    
    open() {// публичный метод открытия popup
        this._selector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('mousedown', this._handleOverlayClose);
    }

    close() {// публичный метод закрытия popup
        this._selector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('mousedown', this._handleOverlayClose);
    }

    _handleEscClose(evt) {// приватный метод закрытия popup клавишей ESC
        if (evt.key === 'Escape') {
            this.close()
        };
    }

    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
        else if (evt.target === this._closeBtn) {
            this.close();
        }
    }
}
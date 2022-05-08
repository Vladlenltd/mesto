export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this)
        this._closeBtn = this._popupSelector.querySelector('.popup__close-btn')
    }
    
    open() {
        this._popupSelector.classList.add('popup_opened');
        this.setEventListeners();

    }
    
    close() {
        this._popupSelector.classList.remove('popup_opened');
        this.removeEventListeners();
    }
    
    _handleEscClose(evt) {
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
    setEventListeners() {
        document.addEventListener('mousedown', this._handleOverlayClose);
        document.addEventListener('keydown', this._handleEscClose);
    }
    
    removeEventListeners() {
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('mousedown', this._handleOverlayClose);
        
    }
}
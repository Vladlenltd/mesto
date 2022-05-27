export class FormValidator {
    constructor(obj, classForm) {
        this._classForm = classForm;
        this._formSelector = obj.formSelector;
        this._inputSelector = obj.inputSelector;
        this._submitButtonSelector = obj.submitButtonSelector;
        this._inactiveButtonClass = obj.inactiveButtonClass;
        this._inputErrorClass = obj.inputErrorClass;
        this._errorClass = obj.errorClass;
        // this._inputList = Array.from(this.classForm.querySelectorAll(this._inputSelector));
        // this._submitBtn = this.classForm.querySelector(this._submitButtonSelector);
    }

    _showError(inputElement) {
        const errorElement = this._classForm.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    _hideError(inputElement) {
        const errorElement = this._classForm.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass)
        errorElement.textContent = '';
    };

    _checkValidity(inputElement) {
        if(!inputElement.validity.valid) {
            this._showError(inputElement);
        } else {
            this._hideError(inputElement); 
        };
    };

    _hasInvalidInput() { 
        return this._inputList.some(inputElement => {
            return !inputElement.validity.valid;
        });
    }

    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', true);
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    };

    _setEventListeners () {
        this._inputList = Array.from(this._classForm.querySelectorAll(this._inputSelector));
        this._buttonElement = this._classForm.querySelector(this._submitButtonSelector);
        this.toggleButtonState();
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkValidity(inputElement);
                this.toggleButtonState();
            });
        });
    };
    enableValidation() {
        this._classForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }
    };

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const setEnableValidation =  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disable',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input_error'
};
// при вводе текста в input появляется текст ошибки
const showError = (formElement, inputElement, errorMessage, obj) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(obj['inputErrorClass']);
    errorElement.classList.add(obj['errorClass']);
    errorElement.textContent = errorMessage;
};
// убирает текст ошибки если input валиден
const hideError = (formElement, inputElement, obj) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(obj['inputErrorClass']);
    errorElement.classList.remove(obj['errorClass'])
    errorElement.textContent = '';
};
// проверка на валидность
const checkValidity = (formElement, inputElement, obj) => {
    const errorMessage= inputElement.validationMessage;

    if(!inputElement.validity.valid) {
        showError(formElement, inputElement, errorMessage, obj);
    } else {
        hideError(formElement, inputElement, obj); 
    };
};
// проверка валидации во всех input
const toggleButtonState = (inputList, buttonElement, obj) => {
    const hasInvalidInput = Array.from(inputList).some((inputElement) => {
        return !inputElement.validity.valid;
    });
    if (hasInvalidInput) {
        buttonElement.classList.add(obj['inactiveButtonClass']);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(obj['inactiveButtonClass']);
        buttonElement.removeAttribute('disabled');
    }
};
const setEventListener = (formElement, obj) => {
    const inputList = Array.from(formElement.querySelectorAll(obj['inputSelector']));
    const buttonElement = formElement.querySelector(obj['submitButtonSelector']);
    toggleButtonState(inputList, buttonElement, obj)
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkValidity(formElement, inputElement, obj);
            toggleButtonState(inputList, buttonElement, obj)
        });
    });
};

//проверка валидации
const enableVlaidation = (obj) => {
    const formList = Array.from(document.querySelectorAll(obj['formSelector']));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListener(formElement, obj);
    });
};
enableVlaidation(setEnableValidation);
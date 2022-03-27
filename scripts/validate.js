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
const showError = (formElement, inputElement, errorMessage, setEnableValidation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(setEnableValidation['inputErrorClass']);
    errorElement.classList.add(setEnableValidation['errorClass']);
    errorElement.textContent = errorMessage;
};
// убирает текст ошибки если input валиден
const hideError = (formElement, inputElement, setEnableValidation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(setEnableValidation['inputErrorClass']);
    errorElement.classList.remove(setEnableValidation['errorClass'])
    errorElement.textContent = '';
};
// проверка на валидность
const checkValidity = (formElement, inputElement, setEnableValidation) => {
    const errorMessage= inputElement.validationMessage;

    if(!inputElement.validity.valid) {
        showError(formElement, inputElement, errorMessage, setEnableValidation);
    } else {
        hideError(formElement, inputElement, setEnableValidation); 
    };
};
// проверка валидации во всех input
const toggleButtonState = (inputList, buttonElement, setEnableValidation) => {
    const hasInvalidInput = Array.from(inputList).some((inputElement) => {
        return !inputElement.validity.valid;
    });
    if (hasInvalidInput, setEnableValidation) {
        buttonElement.classList.add(setEnableValidation['inactiveButtonClass']);
        buttonElement.setAttribute('disable', true);
    } else {
        buttonElement.classList.remove(setEnableValidation['inactiveButtonClass']);
        buttonElement.removeAttribute('disable');
    }
};
const setEventListener = (formElement) => {
    const inputList = formElement.querySelectorAll(setEnableValidation['inputSelector']);
    const buttonElement = formElement.querySelector(setEnableValidation['submitButtonSelector']);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (evt) => {
            checkValidity(formElement, inputElement, setEnableValidation);
            toggleButtonState(inputList, buttonElement, setEnableValidation)
        });
    });
};

//проверка валидации
const enableVlaidation = () => {
    const formList = Array.from(document.querySelectorAll(setEnableValidation['formSelector']));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListener(formElement);
    });
};
enableVlaidation(setEnableValidation);
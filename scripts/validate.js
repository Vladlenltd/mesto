// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const enableValidation =  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input_error'
};
// при вводе текста в input появляется текст ошибки
const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.classList.add('popup__input_error');
    errorElement.textContent = errorMessage;
};
// убирает текст ошибки если input валиден
const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input_error');
    errorElement.textContent = '';
};
// проверка на валидность
const checkValidity = (formElement, inputElement) => {
    const errorMessage= inputElement.validationMessage;

    if(!inputElement.validity.valid) {
        showError(formElement, inputElement, errorMessage);
    } else {
        hideError(formElement, inputElement); 
    };
};
// проверка валидации во всех input
const toggleButtonState = (inputList, buttonElement) => {
    const hasInvalidInput = Array.from(inputList).some((inputElement) => {
        return !inputElement.validity.valid;
    });

    if (hasInvalidInput) {
        buttonElement.classList.add('popup__button_disable');
        buttonElement.setAttribute('disable', true);
    } else {
        buttonElement.classList.remove('popup__button_disable');
        buttonElement.removeAttribute('disable');
    }
};
// const hasInvalidInput = (inputList) => {
//     return Array.from(inputList).some((inputElement) => {
//         return !inputElement.validity.valid;
//     })
// };

// const toggleButtonState = (inputList, buttonElement) => {
//     if (hasInvalidInput(inputList)) {
//         buttonElement.classList.add('popup__button_disable');
//     } else {
//         buttonElement.classList.remove('popup__button_disable');
//     }
// };
const setEventListener = (formElement) => {
    const inputList = formElement.querySelectorAll('.popup__input');
    const buttonElement = formElement.querySelector('.popup__button');
    
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (evt) => {
            checkValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement)
        });
    });
};



//проверка валидации
const enableVlaidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListener(formElement);
    });
};
enableVlaidation(enableValidation);
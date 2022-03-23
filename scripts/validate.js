// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   });


const showError = (formElement, inputElement, errorMessage) => {
    errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error_active');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error_visible');
};

const hideError = (formElement, inputElement) => {
    errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error_active');
    errorElement.textContent = " ";
    errorElement.classList.remove('');
};

const checkValidity = (formElement, inputElement) => {
    if(!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideError(formElement, inputElement); 
    };
};

const setEventListener = (formElement) => {
    const inputList = document.querySelectorAll('.popup__input');
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkValidity(formElement, inputElement);
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
enableVlaidation();
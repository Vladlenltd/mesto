// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const enableValidation =  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type-error_active',
    errorClass: 'popup__input_type_error_active'
 };

// const showError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.textContent = errorMessage;
//     inputElement.classList.add('.popup__input_type-error');
//     errorElement.classList.add('popup__input_type-error_active')

//     console.log(errorMessage)
//     console.log(errorElement)
//     console.log(`.${inputElement.id}-error`);

// };
// const hideError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
// };
// проверка на валидность
const checkValidity = (formElement, inputElement) => {
    // const errorMessage= inputElement.validationMessage;
    // if(!inputElement.validity.valid) {
    //     showError(formElement, inputElement, errorMessage);
    // } else {
    //     hideError(formElement, inputElement); 
    // };
};

const setEventListener = (formElement) => {
    const inputList = formElement.querySelectorAll('.popup__input');
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (evt) => {
            checkValidity(formElement, inputElement);
            console.log(inputElement)
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
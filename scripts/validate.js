const setEventListener = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
}




const enableVlaidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        })
    })
};
enableVlaidation()
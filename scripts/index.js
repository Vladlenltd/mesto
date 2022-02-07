// Выбираю DOM элементы
const popupElement = document.querySelector('.popup');
const popupCloseBtnElement = popupElement.querySelector('.popup__close-btn');
const popupOpenBtnElement = document.querySelector('.profile__edit-btn');
// console.log(popupOpenBtnElement);
const togglePopupVisible = function() {
    popupElement.classList.toggle('popup_opened');
};
const openPopupElement = function() {
    popupElement.classList.add('popup_opened');
};
const closePopupElement = function() {
    popupElement.classList.remove('popup_opened');
}
//Добавляю обработчик событий
popupOpenBtnElement.addEventListener('click', openPopupElement);
popupCloseBtnElement.addEventListener('click', closePopupElement);
// 
// Находим форму в DOM
let formElement = document.querySelector('.popup__content');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__about');
console.log(jobInput);
console.log(nameInput);
console.log(formElement);
const popupSaveBtnElement = formElement.querySelector('.popup__save-btn') 
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
                                                // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
//Создаю открытие и закрытие popup
// Выбираю DOM элементы
const popupElement = document.querySelector('.popup');
const popupCloseBtnElement = popupElement.querySelector('.popup__close-btn');
const popupOpenBtnElement = document.querySelector('.profile__edit-btn');
 // Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

const openPopupElement = function() {
    popupElement.classList.add('popup_opened');
};
const closePopupElement = function() {
    popupElement.classList.remove('popup_opened');
}
//Добавляю обработчик событий
popupOpenBtnElement.addEventListener('click', openPopupElement);
popupCloseBtnElement.addEventListener('click', closePopupElement);
// создаю возможность добавление, изменения и сохранения input полей
// Находим форму в DOM
const formElement = document.querySelector('.popup__content');
// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_about');
//Переменная для кнопки "сохранить"
const popupSaveBtnElement = formElement.querySelector('.popup__save-btn');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function saveProfile (evt) {
    evt.preventDefault();   
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopupElement();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', saveProfile);
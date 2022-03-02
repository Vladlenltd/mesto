//Создаю открытие и закрытие popup
// Выбираю DOM элементы
//Popup профиля
const popupElement = document.querySelector('.popup');//нашел popup элемент профиля
const popupCloseBtnElement = document.querySelectorAll('.popup__close-btn');//нашел все кнопки закрытия popup
const popupOpenBtnElement = document.querySelector('.profile__edit-btn');//кнопка открытия
const profileName = document.querySelector('.profile__title');//
const profileJob = document.querySelector('.profile__subtitle');
const formElement = popupElement.querySelector('.popup__content');//находим форму в DOM
const nameInput = formElement.querySelector('.popup__input_type_name');//поля формы в DOM
const jobInput = formElement.querySelector('.popup__input_type_about');//поля формы в DOM
const popupSaveBtnElement = formElement.querySelector('.popup__save-btn');//переменная для кнопки "сохранить"

//Popup добавления изображения
const popupImage = document.querySelector('.popup__element-add');//нашел popup добавления изображения
const popupAddImage = document.querySelector('.profile__add-btn');//кнопка открытия попап добавления изображения
const popupSaveImage = document.querySelector('.popup__image_add');//кнопка сохранение элемента

//Popup фото
const popupFoto = document.querySelector('.popup__foto');

//функция открытия popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
};

//функция закрытия popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
};

//открытие popup профиля
popupOpenBtnElement.addEventListener('click', () => {
        openPopup(popupElement);
    });

//открытие popup добавления картинки
popupAddImage.addEventListener('click', () => {
        openPopup(popupImage);
    });

//закрытие popup
popupCloseBtnElement.forEach((button) => {
        button.addEventListener('click', (evt) => {
                closePopup(button.closest('.popup'));
            });
    });

//добавляю значения поля формы в DOM
nameInput.setAttribute('value', 'Жак-Ив Кусто');
jobInput.setAttribute('value', 'Исследователь океана');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function saveProfile (evt) {
    evt.preventDefault();
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupElement);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', saveProfile);
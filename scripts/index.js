import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

//функции
//открытие popup
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
  };

//закрытие popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc)  
};

// закрытие popup нажатием кнопки ESC
const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'))
  }
};

//закрытие popup кликом на оверлей
const closePopupByClickToOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target)
  }
};

//закрытие popup 
popupCloseBtnElementList.forEach((button) => {
  button.addEventListener('click', (evt) => {
    closePopup(button.closest('.popup'));
  });
});

//открытие popup профиля
popupOpenBtnElement.addEventListener('click', () => {
  openPopup(popupElementProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

//открытие popup добавления картинки
popupAddImage.addEventListener('click', () => {
  openPopup(popupImage);
});

//открытие popup карточки
export function fullViewPicture (evt) {
  const popupImg = evt.target.closest('.element__item');
  popupPicture.src = popupImg.src
  popupPicture.alt = popupImg.alt
  popupCaption.textContent = popupImg.alt
  openPopup(popupFoto);
};

//наполняю картинками элемент
function createImage(name, link, selector) {
  const cardImage = new Card(name, link, selector);
  const cardFromTemplate = cardImage.generateCard();
  return cardFromTemplate
};

function renderCard() {
  itemElements.prepend(createImage(titleInput.value, linkInput.value, '#card-template'))
};

//функция добавления новой карточки
function addCard(evt) {
  evt.preventDefault();
  renderCard()
  clearForm();
  closePopup(popupImage);
};

//перебираю элементы массива
function loadCard() {
  initialCards.forEach((item) => {
    itemElements.append(createImage(item.name, item.link, '#card-template'))
  })
};
loadCard();

//сброс формы
function clearForm() {
  formImage.reset();
  validationAddImageForm.toggleButtonState();
};

//сохранение профиля
function saveProfile (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupElementProfile);
}

//обработчики событий

//добавление карточки
formImage.addEventListener('submit', addCard);

//изменение профиля
formElementProfile.addEventListener('submit', saveProfile);

//закрытие модальных окон
popupElementProfile.addEventListener('click', closePopupByClickToOverlay);
popupImage.addEventListener('click', closePopupByClickToOverlay);
popupFoto.addEventListener('click', closePopupByClickToOverlay);

// валидация форм из конструктора
const validationProfileForm = new FormValidator (setEnableValidation, formElementProfile);
validationProfileForm.enableValidation();
const validationAddImageForm = new FormValidator (setEnableValidation, formImage);
validationAddImageForm.enableValidation();
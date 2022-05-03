import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { initialCards, setEnableValidation } from "../utils/constants.js"

// переменные для работы с закрытием модальных окон
const popupCloseBtnElementList = document.querySelectorAll('.popup__close-btn');//нашел все кнопки закрытия popup
const popups = document.querySelectorAll('.popup');
console.log(popups);
// переменные для работы с профилем
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

// переменные для работы с формой профиля
const popupProfile = document.querySelector('.popup_profile');//rn//нашел popup элемент профиля
const formElementProfile = popupProfile.querySelector('.popup__form');//находим форму в DOM
const workInput = formElementProfile.querySelector('.popup__input_type_about');//rn//поля формы в DOM
const nameInput = formElementProfile.querySelector('.popup__input_type_name');//поля формы в DOM

// переменные для работы с модальным окном профиля
const openProfileBtn = document.querySelector('.profile__edit-btn');//rn//кнопка открытия

// переменные для работы с формой добавления картинками
const popupImage = document.querySelector('.popup_picture');//нашел popup добавления изображения
const formImage = popupImage.querySelector('.popup__content');//нашел форму изображения в DOM
const titleInput = formImage.querySelector('.popup__input_type_title');//поле формы изображения в DOM
const linkInput = formImage.querySelector('.popup__input_type_link');//поле формы изображения в DOM

// переменные для работы с модальным окном добавления картинки
const popupAddImage = document.querySelector('.profile__add-btn');//кнопка открытия попап добавления изображения
const submitPopupBtn = document.querySelector('.popup__image-add');//кнопка сохранение элемента submit

// переменные для работы с модальным окном картинки
const popupFoto = document.querySelector('.popup_card');//нашел popup фото
const popupPicture = popupFoto.querySelector('.popup__img');//нашел картинку
const popupCaption = popupFoto.querySelector('.popup__caption');//нашел подпись
//переменная для создания карточки
const itemElements = document.querySelector('.elements');//переменная для добавления карточки

const validationProfileForm = new FormValidator (setEnableValidation, formElementProfile);
validationProfileForm.enableValidation();
const validationAddImageForm = new FormValidator (setEnableValidation, formImage);
validationAddImageForm.enableValidation();
const cardsListSelector = '.elements';

const popupEdit = new PopupWithForm(popupProfile, {
  handleSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    popupEdit.close();
  }
});

const popupAddFoto = new PopupWithForm(popupImage, {
  handleSubmit: (formData) => {
    cards.addItem(formData);
    popupAddFoto.close();
  }
})

openProfileBtn.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.userName;
  workInput.value = userData.userWork;
  validationProfileForm.toggleButtonState();
  popupEdit.open();
});



submitPopupBtn.addEventListener('click', () => {
  validationProfileForm.toggleButtonState();
  popupAddPicture.open();
})
const userInfo = new UserInfo({
  titleSelector: '.profile__title',
  workSelector: '.profile__subtitle'
})

const popupWithImage = new PopupWithImage(popupFoto);
const createCard = (data) => {
  const card = new Card({data, handleCardClick: () => {
    popupWithImage.open(data.title, data.link);
  }
}, '#card-template'
);
return card
}

const cards = new Section({
  items: initialCards, renderer: (initialCards) => {
    const card = createCard(initialCards);
    const cardFromTemplate = card.generateCard();
    return cardFromTemplate;
  }
}, cardsListSelector)
cards.renderItems();
// //функции
// //открытие popup
// export function openPopup(popup) {
//     popup.classList.add('popup_opened');
//     document.addEventListener('keydown', closePopupByEsc);
//   };

// //закрытие popup
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupByEsc)  
// };

// // закрытие popup нажатием кнопки ESC
// const closePopupByEsc = (evt) => {
//   if (evt.key === 'Escape') {
//     closePopup(document.querySelector('.popup_opened'))
//   }
// };

// //закрытие popup кликом на оверлей
// const closePopupByClickToOverlay = (evt) => {
//   if (evt.target === evt.currentTarget) {
//     closePopup(evt.target)
//   }
// };

// //закрытие popup 
// popupCloseBtnElementList.forEach((button) => {
//   button.addEventListener('click', (evt) => {
//     closePopup(button.closest('.popup'));
//   });
// });

// //открытие popup профиля
// openProfileBtn.addEventListener('click', () => {
//   openPopup(popupProfile);
//   nameInput.value = profileName.textContent;
//   workInput.value = profileJob.textContent;
// });

// //открытие popup добавления картинки
// popupAddImage.addEventListener('click', () => {
//   openPopup(popupImage);
// });

// //открытие popup карточки
// export function fullViewPicture (evt) {
//   const popupImg = evt.target.closest('.element__item');
//   popupPicture.src = popupImg.src
//   popupPicture.alt = popupImg.alt
//   popupCaption.textContent = popupImg.alt
//   openPopup(popupFoto);
// };

// //наполняю картинками элемент
// function createImage(name, link, selector) {
//   const cardImage = new Card(name, link, selector);
//   const cardFromTemplate = cardImage.generateCard();
//   return cardFromTemplate
// };

// function renderCard() {
//   itemElements.prepend(createImage(titleInput.value, linkInput.value, '#card-template'))
// };

// //функция добавления новой карточки
// function addCard(evt) {
//   evt.preventDefault();
//   renderCard()
//   clearForm();
//   closePopup(popupImage);
// };

// //перебираю элементы массива
// function loadCard() {
//   initialCards.forEach((item) => {
//     itemElements.append(createImage(item.name, item.link, '#card-template'))
//   })
// };
// loadCard();

// //сброс формы
// function clearForm() {
//   formImage.reset();
//   validationAddImageForm.toggleButtonState();
// };

// //сохранение профиля
// function saveProfile (evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = workInput.value;
//   closePopup(popupProfile);
// }

// //обработчики событий

// //добавление карточки
// formImage.addEventListener('submit', addCard);

// //изменение профиля
// formElementProfile.addEventListener('submit', saveProfile);

// //закрытие модальных окон
// popupProfile.addEventListener('click', closePopupByClickToOverlay);
// popupImage.addEventListener('click', closePopupByClickToOverlay);
// popupFoto.addEventListener('click', closePopupByClickToOverlay);

// валидация форм из конструктора
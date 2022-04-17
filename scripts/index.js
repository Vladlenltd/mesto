import { Card } from "../scripts/card.js";
import { initialCards } from "./initialcards.js";
import { FormValidator } from "./FormValidator.js";
import { setEnableValidation } from "./validate.js"

// переменные для работы с закрытием модальных окон
const popupCloseBtnElementList = document.querySelectorAll('.popup__close-btn');//нашел все кнопки закрытия popup
const popups = document.querySelectorAll('.popup')

// переменные для работы с профилем
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

// переменные для работы с формой профиля
const popupElementProfile = document.querySelector('.popup_profile');//нашел popup элемент профиля
const formElementProfile = popupElementProfile.querySelector('.popup__form');//находим форму в DOM
console.log(formElementProfile);
const jobInput = formElementProfile.querySelector('.popup__input_type_about');//поля формы в DOM
const nameInput = formElementProfile.querySelector('.popup__input_type_name');//поля формы в DOM

// переменные для работы с модальным окном профиля
const popupSaveBtnElement = formElementProfile.querySelector('.popup__button');//переменная для кнопки "сохранить"
const popupOpenBtnElement = document.querySelector('.profile__edit-btn');//кнопка открытия

// переменные для работы с формой добавления картинками
const popupImage = document.querySelector('.popup_picture');//нашел popup добавления изображения
const formImage = popupImage.querySelector('.popup__content');//нашел форму изображения в DOM
const titleInput = formImage.querySelector('.popup__input_type_title');//поле формы изображения в DOM
const linkInput = formImage.querySelector('.popup__input_type_link');//поле формы изображения в DOM

// переменные для работы с модальным окном добавления картинки
const popupAddImage = document.querySelector('.profile__add-btn');//кнопка открытия попап добавления изображения
const popupSaveImage = document.querySelector('.popup__image-add');//кнопка сохранение элемента submit

// переменные для работы с модальным окном картинки
const popupFoto = document.querySelector('.popup_card');//нашел popup фото
const popupPicture = popupFoto.querySelector('.popup__img');//нашел картинку
const popupCaption = popupFoto.querySelector('.popup__caption');//нашел подпись

//переменная для создания карточки
const itemElements = document.querySelector('.elements');//переменная для добавления карточки

//функция открытия popup
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
  };

  //функция закрытия popup
  function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc)  
  };

//   popups.forEach((popup) => {
//     popup.addEventListener('mousedown', (evt) => {
//         if (evt.target.classList.contains('popup_opened')) {
//             closePopup(popup)
//         }
//         if (evt.target.classList.contains('popup__close')) {
//           closePopup(popup)
//         }
//     })
// })

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
popupElementProfile.addEventListener('click', closePopupByClickToOverlay);
popupImage.addEventListener('click', closePopupByClickToOverlay);
popupFoto.addEventListener('click', closePopupByClickToOverlay);

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
// //закрытие popup 

popupCloseBtnElementList.forEach((button) => {
        button.addEventListener('click', (evt) => {
                closePopup(button.closest('.popup'));
            });
    });
// //переменные для работы с массивов
// const itemTemplateContent = document.querySelector('.item-template').content;//получаю содержимое template
// //наполняю картинками элемент
  function createImage(name, link, selector) {
    const cardImage = new Card(name, link, selector);
    const cardFromTemplate = cardImage.generateCard();
    return cardFromTemplate
  };
//   //   const imageElement = itemTemplateContent.querySelector('.element').cloneNode(true);//клонирую элемент
//   //   const cardData = imageElement.querySelector('.element__item');
//   //   const cardTitle = imageElement.querySelector('.element__title');
//   //   cardData.alt = name;
//   //   cardTitle.textContent = name;
//   //   cardData.src = link; 
// //слушатель кнопки "мне нравиться"
//   // const likeBtnElement = imageElement.querySelector('.element__like-btn');
//   // likeBtnElement.addEventListener('click', likeCard);
// // удаление картинки
//   // const delBtnElement = imageElement.querySelector('.element__delete-btn');
//   // delBtnElement.addEventListener('click', delCard);
// //открытие popup картинки
//   // const fullViewBtn = imageElement.querySelector('.element__item')
//   // fullViewBtn.addEventListener('click', fullViewPicture);

//   //   return imageElement;
//   // };

function renderCard() {
  itemElements.prepend(createImage(titleInput.value, linkInput.value, '#card-template'))
};
// //функция добавления новой карточки
function addImage(evt) {
  evt.preventDefault();
  renderCard()
  clearForm();
  closePopup(popupImage);
};
// formImage.addEventListener('submit', addImage);//прикрепляю обработчик к форме
// //перебираю элементы массива
function loadCard() {
  initialCards.forEach((item) => {
  itemElements.append(createImage(item.name, item.link, '#card-template'))
  console.log(itemElements);
})
  };
loadCard();
//функция fullViewPicture
  // function fullViewPicture (evt) {
  //   const popupImg = evt.target.closest('.element__item');
  //   popupPicture.src = popupImg.src
  //   popupPicture.alt = popupImg.alt
  //   popupCaption.textContent = popupImg.alt
  //   openPopup(popupFoto);
  // };
function clearForm() {
  linkInput.value = '';
  titleInput.value = '';
};
// валидация форм из конструктора
const validationProfileForm = new FormValidator (setEnableValidation, formElementProfile);
validationProfileForm.enableValidation();
const validationAddImageForm = new FormValidator (setEnableValidation, formImage);
validationAddImageForm.enableValidation();
// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
function saveProfile (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupElementProfile);
}
// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
formElementProfile.addEventListener('submit', saveProfile);
export const setEnableValidation =  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disable',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input_error'
};

// // переменные для работы с закрытием модальных окон
// const popupCloseBtnElementList = document.querySelectorAll('.popup__close-btn');//нашел все кнопки закрытия popup

// // переменные для работы с профилем
// const profileName = document.querySelector('.profile__title');
// const profileJob = document.querySelector('.profile__subtitle');

// // переменные для работы с формой профиля
// const popupElementProfile = document.querySelector('.popup_profile');//нашел popup элемент профиля
// const formElementProfile = popupElementProfile.querySelector('.popup__form');//находим форму в DOM
// const jobInput = formElementProfile.querySelector('.popup__input_type_about');//поля формы в DOM
// const nameInput = formElementProfile.querySelector('.popup__input_type_name');//поля формы в DOM

// // переменные для работы с модальным окном профиля
// const popupOpenBtnElement = document.querySelector('.profile__edit-btn');//кнопка открытия

// // переменные для работы с формой добавления картинками
// const popupImage = document.querySelector('.popup_picture');//нашел popup добавления изображения
// const formImage = popupImage.querySelector('.popup__content');//нашел форму изображения в DOM
// const titleInput = formImage.querySelector('.popup__input_type_title');//поле формы изображения в DOM
// const linkInput = formImage.querySelector('.popup__input_type_link');//поле формы изображения в DOM

// // переменные для работы с модальным окном добавления картинки
// const popupAddImage = document.querySelector('.profile__add-btn');//кнопка открытия попап добавления изображения
// const popupSaveImage = document.querySelector('.popup__image-add');//кнопка сохранение элемента submit

// // переменные для работы с модальным окном картинки
// const popupFoto = document.querySelector('.popup_card');//нашел popup фото
// const popupPicture = popupFoto.querySelector('.popup__img');//нашел картинку
// const popupCaption = popupFoto.querySelector('.popup__caption');//нашел подпись

// //переменная для создания карточки
// const itemElements = document.querySelector('.elements');//переменная для добавления карточки

// массыв с карточками
export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
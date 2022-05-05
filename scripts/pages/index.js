import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { initialCards, setEnableValidation } from "../utils/constants.js"

const popupImage = document.querySelector('.popup_picture');
const popupFoto = document.querySelector('.popup_card');
const popupProfile = document.querySelector('.popup_profile');
const addImageBtn = document.querySelector('.profile__add-btn');
const openProfileBtn = document.querySelector('.profile__edit-btn');
const formImage = document.querySelector('.form__picture');
const formElementProfile = document.querySelector('.form__profile');
const titleInput = formElementProfile.querySelector('#name-input');
const workInput = formElementProfile.querySelector('#about-input');
const cardsListSelector = '.elements';
const validationProfileForm = new FormValidator (setEnableValidation, formElementProfile);
const validationAddImageForm = new FormValidator (setEnableValidation, formImage);

const userInfo = new UserInfo({
  titleSelector: '.profile__title',
  workSelector: '.profile__subtitle'
})

const popupAddPicture = new PopupWithForm(popupImage, {
  handleSubmit: (formData) => {
    cards.setItem(formData);
  }
});

addImageBtn.addEventListener('click', () => {
  popupAddPicture.open();
});

const newPopupProfile = new PopupWithForm(popupProfile, {
  handleSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    newPopupProfile.close();
  }
});

openProfileBtn.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    titleInput.value = userData.userName;
    workInput.value = userData.userWork;
    newPopupProfile.open();
  });

const cards = new Section({
  items: initialCards, renderer: (item) => {
    const card = new Card({
      data: item, handleCardClick: () => {
        const popupCard = new PopupWithImage(popupFoto);
        popupCard.open(item.name, item.link);
      }
    }, '#card-template');
    const cardFromTemplate = card.generateCard();
    return cardFromTemplate;
  }
}, cardsListSelector);

cards.renderItems();

validationProfileForm.enableValidation();
validationAddImageForm.enableValidation();

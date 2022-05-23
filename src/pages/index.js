// import { Api } from "../scripts/components/Api.js";
import { api } from "../scripts/components/api.js";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { initialCards, setEnableValidation } from "../scripts/utils/constants.js"
import './index.css'

const addImageBtn = document.querySelector('.profile__add-btn');
const openProfileBtn = document.querySelector('.profile__edit-btn');
const formImage = document.querySelector('.popup__form-picture');
const formElementProfile = document.querySelector('.popup__form-profile');
const titleInput = formElementProfile.querySelector('#name-input');
const workInput = formElementProfile.querySelector('#about-input');
const cardsListSelector = '.elements';
const validationProfileForm = new FormValidator (setEnableValidation, formElementProfile);
const validationAddImageForm = new FormValidator (setEnableValidation, formImage);

const userInfo = new UserInfo({
  titleSelector: '.profile__title',
  workSelector: '.profile__subtitle'
})

const popupAddPicture = new PopupWithForm('.popup_picture', {
  handleSubmit: (item) => {
    cards.addItem(createCard(item));
    popupAddPicture.close();
  }
});

addImageBtn.addEventListener('click', () => {
  validationAddImageForm.toggleButtonState()
  popupAddPicture.open();
});
popupAddPicture.setEventListeners();

const newPopupProfile = new PopupWithForm('.popup_profile', {
  handleSubmit: (data) => {
    userInfo.setUserInfo(data);
    newPopupProfile.close();
  }
});

openProfileBtn.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    titleInput.value = userData.userName;
    workInput.value = userData.userWork;
    newPopupProfile.open();
  });

  newPopupProfile.setEventListeners();

    const popupCard = new PopupWithImage('.popup_card');
  
    const createCard = (item) => {
      const card = new Card ( {
        data: item,
        handleCardClick: () => {
          popupCard.open(item.title, item.url);
        }
      }, '#template');
      const cardElement = card.generateCard();
      return cardElement
    }
    const cards = new Section({
      items: initialCards, renderer: (item) => {
        cards.addItem(createCard(item));
      }
    }, cardsListSelector)
    cards.renderItems();
    
    api.getUserInfo();
    popupCard.setEventListeners();
validationProfileForm.enableValidation();
validationAddImageForm.enableValidation();

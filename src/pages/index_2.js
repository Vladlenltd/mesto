import { Api } from "../scripts/components/Api.js";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithSubmit } from "../scripts/components/PopupWithSubmit.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
// import { initialCards, setEnableValidation } from "../scripts/utils/constants.js"
import { setEnableValidation } from "../scripts/utils/constants.js"
import './index.css'

const addImageBtn = document.querySelector('.profile__add-btn');
const openProfileBtn = document.querySelector('.profile__edit-btn');
const editAvatarBtn = document.querySelector('.profile__edit-avatar');
const formImage = document.querySelector('.popup__form-picture');
const formAvatar = document.querySelector('.popup_profile-foto');
const formElementProfile = document.querySelector('.popup__form-profile');
const avatarInput = formAvatar.querySelector('#avatar-input');
const titleInput = formElementProfile.querySelector('#name-input');
const workInput = formElementProfile.querySelector('#about-input');
const cardsListSelector = '.elements';
const validationProfileForm = new FormValidator (setEnableValidation, formElementProfile);
const validationAddImageForm = new FormValidator (setEnableValidation, formImage);
const validationAvatarForm = new FormValidator (setEnableValidation, formAvatar);

let cardForDelete = null;
let userId = null

const api = new Api({
      baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
      headers: {
          authorization: '6be6d1f2-064d-406f-a1f7-f93c76457b36',
          'Content-Type': 'application/json'
      }
  })

  api.getInitialInfo()
    .then((data) => {
      const [info, initialCards] = data;
      userInfo.setUserInfo(info);
      userInfo.setUserAvatar(info);
      userId = info._id;
      console.log(`Мой userId: ${userId}`);
      cards.renderItems(initialCards);
    })
    .catch((err => {
      console.log(err);
    }))

    const userInfo = new UserInfo({
      titleSelector: '.profile__title',
      workSelector: '.profile__subtitle',
      avatarSelector: '.profile__foto',
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
    
    popupCard.setEventListeners();
validationProfileForm.enableValidation();
validationAddImageForm.enableValidation();
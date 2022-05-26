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
  handleSubmit: (formData) => {
    popupAddPicture.toggleBtnValue(true);
    api.addNewCard(formData)
    .then((data) => {
      const card = createCard(data);
      const cardElement = card.generateCard();
      cards.addItem(cardElement, 'prepend');
      popupAddPicture.toggleBtnValue(false);
      // cards.addItem(createCard(item));
      popupAddPicture.close();
      })
      .catch((err => {
        console.log(err);
      }))
      .finally(() => {
        popupAddPicture.toggleBtnValue(false)
      })
  }
});

addImageBtn.addEventListener('click', () => {
  validationAddImageForm.toggleButtonState()
  popupAddPicture.open();
});
popupAddPicture.setEventListeners();

const newPopupProfile = new PopupWithForm('.popup_profile', {
  handleSubmit: (formData) => {
    newPopupProfile.toggleBtnValue(true);
    api.setUserInfo(formData)
      .then((res) => {
        userInfo.setUserInfo(res);
        newPopupProfile.close();
      })
      .catch((err => {
        console.log(err);
      }))
      .finally(() => {
        newPopupProfile.toggleBtnValue(false)
      })
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
  
  popupCard.setEventListeners();
  
  const popupSubmit = new PopupWithSubmit('.popup_confirm', {
      handleSubmit: (data) => {
        api.delCard(data)
        .then(() => {
          cardForDelete.delCard();
        })
        .then(() => {
          cardForDelete = null;
          popupSubmit.close();
        })
        .catch((err => {
          console.log(err);
        }))
      }
    })
  
    popupSubmit.setEventListeners

    const popupEditAvatar = new PopupWithForm('.popup_profile-foto', {
      handleSubmit: (formData) => {
        popupEditAvatar.toggleBtnValue(true);
        api.addUserAvatar(formData)
        .then((res => {
          userInfo.setUserAvatar(res);
          popupEditAvatar.toggleBtnValue(false)
          popupEditAvatar.close();
        }))
        .catch((err => {
          console.log(err);
        }))
        .finally(() => {
          popupEditAvatar.toggleBtnValue(false)
        })
      }
    })

    popupEditAvatar.setEventListeners();

    editAvatarBtn.addEventListener('click', () => {
      const userAvatar = userInfo.getUserAvatar();
      avatarInput.value = userAvatar;
      validationAvatarForm.toggleButtonState();
      popupEditAvatar.open();
    })

    const createCard = (data) => {
      const card = new Card ( {
        data, ownerId: userId,
        handleCardClick: () => {
          popupCard.open(data.title, data.url);
        }, 
        handleCardDelete: () => {
          cardForDelete = card;
          popupSubmit.open(data);
        },
        addLike: () => {
          api.addlike
          .then((data) => {
            card.addLikeClass();
            card.setLikesCount(data);
          })
          .catch((err => {
            console.log(err);
          }))
        },
        removeLike: () => {
          api.delLike(data)
          .then((data) => {
            card.removeLikeClass();
            card.setLikesCount(data);
          })
          .catch((err => {
            console.log(err);
          }))
        }
      }, '#template');
      // const cardElement = card.generateCard();
      return card
      
    }
    
    const cards = new Section({
      renderer: (initialCards) => {
        const card = createCard(initialCards);
        const cardElement = card.generateCard();
        cards.addItem(cardElement, 'append');
      }
    }, cardsListSelector)
    // cards.renderItems();
    

validationProfileForm.enableValidation();
validationAddImageForm.enableValidation();
validationAvatarForm.enableValidation();

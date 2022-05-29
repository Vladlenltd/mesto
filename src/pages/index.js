import { Api } from "../scripts/components/Api.js";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithSubmit } from "../scripts/components/PopupWithSubmit.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
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
      const [initialInfo, initialCards] = data;
      userInfo.setUserInfo(initialInfo);
      userInfo.setUserAvatar(initialInfo);
      userId = initialInfo._id;
      photos.renderItems(initialCards);
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
      // const cardTemplate = card.generateCard();
      photos.addItem(card, 'prepend');
      popupAddPicture.toggleBtnValue(false);
      popupAddPicture.close();
      })
      .catch((err => {
        console.log('не возможно добавить фотографию');
      }))
      .finally(() => {
        popupAddPicture.toggleBtnValue(false)
      })
  }
});

popupAddPicture.setEventListeners();

addImageBtn.addEventListener('click', () => {
  validationAddImageForm.toggleButtonState()
  popupAddPicture.open();
});

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

newPopupProfile.setEventListeners();

openProfileBtn.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    titleInput.value = userData.userName;
    workInput.value = userData.userWork;
    newPopupProfile.open();
  });
  
  const popupCard = new PopupWithImage('.popup_card');

  popupCard.setEventListeners();

  const popupAvatarEdit = new PopupWithForm('.popup_profile-foto', {
    handleSubmit: (formData) => {
      popupAvatarEdit.toggleBtnValue(true);
      api.newUserAvatar(formData)
      .then((res => {
        userInfo.setUserAvatar(res);
        popupAvatarEdit.toggleBtnValue(false)
        popupAvatarEdit.close();
      }))
      .catch((err => {
        console.log('не возможно сохранить изображение');
      }))
      .finally(() => {
        popupAvatarEdit.toggleBtnValue(false)
      })
    }
  })

popupAvatarEdit.setEventListeners();

editAvatarBtn.addEventListener('click', () => {
  validationAvatarForm.toggleButtonState();
  popupAvatarEdit.open();
})

    const popupConfirm = new PopupWithSubmit('.popup_confirm', {
      handleSubmit: (data) => {
        api.delCard(data)
        .then(() => {
          cardForDelete.deleteCard();
        })
        .then(() => {
          cardForDelete = null;
          popupConfirm.close();
        })
        .catch((err => {
          console.log('удаление не возможно');
        }))
      }
    })

    popupConfirm.setEventListeners();

    const createCard = (data) => {
      const card = new Card ( {
        data, ownerId: userId,
        handleCardClick: () => {
          popupCard.open(data.name, data.link);
        },
        handleDeleteIconClick: () => {
          cardForDelete = card;
          popupConfirm.open(data);
        },
        giveLike: () => {
          api.addlike(data)
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
      return card.generateCard();
      
    }
    
    const photos = new Section({
      renderer: (initialCards) => {
        const card = createCard(initialCards);
        photos.addItem(card, 'append');
      }
    }, cardsListSelector)
    
validationProfileForm.enableValidation();
validationAddImageForm.enableValidation();
validationAvatarForm.enableValidation();

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
const popupImage = document.querySelector('.popup__element');//нашел popup добавления изображения
const popupAddImage = document.querySelector('.profile__add-btn');//кнопка открытия попап добавления изображения
const popupSaveImage = document.querySelector('.popup__image-add');//кнопка сохранение элемента submit
const formImage = popupImage.querySelector('.popup__content');//нашел форму изображения в DOM
const titleInput = formImage.querySelector('.popup__input_type_title');//поле формы изображения в DOM
const linkInput = formImage.querySelector('.popup__input_type_link');//поле формы изображения в DOM
//Popup фото
const popupFoto = document.querySelector('.popup__image');//нашел popup фото
const popupPicture = popupFoto.querySelector('.popup__img');//нашел картинку
const popupCaption = popupFoto.querySelector('.popup__caption');//нашел подпись

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
//массив карточек
const initialCards = [
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
//переменные для работы с массивов
const itemTemplateContent = document.querySelector('.item-template').content;//получаю содержимое template
const itemElements = document.querySelector('.elements');//переменная для добавления карточки
const imageElement = itemTemplateContent.querySelector('.element').cloneNode(true);//клонирую элемент
//наполняю картинками элемент
function createImage(item) {
  const imageElement = itemTemplateContent.querySelector('.element').cloneNode(true);//клонирую элемент

  imageElement.querySelector('.element__item').src = item.link;//ссылка на изображение из массива
  imageElement.querySelector('.element__item').alt = item.name;//описание изображения из массива
  imageElement.querySelector('.element__title').textContent = item.name;//название изображения из массива 
  itemElements.prepend(imageElement);//добавляю элемент на страницу
//слушатель кнопки "мне нравиться"
const likeBtnElement = imageElement.querySelector('.element__like-btn');
likeBtnElement.addEventListener('click', likeCard);
// удаление картинки
const delBtnElement = imageElement.querySelector('.element__delete-btn');
delBtnElement.addEventListener('click', delCard);
//открытие popup картинки
const fullViewBtn = imageElement.querySelector('.element__item')
fullViewBtn.addEventListener('click', FullViewPicture);

  return imageElement;
}
//функция добавления новой карточки
function addImage(evt) {
  evt.preventDefault();
  const imageElement = itemTemplateContent.querySelector('.element').cloneNode(true);//клонирую элемент
  imageElement.querySelector('.element__item').src = linkInput.value;//ссылка на изображение
  imageElement.querySelector('.element__item').alt = titleInput.value;//ссылка на описание
  imageElement.querySelector('.element__title').textContent = titleInput.value;//название изображения 
  itemElements.prepend(imageElement);//добавляю элемент на страницу
  closePopup(popupImage);
};
formImage.addEventListener('submit', addImage);//прикрепляю обработчик к форме
//перебираю элементы массива
function renderImage(initialCards) {
  initialCards.forEach((createImage));
};
renderImage(initialCards);
//функция кнопки "мне нравится"
function likeCard(evt) {
  evt.target.classList.toggle('element__like-btn_active');
};
//функция удаления карточки
function delCard(evt) {
  evt.target.closest('.element').remove();
};
//функция FullViewPicture
function FullViewPicture (evt) {
  const popupImg = evt.target.closest('.element__item');
  popupPicture.src = popupImg.src
  popupCaption.textContent = popupImg.alt
  openPopup(popupFoto);
};
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
let popupSaveButton = document.querySelector('.popup__save-button');
//форма popup
let formElement = document.querySelector('.popup__container');

    let name1 = document.querySelector('.popup__name');
  name1.setAttribute('value','238576128686');
    let aboutOneself1 = document.querySelector('.popup__about-oneself');
    aboutOneself1.setAttribute('value','djghkljhgkjh');

// функция обновление инфо в профиле
function saveProfile(evt) {
  console.log('Мы кликнули по кнопке "Сохранить"');
  console.log(evt);

  // Эта строчка отменяет стандартную отправку формы, т.к. мы можем определить свою логику отправки.
  evt.preventDefault();

 
    // поля input в DOM
    let name = document.querySelector('.popup__name');
  name.setAttribute('value',name1.textContent);
    let aboutOneself = document.querySelector('.popup__about-oneself');
    aboutOneself.setAttribute('value',aboutOneself1);


  // Вставьте новые значения с помощью textContent
  let title2=name.getAttribute('value');
  console.log(title2.textContent);
  let subtitle2=aboutOneself.getAttribute('value');
  console.log(subtitle2.textContent);

  // Чтобы закрыть попап, удаляйте у него модификатор popup_opened
  // манипулируем с классами элемента - убираем модификатор для "вспытия" окна
 }


// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', saveProfile);
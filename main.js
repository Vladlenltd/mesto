(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{debugger:"",method:"GET",headers:this._headers}).then(this._checkStatus)}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._checkStatus(t)}))}},{key:"getInitialInfo",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkStatus)}},{key:"newUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkStatus)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.title,link:e.url})}).then(this._checkStatus)}},{key:"delCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._checkStatus)}},{key:"addlike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkStatus)}},{key:"delLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkStatus)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.data,o=t.ownerId,i=t.handleCardClick,a=t.handleDeleteIconClick,u=t.giveLike,l=t.removeLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=r,this.selector=n,this.handleCardClick=i,this.handleDeleteIconClick=a,this._ownerId=o,this._giveLike=u,this._removeLike=l}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this.selector).content.querySelector(".element").cloneNode(!0)}},{key:"_removeCard",value:function(e){e.remove(),e=null}},{key:"deleteCard",value:function(){this._removeCard(this._element)}},{key:"_checkOwner",value:function(){return this.data.owner._id===this._ownerId}},{key:"_toggleBtnVisibility",value:function(){this._checkOwner()||this._delBtnElement.classList.add("element__delete-btn_disable")}},{key:"_setLike",value:function(e){this._giveLike(e)}},{key:"_delLike",value:function(e){this._removeLike(e)}},{key:"addLikeClass",value:function(){this._likeBtnElement.classList.add("element__like-btn_active")}},{key:"removeLikeClass",value:function(){this._likeBtnElement.classList.remove("element__like-btn_active")}},{key:"setLikesCount",value:function(e){this._likesCount.textContent=e.likes.length}},{key:"_checkOwnLike",value:function(){var e=this;this.data.likes.forEach((function(t){t._id===e._ownerId&&e.addLikeClass()}))}},{key:"_setEventListeners",value:function(){var e=this;this._imageElement.addEventListener("click",this.handleCardClick),this._delBtnElement.addEventListener("click",this.handleDeleteIconClick),this._likeBtnElement.addEventListener("click",(function(){e._likeBtnElement.classList.contains("element__like-btn_active")?e._delLike():e._setLike()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._imageElement=this._element.querySelector(".element__item"),this._captionElement=this._element.querySelector(".element__title"),this._likeBtnElement=this._element.querySelector(".element__like-btn"),this._likesCount=this._element.querySelector(".element__like-count"),this._delBtnElement=this._element.querySelector(".element__delete-btn"),this._imageElement.src=this.data.link,this._imageElement.alt=this.data.name,this._captionElement.textContent=this.data.name,this._checkOwnLike(),this.setLikesCount(this.data),this._toggleBtnVisibility(),this._setEventListeners(),this._element}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._classForm=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,n;return t=e,(n=[{key:"_showError",value:function(e){var t=this._classForm.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_hideError",value:function(e){var t=this._classForm.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._classForm.querySelectorAll(this._inputSelector)),this._buttonElement=this._classForm.querySelector(this._submitButtonSelector),this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._classForm.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){"append"===t?this._container.append(e):this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._closeBtn=this._popup.querySelector(".popup__close-btn")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target===e._closeBtn)&&e.close()}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e,t){var n,r=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=r,n._formElement=n._popup.querySelector(".popup__form"),n._inputList=n._formElement.querySelectorAll(".popup__input"),n._formSubmitBtn=n._formElement.querySelector(".popup__button"),n._formSubmitBtnValue=n._formSubmitBtn.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;p(_(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(){e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){this._formElement.reset(),p(_(a.prototype),"close",this).call(this)}},{key:"toggleBtnValue",value:function(e){this._formSubmitBtn.textContent=e?"Сохранение...":this._formSubmitBtnValue}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__img"),t._popupText=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._popupText.textContent=e,k(E(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function I(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return q(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n,r=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=r,n._formElement=n._popup.querySelector(".popup__form"),n._submitBinded=n._submitEvent.bind(q(n)),n}return t=a,(n=[{key:"_submitEvent",value:function(e){e.preventDefault(),this._handleSubmit(this._data)}},{key:"setEventListeners",value:function(){this._formElement.addEventListener("submit",this._submitBinded),j(T(a.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(e){this._data=e,j(T(a.prototype),"open",this).call(this)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){var n=t.titleSelector,r=t.workSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._titleSelector=n,this._workSelector=r,this._avatarSelector=o,this._userName=document.querySelector(this._titleSelector),this._userWork=document.querySelector(this._workSelector),this._userAvatar=document.querySelector(this._avatarSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userWork:this._userWork.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userWork.textContent=e.about}},{key:"getUserAvatar",value:function(){return this._userAvatar.src}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e.avatar}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disable",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_error"};function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=document.querySelector(".profile__add-btn"),N=document.querySelector(".profile__edit-btn"),F=document.querySelector(".profile__edit-avatar"),W=document.querySelector(".popup__form-picture"),J=document.querySelector(".popup_profile-foto"),G=document.querySelector(".popup__form-profile"),H=(J.querySelector("#avatar-input"),G.querySelector("#name-input")),M=G.querySelector("#about-input"),z=new i(A,G),$=new i(A,W),K=new i(A,J),Q=null,X=null,Y=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-41",headers:{authorization:"6be6d1f2-064d-406f-a1f7-f93c76457b36","Content-Type":"application/json"}});Y.getInitialInfo().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z.setUserInfo(o),Z.setUserAvatar(o),X=o._id,ae.renderItems(i)})).catch((function(e){console.log(e)}));var Z=new V({titleSelector:".profile__title",workSelector:".profile__subtitle",avatarSelector:".profile__foto"}),ee=new v(".popup_picture",{handleSubmit:function(e){ee.toggleBtnValue(!0),Y.addNewCard(e).then((function(e){var t=ie(e);ae.addItem(t,"prepend"),ee.toggleBtnValue(!1),ee.close()})).catch((function(e){console.log("не возможно добавить фотографию")})).finally((function(){ee.toggleBtnValue(!1)}))}});ee.setEventListeners(),D.addEventListener("click",(function(){$.toggleButtonState(),ee.open()}));var te=new v(".popup_profile",{handleSubmit:function(e){te.toggleBtnValue(!0),Y.setUserInfo(e).then((function(e){Z.setUserInfo(e),te.close()})).catch((function(e){console.log(e)})).finally((function(){te.toggleBtnValue(!1)}))}});te.setEventListeners(),N.addEventListener("click",(function(){var e=Z.getUserInfo();H.value=e.userName,M.value=e.userWork,te.open()}));var ne=new C(".popup_card");ne.setEventListeners();var re=new v(".popup_profile-foto",{handleSubmit:function(e){re.toggleBtnValue(!0),Y.newUserAvatar(e).then((function(e){Z.setUserAvatar(e),re.toggleBtnValue(!1),re.close()})).catch((function(e){console.log("не возможно сохранить изображение")})).finally((function(){re.toggleBtnValue(!1)}))}});re.setEventListeners(),F.addEventListener("click",(function(){K.toggleButtonState(),re.open()}));var oe=new U(".popup_confirm",{handleSubmit:function(e){Y.delCard(e).then((function(){Q.deleteCard()})).then((function(){Q=null,oe.close()})).catch((function(e){console.log("удаление не возможно")}))}});oe.setEventListeners();var ie=function(e){var t=new r({data:e,ownerId:X,handleCardClick:function(){ne.open(e.name,e.link)},handleDeleteIconClick:function(){Q=t,oe.open(e)},giveLike:function(){Y.addlike(e).then((function(e){t.addLikeClass(),t.setLikesCount(e)})).catch((function(e){console.log(e)}))},removeLike:function(){Y.delLike(e).then((function(e){t.removeLikeClass(),t.setLikesCount(e)})).catch((function(e){console.log(e)}))}},"#template");return t.generateCard()},ae=new u({renderer:function(e){var t=ie(e);ae.addItem(t,"append")}},".elements");z.enableValidation(),$.enableValidation(),K.enableValidation()})();
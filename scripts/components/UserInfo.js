// export class UserInfo {
//     constructor({ titleSelector, workSelector }) {
//         this._titleSelector = titleSelector;
//         this._workSelector = workSelector;
//         this._userName = document.querySelector(this._titleSelector);
//         this._userWork = document.querySelector(this._workSelector);
//     }

//     getUserInfo() {
//         const userInfo ={
//             userName: this._userName.textContent,
//             userWork: this._userWork.textContent 
//         }
//         return userInfo
//     }

//     setUserInfo(name, work) {
//         this._userName.textContent = name;
//         this._userWork.textContent = work;
//     }
// }
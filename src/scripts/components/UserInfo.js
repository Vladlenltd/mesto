export class UserInfo {
    constructor({ titleSelector, workSelector, avatarSelector }) {
        this._titleSelector = titleSelector;
        this._workSelector = workSelector;
        this._avatarSelector = avatarSelector;
        this._userName = document.querySelector(this._titleSelector);
        this._userWork = document.querySelector(this._workSelector);
        this._userAvatar = document.querySelector(this._avatarSelector);
    }

    getUserInfo() {
        const userInfo ={
            userName: this._userName.textContent,
            userWork: this._userWork.textContent 
        }
        return userInfo
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userWork.textContent = data.about;
    }
    // setUserInfo({ name, about }) {
    //     this._userName.textContent = name;
    //     this._userWork.textContent = about;
    // }

    getUserAvatar() {
        return this._userAvatar.src
    }

    setUserAvatar(data) {
        this._userAvatar.src = data.avatar;
    }
}
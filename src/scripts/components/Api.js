export class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkStatus(res) {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Error: ${res.status}`);
        }
    }

    getUserInfo() {
        return fetch (`${this._baseUrl}/users/me`, {
            debugger: '',
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkStatus)
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers,
        })
        .then((res => {
            return this._checkStatus(res)
        }))
    }

    getInitialInfo() {
        return Promise.all([this.getUserInfo(), this.getInitialCards()])
    }

    setUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then(this._checkStatus)
    }

    addUserAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data,
            })
        })
        .then(this._checkStatus)
    }

    addNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.url
            })
        })
        .then(this._checkStatus)
    }

    delCard(data) {
        return fetch(`${this._baseUrl}/cards/${data._id}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkStatus)
    }

    addlike(data) {
        return fetch(`${this._baseUrl}/cards/${data._id}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(this._checkStatus)
    }

    delLike(data) {
        return fetch(`${this._baseUrl}/cards/${data._id}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkStatus)
    }
}

// export const api = new Api({
//     baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
//     header: {
//         authorization: '6be6d1f2-064d-406f-a1f7-f93c76457b36',
//         'Content-Type': 'application/json'
//     }
// })
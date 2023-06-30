class Api {
  constructor(apiParameters) {
    this._url = apiParameters.url;
    this._headers = apiParameters.headers;
  }

  _handleReply(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, { headers: this._headers }).then(
      this._handleReply
    );
  }

  getAllCards() {
    return fetch(`${this._url}/cards`, { headers: this._headers }).then(
      this._handleReply
    );
  }

  updateUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name: data.name, about: data.about }),
    }).then(this._handleReply);
  }

  addNewCard(cardData) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(cardData),
    }).then(this._handleReply);
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleReply);
  }

  setLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleReply);
  }

  deleteLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleReply);
  }

  updateUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(data),
    }).then(this._handleReply);
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this.setLike(id);
    } else {
      return this.deleteLike(id);
    }
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-61",
  headers: {
    "Content-Type": "application/json",
    authorization: "957a4dff-e381-48f3-972a-805329544aae",
  },
});

export default api;

import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditFrofilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSumbit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  function hadleChangeName(evt) {
    setName(evt.target.value);
  }

  function hadleChangeAbout(evt) {
    setDescription(evt.target.value);
  }

  return (
    <PopupWithForm
      name="edit-profle"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSumbit}
    >
      <input
        id="name-input"
        className="popup__input popup__input_type_name"
        name="name"
        type="text"
        placeholder="Введите имя"
        minLength="2"
        maxLength="40"
        value={name || ""}
        onChange={hadleChangeName}
        required
      />
      <span
        id="name-input-error"
        className="name-input-error popup__input-error"
      />
      <input
        id="job-input"
        className="popup__input popup__input_type_job"
        name="about"
        type="text"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        value={description || ""}
        onChange={hadleChangeAbout}
        required
      />
      <span
        id="job-input-error popup__input-error"
        className="popup__input-error popup__input-error_active"
      />
    </PopupWithForm>
  );
}

export default EditFrofilePopup;

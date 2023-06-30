import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "../hooks/useForm";

const AddPlacePopup = (props) => {
  const { values, handleChange, setValues } = useForm({});

  function handleSumbit(evt) {
    evt.preventDefault();
    props.onAddPlace(values);
  }

  useEffect(() => {
    if (!props.isOpen) setValues({});
  }, [props.isOpen, setValues]);

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSumbit}
    >
      <input
        name="name"
        className="popup__input popup__input_type_title"
        type="text"
        autoComplete="off"
        placeholder="Название"
        required
        id="title-input"
        minLength="2"
        maxLength="30"
        onChange={handleChange}
        value={values.name || ""}
      />
      <span className="title-input-error popup__input-error"></span>

      <input
        name="link"
        className="popup__input popup__input_type_image"
        type="url"
        autoComplete="off"
        placeholder="Ссылка на картинку"
        required
        id="url-input"
        onChange={handleChange}
        value={values.link || ""}
      />
      <span className="url-input-error popup__input-error"></span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;

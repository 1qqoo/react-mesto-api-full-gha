import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const refInput = useRef(null);

  function handleSumbit(event) {
    event.preventDefault();
    props.onUpdateAvatar({
      avatar: refInput.current.value,
    });
  }

  useEffect(() => {
    refInput.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      buttonText="Сохранить"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSumbit}
    >
      <input
        id="avatar"
        name="avatar"
        className="popup__input popup__input_type_avatar"
        type="url"
        ref={refInput}
        autoComplete="off"
        placeholder="Ссылка на картинку"
        required
      />
      <span
        id="avatar-input"
        className="avatar-error popup__input-error"
      ></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;

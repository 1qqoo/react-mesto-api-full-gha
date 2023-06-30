import React from "react";
import { usePopupClose } from "../hooks/usePopupClose";

function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  children,
  buttonText,
  onSubmit,
}) {
  usePopupClose(isOpen, onClose);
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          onClick={onClose}
          type="button"
          aria-label="Закрывает попап"
        ></button>
        <h3 className="popup__title">{title}</h3>
        <form
          className="popup__form popup__form-profile"
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <button
            className="popup__button-save"
            type="submit"
            aria-label="Кнопка сохранить и отправить форму"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

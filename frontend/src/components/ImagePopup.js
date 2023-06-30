import { usePopupClose } from "../hooks/usePopupClose";

function ImagePopup({ card, onClose }) {
  usePopupClose(card, onClose);
  return (
    <div className={`popup_type_image popup ${card ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_image">
        <img
          src={card?.link}
          alt={card?.name}
          className="popup__image"
        />
        <p className="popup__caption">{card ? card.name : ""}</p>
        <button
          type="button"
          className="popup__button-close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;

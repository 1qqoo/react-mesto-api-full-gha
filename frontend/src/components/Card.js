import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonVisabilityAttribute = {
    visibility: isOwn ? "visible" : "hidden",
  };

  const isLiked = card.likes.some((like) => like._id === currentUser._id);

  const cardLikeButtonClassName = `element__button-like ${
    isLiked && "element__button-like_active"
  }`;

  return (
    <li className="element">
      <img
        src={card.link}
        className="element__image"
        alt={card.name}
        onClick={handleCardClick}
      />

      {isOwn && (
        <button
          className="element__button-delete"
          style={cardDeleteButtonVisabilityAttribute}
          onClick={handleDeleteClick}
          aria-label="удалить карточку"
          type="button"
        />
      )}

      <div className="element__footer">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button
            className={cardLikeButtonClassName}
            aria-label="поставить лайк"
            name="addLike"
            type="button"
            onClick={handleLikeClick}
          />
          <h3 className="element__like-number">{card.likes.length}</h3>
        </div>
      </div>
    </li>
  );
}

export default Card;

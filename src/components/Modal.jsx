import React, {  useRef } from "react";
import styled from "styled-components";
import Label from "./Label";
import Button from "./Button";
import Input from "./Input";

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  height: 50%;
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
`;

const Modal = ({
  active,
  setActive,
  onAddMovie,
  movieForUpdate,
  buttonTitle,
  movieState,
  movieSetState,
}) => {
  const { imageUrl, title, rating } = movieState;
  const { setImageUrl, setTitle, setRating } = movieSetState;

  const wrapperRef = useRef();

  const getDataFromTitleInput = (event) => {
    setTitle(event.target.value);
  };

  const getDataFromImageUrlInput = (event) => {
    setImageUrl(event.target.value);
  };

  const getDataFromRatingInput = (event) => {
    setRating(event.target.value);
  };

  const onSubmitDataHandler = () => {
    const isDataValid = title.trim() && imageUrl.trim() && +rating;

    if (!isDataValid) {
      return alert("Заполните все поля!");
    }

    if (Math.sign(+rating) === 1 && rating <= 5) {
      const urlRegex =
        /(http[s]*:\/\/([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png|gif))|(data:image\/(?:png|jpe?g|gif);base64,([a-z0-9+/=]+))/i;

      if (!urlRegex.test(imageUrl)) {
        return alert("Введите действующую ссылку!");
      }

      let saveOrUpdate;
      let id = {};

      if (buttonTitle === "Save") {
        id = movieForUpdate.id;
        saveOrUpdate = "update";
      } else {
        id = Math.random().toString();
      }

      onAddMovie(
        {
          id,
          title,
          rating,
          img: imageUrl,
        },
        saveOrUpdate
      );

      clearAllInput();
    } else {
      return alert("Рейтинг не может быть больше 5 и меньше 0 или равен 0!");
    }
  };

  const cancelHandler = () => {
    clearAllInput();
    setActive(false);
  };

  const clearAllInput = () => {
    setTitle("");
    setImageUrl("");
    setRating("");
  };

  // Используем Portals и useRef для размещения модального окна
  if (!active) return null;

  return (
    <ModalWrapper
      onClick={() => {
        setActive(false);
        clearAllInput();
      }}
    >
      <ModalContent ref={wrapperRef} onClick={(e) => e.stopPropagation()}>
        {/* Фрагмент используется здесь для обертки */}
        <>
          <Label htmlFor="movieTitle">
            Movie title
            <Input
              className="movieTitle"
              value={title}
              onChange={getDataFromTitleInput}
            />
          </Label>

          <Label>
            Image URL
            <Input value={imageUrl} onChange={getDataFromImageUrlInput} />
          </Label>
          <Label>
            Your Rating
            <Input
              inputType="number"
              value={rating}
              onChange={getDataFromRatingInput}
            />
          </Label>

          <div>
            <Button
              title="Cancel"
              className="cancel-button"
              color="#ffffff"
              onClick={cancelHandler}
            />
            <Button
              title={buttonTitle}
              className="add-button"
              color="#00329e"
              onClick={onSubmitDataHandler}
            />
          </div>
        </>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

import React, { useRef } from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";
import Modal from "./Modal";

const MainContent = ({ modalActive, setModalActive }) => {
  const initialMovies = [
    {
      id: 1,
      title: "Avatar 1",
      rating: 4,
      img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
    },
    {
      id: 2,
      title: "Kunfu panda",
      rating: 5,
      img: "https://s2.afisha.ru/mediastorage/0c/ec/11f9fd657c2f46b68d1d0bfaec0c.jpg",
    },
    {
      id: 3,
      title: "Naruto Shipuden",
      rating: 5,
      img: "https://staticg.sportskeeda.com/editor/2021/10/8bbb3-16349088266046-1920.jpg",
    },
    {
      id: 4,
      title: "Hobbit",
      rating: 5,
      img: "https://upload.wikimedia.org/wikipedia/ru/3/32/The_Hobbit._An_Unexpected_Journey.jpg",
    },
  ];

  const moviesRef = useRef(initialMovies); // Реф для хранения списка фильмов

  const buttonTitleRef = useRef(""); // Реф для хранения заголовка кнопки
  const movieForUpdateRef = useRef(null); // Реф для хранения фильма, который редактируется

  const titleRef = useRef(""); // Реф для хранения заголовка фильма
  const imageUrlRef = useRef(""); // Реф для хранения URL изображения
  const ratingRef = useRef(""); // Реф для хранения рейтинга фильма

  const saveOrUpdateMovie = (newMovie, saveOrUpdate) => {
    if (saveOrUpdate !== "update") {
      // Добавление нового фильма
      moviesRef.current = [...moviesRef.current, newMovie];
    } else {
      // Обновление существующего фильма
      moviesRef.current = moviesRef.current.map(movie => (movie.id === newMovie.id ? newMovie : movie));
    }
    setModalActive(false);
    buttonTitleRef.current = "";
    movieForUpdateRef.current = null;
    titleRef.current = "";
    imageUrlRef.current = "";
    ratingRef.current = "";
  };

  const deleteMovie = (id) => {
    moviesRef.current = moviesRef.current.filter(movie => movie.id !== id);
  };

  const editMovie = (movie) => {
    buttonTitleRef.current = "Save";
    movieForUpdateRef.current = movie;
    setModalActive(true);
  };

  return (
    <div>
      <StyledMain>
        {moviesRef.current.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            img={movie.img}
            rating={movie.rating}
            onDelete={deleteMovie}
            onEdit={editMovie}
          />
        ))}
      </StyledMain>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        onAddMovie={saveOrUpdateMovie}
        buttonTitle={buttonTitleRef.current}
        movieForUpdate={movieForUpdateRef.current}
        movieState={{ imageUrl: imageUrlRef.current, title: titleRef.current, rating: ratingRef.current }}
        movieSetState={{
          setTitle: (title) => titleRef.current = title,
          setImageUrl: (imageUrl) => imageUrlRef.current = imageUrl,
          setRating: (rating) => ratingRef.current = rating
        }}
      />
    </div>
  );
};

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainContent;

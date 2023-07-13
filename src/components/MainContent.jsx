import React, { useState } from "react";
import MovieItem from "./MovieItem";
import Button from "./Button";

const MainContent = () => {
  const [movies, setMovies] = useState([
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
  ]);

  const deleteMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  const editMovie = (id, newTitle) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, title: newTitle };
        }
        return movie;
      })
    );
  };

  const addMovie = () => {
    const newMovie = {
      id: movies.length + 1,
      title: "New Movie",
      rating: 0,
      img: "https://example.com/image.jpg",
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <main>
      {movies.map((movie) => (
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
      <Button color="orange" title="ADD MOVIE" onClick={addMovie} />
    </main>
  );
};

export default MainContent;

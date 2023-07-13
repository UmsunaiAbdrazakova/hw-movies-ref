import React from "react";
import Button from "./Button";

const Headers = ({ onAddMovie }) => {
  const handleAddMovie = () => {
    const newMovie = {
      id: 5,
      title: "New Movie",
      rating: 0,
      img: "https://example.com/new-movie.jpg",
    };
    onAddMovie(newMovie);
  };

  return (
    <header>
      <a href="https://www.timeout.com/film/best-movies-of-all-time">
        Favorite Movies
      </a>
      <Button color="orange" title="ADD MOVIE" onClick={handleAddMovie} />
    </header>
  );
};

export default Headers;

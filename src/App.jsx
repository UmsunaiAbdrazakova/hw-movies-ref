import React, { useState } from "react";
import "./App.css";
import Headers from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <div className="App">
      <Headers onAddMovie={addMovie} />
      <MainContent movies={movies} />
    </div>
  );
};

export default App;

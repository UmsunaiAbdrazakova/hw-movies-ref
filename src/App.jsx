import React, { useState } from "react";
import Headers from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [modalActive, setModalActive] = useState(false);

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const changeButtonTitle = () => {};

  return (
    <div className="App">
      <Headers modalActive={setModalActive} changeButtonTitle={changeButtonTitle} />
      <MainContent movies={movies} modalActive={modalActive} setModalActive={setModalActive}/>
    </div>
  );
};

export default App;

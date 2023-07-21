import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Headers = ({ modalActive, changeButtonTitle }) => {
  const onHandleAddMovie = () => {
    changeButtonTitle("Add");
    modalActive(true);
  };
  return (
    <StyledHeader>
      <StyledA href="https://www.timeout.com/film/best-movies-of-all-time">
        Favorite Movies
      </StyledA>
      <Button title="ADD MOVIE" onClick={onHandleAddMovie} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem 1rem;
  padding: 1rem;
  background-color: #081ad8;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

export default Headers;

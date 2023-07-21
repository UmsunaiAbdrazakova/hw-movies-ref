import React from "react";
import styled from "styled-components";
import Button from "./Button";

const MovieItem = ({ title, id, img, rating, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(id, "New Title");
  };

  return (
    <MainBlock key={id}>
      <StyledImages src={img} alt={title}></StyledImages>  
      <ABC>
        <Styledh3>{title}</Styledh3>
        <Container>
          <StyledRating> {rating} / 5 stars</StyledRating>
          <Button color="red" title="DELETE" onClick={handleDelete} />
          <Button color="blue" title="EDIT" onClick={handleEdit} />
        </Container>
      </ABC>
    </MainBlock>
  );
};

const Styledh3 = styled.h3`
  padding: 15px;
`;
const MainBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  background-color: rgb(238, 242, 242);
  border-radius: 20px;
  box-shadow: 1px 5px 5px rgb(80, 75, 75);
  box-shadow: 2px;
  width: 50%;
`;
const StyledRating = styled.p`
  background-color: #e77c3b;
  color: white;
  border-radius: 15px;
  width: 100px;
  height: 25px;
  border: none;
  text-align: center;
`;

const StyledImages = styled.img`
  width: 300px;
  height: 200px;
` 
const ABC = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
`
export default MovieItem;

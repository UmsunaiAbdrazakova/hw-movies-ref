import React from "react";
import Button from "./Button";

const MovieItem = ({ title, id, img, rating, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(id, "New Title");
  };

  return (
    <div className="mainBlock" key={id}>
      <img src={img} alt={title} />
      <div className="abc">
        <h3>{title}</h3>
        <div className="e">
          <p className="rating"> {rating} / 5 stars</p>
          <Button color="red" title="DELETE" onClick={handleDelete} />
          <Button color="blue" title="EDIT" onClick={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default MovieItem;

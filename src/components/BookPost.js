import React from "react";
import { Link } from "react-router-dom";

function BookPost({ title, author, imageUrl, userName, rating, userId }) {
  return (
    <div className="BookPost">
      <img src={imageUrl} alt={title} />
      <div className="BookPostText">
        <p className="Title"> {title}</p>
        <p className="Author">{author}</p>
        <p className="Rating">Rating: {rating}</p>
        <p>
          Rated by: <Link to={`user/${userId})`}>{userName}</Link>
        </p>
      </div>
    </div>
  );
}

export default BookPost;

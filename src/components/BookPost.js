import React from "react";
import { Link } from "react-router-dom";

function BookPost({ caption, imageAlt, imageUrl, userName, userId }) {
  return (
    <div className="BookPost">
      <img src={imageUrl} alt={imageAlt} />
      <div className="BookPostText">
        <p className="Caption">{caption}</p>
        <p>
          Posted by: <Link to={`user/${userId})`}>{userName}</Link>
        </p>
      </div>
    </div>
  );
}

export default BookPost;

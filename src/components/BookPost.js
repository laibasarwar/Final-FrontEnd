import React from "react";
import { Link } from "react-router-dom";

function BookPost({ caption, imageAlt, imageSrc, userName, userId }) {
  return (
    <div className="BookPost">
      <img src={imageSrc} alt={imageAlt} />
      <p className="Caption">{caption}</p>
      <p>
        Posted by: <Link to={`user/${userId})`}>{userName}</Link>
      </p>
    </div>
  );
}

export default BookPost;

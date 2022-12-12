import React from "react";
import { Link } from "react-router-dom";

function FriendPost({ caption, imageUrl, name, userId, userName }) {
  return (
    <div className="BookPost">
      <img src={imageUrl} />
      <div className="BookPostText">
        <p className="Name">{name}</p>
        <p className="Caption">Caption: {caption}</p>
        <p>
          Posted by: <Link to={`user/${userId})`}>{userName}</Link>
        </p>
      </div>
    </div>
  );
}

export default FriendPost;

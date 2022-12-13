import React from "react";
import { Link } from "react-router-dom";

function FriendPost({ books, imageUrl, friendsn, userId, userName }) {
  return (
    <div className="BookPost">
      <img src={imageUrl} />
      <div className="BookPostText">
        <p>
          Posted by: <Link to={`user/${userId})`}>{userName}</Link>
        </p>
        <p className="Books">Saved Books: {books}</p>
        <p className="Friends">Mutuals: {friendsn}</p>
      </div>
    </div>
  );
}

export default FriendPost;

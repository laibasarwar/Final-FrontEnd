import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Header({ setIsLoggedIn, setUserInformation }) {
  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInformation({});
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  return (
    <div className="Header">
      <p className="Logo">
        <Link to="/">Book Nerd</Link>
      </p>
      <nav>
        <p>
          <Link to="/user/0">My Profile</Link>
        </p>
        <p>
          <Link to="/">Find Friends</Link>
        </p>
        <p onClick={() => logout()}>Log Out</p>
        <button className="Button">
          <Link to="/create-post">Create Post</Link>
        </button>
      </nav>
    </div>
  );
}

export default Header;

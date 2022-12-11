import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginForm from "../components/LoginForm";

function LoginPage({ isLoggedIn, setIsLoggedIn, setUserInformation }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState();

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const loginUser = useCallback(
    (e) => {
      e.preventDefault();

      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;

      console.log(email, password);

      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setIsLoggedIn(true);
          setUserInformation({
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            accessToken: user.accessToken,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ error, errorCode, errorMessage });
          setErrors(errorMessage);
        });
    },
    [setIsLoggedIn, setUserInformation]
  );

  return (
    <>
      <div className="PageWrapper LoginWrapper">
        <h1 className="LoginLogo">Book Nerd</h1>
        <LoginForm loginUser={loginUser} />
        <p>{errors}</p>
        <p className="BoldLoginText">Already have an account?</p>
        <p className="BoldLoginText">
          <Link to="/create">Create Account</Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;

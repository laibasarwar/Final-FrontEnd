import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import BookPost from "../components/BookPost";

function DashboardPage({
  isLoading,
  isLoggedIn,
  setIsLoggedIn,
  setUserInformation,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && !isLoading) navigate("/login");
  }, [isLoading, isLoggedIn, navigate]);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation}
      />
      <div className="PageWrapper">
        <h1>Landing Page</h1>
        <div className="BookPostWrapper">
          <BookPost />
          <BookPost />
          <BookPost />
          <BookPost />
        </div>
      </div>
    </>
  );
}

export default DashboardPage;

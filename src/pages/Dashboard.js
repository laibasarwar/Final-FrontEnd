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
        <div className="BookPostWrapper">
          <BookPost
            caption="Cool Post"
            imageAlt="cool post"
            imageSrc="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
            userName="Cool Guy"
          />
          <BookPost />
          <BookPost />
          <BookPost />
        </div>
      </div>
    </>
  );
}

export default DashboardPage;

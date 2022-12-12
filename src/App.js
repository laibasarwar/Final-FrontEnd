import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./App.css";
import React from "react";

import CreateUserPage from "./pages/CreateUser";
import LoginPage from "./pages/Login";
import UserOverviewPage from "./pages/UserOverview";
import CreatePostPage from "./pages/CreatePost";
import DashboardPage from "./pages/Dashboard";
import FindFriendsPage from "./pages/FindFriends";

const firebaseConfig = {
  apiKey: "AIzaSyCTk5md0krOJ5RcKmVndDp3vEOKzCzVMrY",
  authDomain: "final-project-fall-2022-4e4e6.firebaseapp.com",
  projectId: "final-project-fall-2022-4e4e6",
  storageBucket: "final-project-fall-2022-4e4e6.appspot.com",
  messagingSenderId: "36436854399",
  appId: "1:36436854399:web:ff41da3f97f0a47a85a14a",
};

function App() {
  const [appInitialized, setAppInitialized] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    setAppInitialized(app);
  }, []);

  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserInformation(user);
          setIsLoggedIn(true);
        } else {
          setUserInformation({});
          setIsLoggedIn(false);
        }
        setIsLoading(false);
      });
    }
  }, [appInitialized]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <DashboardPage
          app={appInitialized}
          isLoading={isLoading}
          isLoggedIn={isLoggedIn}
          userInformation={userInformation}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
        />
      ),
    },
    {
      path: "/user/:id",
      element: (
        <UserOverviewPage
          isLoading={isLoading}
          isLoggedIn={isLoggedIn}
          userInformation={userInformation}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
        />
      ),
    },
    {
      path: "/create",
      element: (
        <CreateUserPage
          isLoading={isLoading}
          isLoggedIn={isLoggedIn}
          userInformation={userInformation}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
        />
      ),
    },
    {
      path: "/find-friends",
      element: (
        <FindFriendsPage
          app={appInitialized}
          isLoading={isLoading}
          isLoggedIn={isLoggedIn}
          userInformation={userInformation}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
        />
      ),
    },
    {
      path: "/login",
      element: (
        <LoginPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
        />
      ),
    },
    {
      path: "/create-post",
      element: (
        <CreatePostPage
          app={initializeApp}
          isLoading={isLoading}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
          userInformation={userInformation}
        />
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

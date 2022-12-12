import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Header from "../components/Header";
import FriendPost from "../components/FriendPost";

const queryData = async (app) => {
  if (!app) return [];
  const db = getFirestore(app);
  const querySnapshot = await getDocs(collection(db, "friends"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};

function FindFriendsPage({
  app,
  isLoading,
  isLoggedIn,
  setIsLoggedIn,
  setUserInformation,
}) {
  const navigate = useNavigate();
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    if (!isLoggedIn && !isLoading) navigate("/login");
  }, [isLoading, isLoggedIn, navigate]);

  useEffect(() => {
    if (!app) return;
    queryData(app).then(setFriendData);
  }, [app]);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation}
      />
      <div className="PageWrapper">
        <div className="BookPostWrapper">
          {friendData.map((post) => (
            <FriendPost
              caption={post.caption}
              name={post.name}
              imageUrl={post.imageUrl}
              userId={post.userId}
              userName={post.userName}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FindFriendsPage;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router";
// import Header from "../components/Header";

// function FindFriendsPage({
//   isLoading,
//   isLoggedIn,
//   setIsLoggedIn,
//   setUserInformation,
// }) {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLoggedIn && !isLoading) navigate("/login");
//   }, [isLoading, isLoggedIn, navigate]);

//   return (
//     <>
//       <Header
//         isLoggedIn={isLoggedIn}
//         setIsLoggedIn={setIsLoggedIn}
//         setUserInformation={setUserInformation}
//       />
//       <div className="PageWrapper">
//         <p>Find Friends</p>
//       </div>
//     </>
//   );
// }

// export default FindFriendsPage;

import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Header from "../components/Header";
import CreatePostForm from "../components/CreatePostForm";

function CreatePostPage({
  app,
  isLoading,
  isLoggedIn,
  setIsLoggedIn,
  setUserInformation,
  userInformation,
}) {
  const [postSuccessful, setPostSuccessful] = useState(false);
  const navigate = useNavigate();

  const createPost = useCallback(
    async (e) => {
      e.preventDefault();
      const db = getFirestore(app);

      const rating = e.currentTarget.rating.value;
      const imageUrl = e.currentTarget.imageUrl.value;
      const userName = e.currentTarget.userName.value;
      const userId = userInformation.uid;
      const title = e.currentTarget.title.value;
      const author = e.currentTarget.author.value;

      try {
        const docRef = await addDoc(collection(db, "posts"), {
          rating,
          imageUrl,
          userId: userId,
          userName,
          title,
          author,
        });
        console.log("Document writtem with Id:", docRef.id);
        setPostSuccessful(true);
      } catch (e) {
        console.error("Error adding document:", e);
      }
    },
    [app, userInformation]
  );

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
      <div className="CreatePostWrapper">
        <CreatePostForm createPost={createPost} />
        {postSuccessful && <p>Success!</p>}
      </div>
    </>
  );
}

export default CreatePostPage;

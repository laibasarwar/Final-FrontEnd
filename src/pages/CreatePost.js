import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
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
      // const storage = getStorage();

      // const imageToUpload = e.currentTarget.imageToUpload.files[0];
      // const imageRef = ref(storage, imageToUpload.name);

      const caption = e.currentTarget.caption.value;
      const imageAlt = e.currentTarget.imageAlt.value;
      const userName = userInformation.displayName;
      const userId = userInformation.uid;

      try {
        // const imageUpload = await uploadBytes(imageRef, imageToUpload).then(
        //   (snapshot) => {
        //     console.log("Uploaded a blob or file!", snapshot);
        //     return snapshot;
        //   }
        // );

        const docRef = await addDoc(collection(db, "posts"), {
          caption,
          imageAlt,
          // imageUrl: imageUpload.metadata.fullPath,
          userId: userId,
          userName,
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

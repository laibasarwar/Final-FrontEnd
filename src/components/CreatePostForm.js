import React from "react";

function CreatePostForm({ createPost }) {
  return (
    <form className="FormElement" onSubmit={(e) => createPost(e)}>
      <label htmlFor="userName">User Name</label>
      <input type="text" name="userName" />

      <label htmlFor="title">Book Title</label>
      <input type="text" name="title" />

      <label htmlFor="author">Book Author</label>
      <input type="text" name="author" />

      <label htmlFor="rating">Rating</label>
      <input type="text" name="rating" />

      <label htmlFor="imageUrl">Image Url</label>
      <input type="text" name="imageUrl" />

      <div className="ButtonWrapper">
        <button type="submit" className="Button-Create">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreatePostForm;

import React from "react";

function CreatePostForm({ createPost }) {
  return (
    <form className="FormElement" onSubmit={(e) => createPost(e)}>
      <label htmlFor="imageToUpload">Choose an Image!</label>

      <input
        type="file"
        name="imageToUpload"
        accept="image/png, image/jpeg, image/jpg, image/gif"
      ></input>
      <label htmlFor="caption">Image Caption</label>
      <input type="text" name="caption" />
      <label htmlFor="imageAlt">Image Alt Text</label>
      <input type="text" name="imageAlt" />

      <div className="ButtonWrapper">
        <button type="submit" className="Button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreatePostForm;

import { useFormik } from "formik";
import styles from "./MyPosts.module.css"
import React from "react";

const AddPostForm = ({ myOnPostChange, addPost }) => {

  const validate = (values) => {
    const errors = {};
    if(!values.postText) errors.postText = "Text is required"
    else if (values.postText.length>20) errors.postText = "Max length is reached"
    return errors;
  }
  const addPostFormik = useFormik({
    initialValues: {
      postText: "",
    },
    validate,
    onSubmit: () => {
      addPost();
    },
  });
  return (
    <form onSubmit={addPostFormik.handleSubmit}>
      <input
      className={styles.formControl} 
        onBlur={(e) => {
          myOnPostChange(e.target.value);
        }}
        onChange={addPostFormik.handleChange}
        value={addPostFormik.values.postText}
        name={"postText"}
        type={"text"}
      />
      <button type="submit">Add post</button>
    </form>
  );
};
export default AddPostForm;

import { useFormik } from "formik";
import React from "react";

const NewMessageForm = ({ addMessage, onMsgChange }) => {
  const validate = (values) => {
    const errors = {};
    if(!values.messageText) errors.messageText = "Message is required"
    else if (values.messageText.length>150) errors.messageText = "Max length is reached"
    return errors;
  }
  const newMessageFormik = useFormik({
    initialValues: {
      messageText: "",
    },
    validate,
    onSubmit: (values, {resetForm}) => {
      addMessage();
      resetForm( {values: ""})
    },
  });
  return (
    <form onSubmit={newMessageFormik.handleSubmit}>
      <textarea
        name={"messageText"}
        onChange={newMessageFormik.handleChange}
        value={newMessageFormik.values.messageText}
        placeholder={"New message"}
        onBlur={(e) => onMsgChange(e.target.value)}
        ></textarea>
      <div>
        <button type={"submit"}>Send message</button>
      </div>
    </form>
  );
};
export default NewMessageForm;

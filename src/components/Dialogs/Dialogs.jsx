import React from "react";
import s from "./Dialogs.module.css";
import DialogLink from "./DialogLink/DialogLink";
import Message from "./Message/Message";
import "./Dialogs.css";
import NewMessageForm from "./Message/NewMessageForm";

const Dialogs = (props) => {
  let dialogElement = props.state.dialogsData.map((d) => (
    <DialogLink id={d.id} key={d.id} name={d.name} />
  ));

  let messagesElement = props.state.messagesData.map((m) => (
    <Message owner={m.owner} key={m.id} message={m.message} />
  ));

  let addMessage = () => {
    props.addMessage();
  };
  let onMsgChange = (text) => {
    props.updateNewMsgText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElement}</div>
      <div className={s.messages}>
        {messagesElement}
        <div className={s.newMessage}>
          <NewMessageForm addMessage={addMessage} onMsgChange={onMsgChange} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

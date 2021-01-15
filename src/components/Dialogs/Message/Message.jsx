import React from 'react';
/*import s from '../Dialogs.module.css'*/

const Message = (props) => {

    return (
        <div className={props.owner}> {props.message} </div>
    )
};

export default Message
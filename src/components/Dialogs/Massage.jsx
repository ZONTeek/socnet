import React from 'react';

const Message = (props) => {

    return (
        <div className={props.owner}> {props.message} </div>
    )
};

export default Message
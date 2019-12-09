import React from 'react';
/*import s from '../Dialogs.module.css'*/

const Massage = (props) => {

    return (
            <div className={props.owner}> {props.massage} </div>
    )
};

export default Massage
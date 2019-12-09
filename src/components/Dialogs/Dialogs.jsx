import React from 'react';
import s from './Dialogs.module.css'
import DialogLink from "./DialogLink/DialogLink";
import Massage from "./Massage/Massage";
import './Dialogs.css';

const Dialogs = (props) => {
    let dialogElement = props.state.dialogsData.map (d =>
        <DialogLink id={d.id} key={d.id} name={d.name}/>);

    let massagesElement = props.state.massagesData.map (m =>
        <Massage owner={m.owner} key={m.id} massage={m.massage}/>);


    let addMassage = () => {
        props.addMassage();
    };
    let onMsgChange = (e) => {
        let text = e.target.value;
        props.updateMsgText(text);
    };

    return (
            <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.massages}>
                {massagesElement}
                <div className={s.newMassage}>
                    <textarea onChange={onMsgChange}
                              placeholder={'New massage'}
                              value={props.state.newMsgContent} />
                    <div>
                        <button onClick={addMassage}>></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
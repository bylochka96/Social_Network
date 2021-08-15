import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Contact from "./Contact/Contact";
import Message from "./Message/Message";
import React from "react";
import {onMessageAreaChangeActionCreator, sendMessageActionCreater} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let contactsMapper = props.dialogsPage.contactsData.map(contact => <Contact name={contact.name} id={contact.id}/>);
    let messagesMapper = props.dialogsPage.messagesData.map(m => <Message text={m.message}/>);
    let newMessageArea = React.createRef();
    let onMessageAreaChange = () => {
        props.dispatch(onMessageAreaChangeActionCreator(newMessageArea.current.value));
    };
    let sendMessage = () => {

        props.dispatch(sendMessageActionCreater())
    }

    return (
        <div className={style.dialogs}>
            < div
                className={style.dialogsWith}>
                {contactsMapper}
            </div>
            <div className={style.messages}>
                {messagesMapper}
                <div>
                    <textarea onChange={onMessageAreaChange} value={props.dialogsPage.newMessageValue}
                              ref={newMessageArea} cols="80" rows="5"></textarea>
                    <br/>
                    <button onClick={sendMessage}>Add POST</button>
                </div>
            </div>
        </div>
    )
};


export default Dialogs;
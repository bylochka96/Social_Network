import style from './Dialogs.module.css'
import Contact from "./Contact/Contact";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let contactsMapper = props.contactsData.map(contact => <Contact name={contact.name} id={contact.id}/>);
    let messagesMapper = props.messagesData.map(m => <Message text={m.message}/>);
    let newMessageArea = React.createRef();

    let onMessageAreaChange = () => {
        props.onMessageAreaChange(newMessageArea.current.value);
    };

    let sendMessage = () => {
        props.sendMessage();
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
                    <textarea onChange={onMessageAreaChange} value={props.newMessageValue} ref={newMessageArea}
                              cols="80" rows="5"/>
                    <br/>
                    <button onClick={sendMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
};


export default Dialogs;
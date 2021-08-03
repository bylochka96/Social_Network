import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Contact from "./Contact/Contact";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let contactsMapper = props.state.contactsData.map(contact => <Contact name={contact.name} id={contact.id}/>);
    let messagesMapper = props.state.messagesData.map(m => <Message text={m.message}/>);

    return (
        <div className={style.dialogs}>
            < div
                className={style.dialogsWith}>
                {contactsMapper}
            </div>
            <div className={style.messages}>
                {messagesMapper}
            </div>
        </div>
    )
};


export default Dialogs;
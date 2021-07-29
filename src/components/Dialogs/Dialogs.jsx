import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Contact from "./Contact/Contact";
import Message from "./Message/Message";

const Dialogs = () => {

    let arrOfContacts = [
        {id: 0, name: 'Efim'},
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Alina'},
        {id: 3, name: 'Vita'},
        {id: 4, name: 'Vlad'}
    ];

    let arrOfMessages = [
        {id: 0, message: 'LOL its work!'},
        {id: 0, message: 'Samurai way'},
        {id: 0, message: 'How are u doing?'}
    ];

    let contactsMapper = arrOfContacts.map(contact => <Contact name={contact.name} id={contact.id}/>);
    let messagesMapper = arrOfMessages.map(m => <Message text={m.message}/>);


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
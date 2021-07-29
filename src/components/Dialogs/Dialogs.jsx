import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Contact from "./Contact/Contact";
import Message from "./Message/Message";

const Dialogs = () => {
    let contactData = [
        {id: 0, name: 'Efim'},
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Alina'},
        {id: 3, name: 'Vita'},
        {id: 4, name: 'Vlad'}
    ];

    let messageData = [
        {id: 0, message: 'LOL its work!'},
        {id: 0, message: 'Samurai way'},
        {id: 0, message: 'How are u doing?'}
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsWith}>
                <Contact name={contactData[0].name} id={contactData[0].id}/>
                <Contact name={contactData[1].name} id={contactData[1].id}/>
                <Contact name={contactData[2].name} id={contactData[2].id}/>
                <Contact name={contactData[3].name} id={contactData[3].id}/>
                <Contact name={contactData[4].name} id={contactData[4].id}/>
            </div>
            <div className={style.messages}>
                <Message text={messageData[0].message}/>
                <Message text={messageData[1].message}/>
                <Message text={messageData[2].message}/>
            </div>
        </div>
    )
};


export default Dialogs;
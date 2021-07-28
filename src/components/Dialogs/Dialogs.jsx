import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Contact from "./Contact/Contact";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsWith}>
                <Contact name='Efim' id='0'/>
                <Contact name='Vasya' id='1'/>
                <Contact name='Vita' id='2'/>
                <Contact name='Alina' id='3'/>
                <Contact name='Vlad' id='4'/>
            </div>
            <div className={style.messages}>
                <Message text='LOL its work!'/>
                <Message text='How are u doing?'/>
                <Message text='Yo'/>
            </div>
        </div>
    )
};


export default Dialogs;
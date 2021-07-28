import style from './Contact.module.css'
import {NavLink} from "react-router-dom";

const Contact = (contact) => {
    let routPath = `/dialogs/${contact.id}`;
    return (
        <div className={style.contact} activClassName={style.isSelected}>
            <NavLink to={routPath}>{contact.name}</NavLink>
        </div>
    )
};

export default Contact;
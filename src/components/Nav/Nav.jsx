import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.selectedLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.selectedLink}>Message</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.selectedLink}>News</NavLink></div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.selectedLink}>Music</NavLink>
            </div>
            <br/>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.selectedLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav
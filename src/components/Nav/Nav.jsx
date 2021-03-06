import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.isSelected}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.isSelected}>Message</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.isSelected}>News</NavLink></div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.isSelected}>Music</NavLink>
            </div>
            <br/>
            <div className={style.item}>
                <NavLink to='/users' activeClassName={style.isSelected}>Users</NavLink>
            </div>
            <br/>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.isSelected}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav
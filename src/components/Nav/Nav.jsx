import style from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}><a href='/profile'>Profile</a></div>
            <div className={style.item}><a href='/dialogs'>Message</a></div>
            <div className={style.item}><a href='/news'>News</a></div>
            <div className={style.item}><a href='/music'>Music</a></div>
            <br/>
            <div className={style.item}><a href='/settings'>Settings</a></div>
        </nav>
    )
}

export default Nav
import style from'./Nav.module.css'

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}><a href='#Profile'>Profile</a></div>
            <div className={style.item}><a href='#Message'>Message</a></div>
            <div className={style.item}><a href='#News'>News</a></div>
            <div className={style.item}><a href='#Music'>Music</a></div>
            <br/>
            <div className={style.item}><a href='#Settings'>Settings</a></div>
        </nav>
    )
}

export default Nav
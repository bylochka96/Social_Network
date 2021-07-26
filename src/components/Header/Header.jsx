import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img alt='logo'
                 src="https://kartinkin.com/uploads/posts/2021-01/thumbs/1610501112_2-p-kruglii-fon-dlya-logotipa-3.png"></img>
        </header>
    )
}

export default Header
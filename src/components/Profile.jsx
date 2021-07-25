import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.profile}>
            <div>
                <img src="http://world-countries.net/wp-content/uploads/2015/05/Bondi-Bich-Avstraliya.jpg"
                     alt="content"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={style.post}>
                    <div className={style.item}>
                        <a href="#post1">post 1</a>
                    </div>
                    <div className={style.item}>
                        <a href="#post2">post 2</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
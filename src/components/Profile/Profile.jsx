import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

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
            <MyPosts />
        </div>
    )
}

export default Profile
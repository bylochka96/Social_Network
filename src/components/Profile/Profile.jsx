import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={style}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile
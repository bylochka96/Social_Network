import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={style.profileInfoWrapper}>
            <div>
                <img src="http://world-countries.net/wp-content/uploads/2015/05/Bondi-Bich-Avstraliya.jpg"
                     alt="content"/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;
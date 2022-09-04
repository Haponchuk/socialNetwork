import s from "./ProfileInfo.module.css";
import profileBackground from '../../../images/darkForest.png'


const ProfileInfo = (props) => {
    return (
        <div className={s.content}>
            <div className={s.background}>
                <img src={profileBackground}/>
            </div>
            <div className={s.description}>
                profile-pic + description
            </div>

        </div>
    );
}

export default ProfileInfo;
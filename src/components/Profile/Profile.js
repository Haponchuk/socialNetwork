import s from "./Profile.module.css";
import profileBackground from '../../images/kurapika123.png'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className="background-pic">
                <img src={profileBackground}/>
            </div>
            <div className="profile-pic">
                profile-pic
            </div>

            <MyPosts/>

        </div>
    );
}

export default Profile;
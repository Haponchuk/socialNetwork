import s from "./Content.module.css";
import profileBackground from '../../images/kurapika123.png'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

const Content = () => {
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

export default Content;
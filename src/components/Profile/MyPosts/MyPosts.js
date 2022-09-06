import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={s.appWrapper}>
            new-post
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button> sent</button>
            </div>
            {
                props.postData.map(el => <Post post={el.postMessage} love={el.love} hate={el.hate}/>)
            }
        </div>
    );
}

export default MyPosts;
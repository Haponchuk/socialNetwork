import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className="new-post">
            new-post
            <textarea> </textarea>
            <button> new post</button>

            <Post/>
            <Post/>
            <Post/>

        </div>
    );
}

export default MyPosts;
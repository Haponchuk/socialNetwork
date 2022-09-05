import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const postInfo = [
    {
        postMessage: "Hey everyone, that is my first try of working with props",
        love: "21 ",
        hate: "3 "
    },
    {
        postMessage: "Search for the keywords to learn more about each warning.",
        love: "1 ",
        hate: "15 "
    },
    {
        postMessage: "Who am I?",
        love: "4 ",
        hate: "0 "
    },
    {
        postMessage: "Am i afraid for learning smth new? Nope.",
        love: "5 ",
        hate: "1 "
    }
];

const MyPosts = () => {
    return (
        <div className={s.appWrapper}>
            new-post
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button> sent </button>
            </div>
            {
                postInfo.map(el => <Post post={el.postMessage} love={el.love} hate={el.hate} />)
            }
        </div>
    );
}

export default MyPosts;
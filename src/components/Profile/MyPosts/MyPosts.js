import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className="new-post">
            new-post
            <textarea> </textarea>
            <button> sent </button>

            <Post post='Hey everyone, that is my first try of working with props'  love= ' 21 ' hate = ' 3 '/>
            <Post post='Search for the keywords to learn more about each warning.' love=' 1 ' hate=' 15 '/>
            <Post post='Who am I?' love=' 4 ' hate=' 0 '/>
            <Post post='Am i afraid for learning smth new? Nope.' love=' 5 ' hate=' 1 '/>
        </div>
    );
}

export default MyPosts;
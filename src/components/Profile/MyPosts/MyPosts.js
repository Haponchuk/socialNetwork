import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";




const MyPosts = (props) => {

    let newPostElement = React.createRef();


    return (
        <div className={s.appWrapper}>
            new-post
            <div>
                <textarea ref={newPostElement}> </textarea>
            </div>
            <div>
                <button onClick={() => {alert(newPostElement.current.value)}}>post</button>
            </div>
            {
                props.postData.map(el => <Post post={el.postMessage} love={el.love} hate={el.hate}/>)
            }
        </div>
    );
}

export default MyPosts;
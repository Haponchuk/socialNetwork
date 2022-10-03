import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, {useCallback} from "react";
import {useEffect, useState} from "react";



const MyPosts = React.memo(
    function MyPosts (props) {

        let newPostElement = React.createRef();

        let createNewPost = () => {
            let text = newPostElement.current.value
            props.addPost(text) ;
        }

        return (
            <div className={s.appWrapper}>
                new-post
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>
                <div>
                    <button onClick={ () => createNewPost() }> post </button>
                </div>
                {
                    props.postData.map(el => <Post post={el.postMessage} love={el.love} hate={el.hate}/>)
                }
            </div>
        );
    }

)

export default MyPosts;
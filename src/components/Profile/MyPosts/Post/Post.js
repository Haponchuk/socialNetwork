import s from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={s.main}>
            <img src={"https://i.pinimg.com/736x/33/79/a9/3379a9789af4efccd985b582ab106170.jpg"}/>
            {props.post}

            <div>
                <span className={s.likes}>love {props.love}</span>
                <span className={s.likes}>hate {props.hate}</span>
            </div>

        </div>
    );
}

export default Post;
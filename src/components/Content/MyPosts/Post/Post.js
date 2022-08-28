import s from "./Post.module.css";


const Post = () => {
    return (
        <div className={s.item}>
            <img src={"https://i.pinimg.com/736x/33/79/a9/3379a9789af4efccd985b582ab106170.jpg"}/>
            post 1

            <div>
                <span>like </span>
                <span>hate</span>
            </div>

        </div>
    );
}

export default Post;
import './Content.css'

const Content = () => {
    return(
        <div className="content">
            <div className="background-pic">
                <img src="https://wallpapermoon.com/00400115/"/>
            </div>
            <div className="profile-pic">
                profile-pic
            </div>
            <div className="new-posts">
                new-post

                <div className="posts">
                    post 1
                </div>
                <div className="posts">
                    post 2
                </div>

            </div>
        </div>
    );
}

export default Content;
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postMapper = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={style.myPostsWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="80" rows="5"></textarea>
                <br/>
                <button>Add POST</button>
            </div>
            <div className={style.posts}>
                {postMapper}
            </div>
        </div>
    )
};

export default MyPosts;

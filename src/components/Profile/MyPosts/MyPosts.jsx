import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={style.myPostsWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="80" rows="5"></textarea>
                <br/>
                <button>Add POST</button>
            </div>
            <div className={style.posts}>
                <Post message='Hi, my name is...' likes='5'/>
                <Post message='Keep silience!' likes='17'/>
            </div>
        </div>
    )
}
export default MyPosts;

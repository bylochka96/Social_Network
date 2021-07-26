import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="80" rows="5"></textarea>
                <br/>
                <button>Add POST</button>
            </div>
            <div className={style.posts}>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
export default MyPosts;

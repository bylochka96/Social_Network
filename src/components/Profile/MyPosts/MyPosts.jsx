import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postData=[
        {id: 0, message: 'Hi, my name is...', likesCount: 1 },
        {id: 1, message: 'Keep silience!', likesCount: 5 }
    ]
    return (
        <div className={style.myPostsWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="80" rows="5"></textarea>
                <br/>
                <button>Add POST</button>
            </div>
            <div className={style.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}
export default MyPosts;

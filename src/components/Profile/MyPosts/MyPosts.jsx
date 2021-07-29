import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 0, message: 'Hi, my name is...', likesCount: 1},
        {id: 1, message: 'Keep silience!', likesCount: 5}
    ];

    let postMapper = postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

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

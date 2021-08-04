import style from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';

const MyPosts = (props) => {

    let postMapper = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostArea = React.createRef();
    let addPost = () => {

        props.addPost(newPostArea.current.value);
    }

    return (
        <div className={style.myPostsWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostArea} cols="80" rows="5"></textarea>
                <br/>
                <button onClick={addPost}>Add POST</button>
            </div>
            <div className={style.posts}>
                {postMapper}
            </div>
        </div>
    )
};

export default MyPosts;

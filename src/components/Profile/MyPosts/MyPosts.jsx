import style from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';


const MyPosts = (props) => {

    let postMapper = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostArea = React.createRef();

    let onPostAreaChange = () => {
        props.updateNewPostArea(newPostArea.current.value);
    }

    let addPost = () => {
        props.addPost();
    }

    return (
        <div className={style.myPostsWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostAreaChange} ref={newPostArea} value={props.newPostValue} cols="80"
                          rows="5"/>
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

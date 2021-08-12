import style from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreater, onPostAreaChangeActionCreator} from "../../../redux/store";


const MyPosts = (props) => {

    let postMapper = props.profilePage.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostArea = React.createRef();

    let onPostAreaChange = () => {
        props.dispatch(onPostAreaChangeActionCreator(newPostArea.current.value))
    }

    let addPost = () => {
        props.dispatch(addPostActionCreater());
    }

    return (
        <div className={style.myPostsWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostAreaChange} ref={newPostArea} value={props.profilePage.newPostValue} cols="80"
                          rows="5"></textarea>
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

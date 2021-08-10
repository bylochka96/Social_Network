import style from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreater, onTextAreaChangeActionCreator} from "../../../redux/store";




const MyPosts = (props) => {

    let postMapper = props.profilePage.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostArea = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreater());
    }
    let onTextAreaChange = () => {
        props.dispatch(onTextAreaChangeActionCreator(newPostArea.current.value))
    }

    return (
        <div className={style.myPostsWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onTextAreaChange} ref={newPostArea} value={props.profilePage.newPostValue} cols="80"
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

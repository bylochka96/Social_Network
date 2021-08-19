import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreater, onPostAreaChangeActionCreator} from "../../../redux/profileReducer";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let onPostAreaChange = (text) => {
        props.store.dispatch(onPostAreaChangeActionCreator(text))
    }

    let addPost = () => {
        props.store.dispatch(addPostActionCreater());
    }

    return (
        <MyPosts updateNewPostArea={onPostAreaChange} addPost={addPost} postData={state.profilePage.postData}
                 newPostValue={state.profilePage.newPostValue}/>
    )
};

export default MyPostsContainer;

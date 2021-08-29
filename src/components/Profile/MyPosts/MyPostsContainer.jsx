import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreater, onPostAreaChangeActionCreator} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let onPostAreaChange = (text) => {
                        store.dispatch(onPostAreaChangeActionCreator(text))
                    }

                    let addPost = () => {
                        store.dispatch(addPostActionCreater());
                    }
                    return (<MyPosts updateNewPostArea={onPostAreaChange} addPost={addPost}
                                     postData={state.profilePage.postData}
                                     newPostValue={state.profilePage.newPostValue}/>)
                }
            }
        </StoreContext.Consumer>

    )
};

export default MyPostsContainer;

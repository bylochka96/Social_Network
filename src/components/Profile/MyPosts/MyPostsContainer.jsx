import MyPosts from "./MyPosts";
import {addPostActionCreater, onPostAreaChangeActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostValue: state.profilePage.newPostValue
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostArea: (text) => {
            dispatch(onPostAreaChangeActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreater());
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

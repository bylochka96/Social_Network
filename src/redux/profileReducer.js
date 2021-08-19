const UPDATE_POST_AREA = 'UPDATE-POST-AREA';
const CREATE_POST = 'CREATE-POST';
const initialState = {
    postData: [
        {id: 0, message: 'Hi, my name is...', likesCount: 1},
        {id: 1, message: 'Keep silience!', likesCount: 5}
    ],
        newPostValue: ''
};

export const addPostActionCreater = () => {
    return {type: CREATE_POST}
};

export const onPostAreaChangeActionCreator = (text) => {
    return {type: UPDATE_POST_AREA, textValue: text}
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            let newPost = {id: 717, message: state.newPostValue, likesCount: 666};
            state.postData.push(newPost);
            state.newPostValue = '';
            return state;
        case UPDATE_POST_AREA:
            state.newPostValue = action.textValue;
            return state;
        default:
            return state;
    }
}
export default profileReducer;
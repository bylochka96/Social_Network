const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';
const CREATE_POST = 'CREATE-POST';

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 0, message: 'Hi, my name is...', likesCount: 1},
                {id: 1, message: 'Keep silience!', likesCount: 5}
            ],
            newPostValue: ''
        },
        dialogsPage: {
            contactsData: [
                {id: 0, name: 'Efim'},
                {id: 1, name: 'Vasya'},
                {id: 2, name: 'Alina'},
                {id: 3, name: 'Vita'},
                {id: 4, name: 'Vlad'}
            ],
            messagesData: [
                {id: 0, message: 'LOL its work!'},
                {id: 0, message: 'Samurai way'},
                {id: 0, message: 'How are u doing?'}
            ]
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _createPost() {
        let newPost = {id: 777, message: this._state.profilePage.newPostValue, likesCount: 777};
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostValue = '';
        this._callSubscriber(this._state);
    },
    _updateTextArea(textValue) {
        this._state.profilePage.newPostValue = textValue;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === CREATE_POST) {
            this._createPost()
        } else if (action.type === UPDATE_TEXT_AREA) {
            this._updateTextArea(action.textValue)
        }
    }
}

export const addPostActionCreater = () => {
    return {type: CREATE_POST}
}

export const onTextAreaChangeActionCreator = (text) => {

    return {type: UPDATE_TEXT_AREA, textValue: text}
}

window.store = store;
export default store;

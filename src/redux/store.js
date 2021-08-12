const UPDATE_POST_AREA = 'UPDATE-POST-AREA';
const CREATE_POST = 'CREATE-POST';

const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
            ],
            newMessageValue: ''
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
    _updatePostArea(textValue) {
        this._state.profilePage.newPostValue = textValue;
        this._callSubscriber(this._state);
    },
    _sendMessage() {
        let newMessage = {id: 0, message: this._state.dialogsPage.newMessageValue};
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageValue = '';
        this._callSubscriber(this._state);
    }
    ,
    _updateMessageArea(textValue) {
        this._state.dialogsPage.newMessageValue = textValue;
        this._callSubscriber()
    },
    dispatch(action) {
        if (action.type === CREATE_POST) {
            this._createPost()
        } else if (action.type === UPDATE_POST_AREA) {
            this._updatePostArea(action.textValue)
        } else if (action.type === UPDATE_MESSAGE_AREA) {
            this._updateMessageArea(action.textValue)
        } else if (action.type === SEND_MESSAGE) {
            this._sendMessage()
        }
    }
};

export const addPostActionCreater = () => {
    return {type: CREATE_POST}
};

export const onPostAreaChangeActionCreator = (text) => {
    return {type: UPDATE_POST_AREA, textValue: text}
};

export const onMessageAreaChangeActionCreator = (text) => {
    return {type: UPDATE_MESSAGE_AREA, textValue: text}
};

export const sendMessageActionCreater = () => {
    return {type: SEND_MESSAGE}
}

window.store = store;
export default store;

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store;

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
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    createPost() {
        let newPost = {id: 777, message: this._state.profilePage.newPostValue, likesCount: 777};
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostValue = '';
        this._callSubscriber(this._state);
    },
    updateTextArea(textValue) {
        this._state.profilePage.newPostValue = textValue;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store;
export default store;

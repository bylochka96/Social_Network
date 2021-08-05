import {renderTree} from "../render";

let state = {
    profilePage: {
        postData: [
            {id: 0, message: 'Hi, my name is...', likesCount: 1},
            {id: 1, message: 'Keep silience!', likesCount: 5}
        ],
        newPostValue: 'samurai way'
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
}


export let createPost = () => {
    let newPost = {id: 777, message: state.profilePage.newPostValue, likesCount: 777};
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostValue = '';
    renderTree(state);
}

export let updateTextArea = (textValue) => {
    state.profilePage.newPostValue = textValue;
    renderTree(state);
};

export default state;

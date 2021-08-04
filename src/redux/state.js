let state = {
    profilePage: {
        postData: [
            {id: 0, message: 'Hi, my name is...', likesCount: 1},
            {id: 1, message: 'Keep silience!', likesCount: 5}
        ]
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


export let updatePosts = (textContent) => {
    let newPost = {id: 777 , message: textContent, likesCount: 777};
    state.profilePage.postData.push(newPost);
}

export default state;

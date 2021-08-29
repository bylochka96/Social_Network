const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA';
const SEND_MESSAGE = 'SEND-MESSAGE';
const initialState = {
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

export const onMessageAreaChangeActionCreator = (text) => {
    return {type: UPDATE_MESSAGE_AREA, textValue: text}
};

export const sendMessageActionCreater = () => {
    return {type: SEND_MESSAGE}
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_AREA: {
            return {
                ...state,
                newMessageValue: action.textValue
            }
        }
        case SEND_MESSAGE: {
            let newMessage = {id: 0, message: state.newMessageValue};
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessage: ''
            }
        }
        default:
            return state;
    }
}

export default dialogsReducer;
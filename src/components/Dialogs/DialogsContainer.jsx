import Dialogs from "./Dialogs";
import React from "react";
import {onMessageAreaChangeActionCreator, sendMessageActionCreater} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onMessageAreaChange = (text) => {
        props.store.dispatch(onMessageAreaChangeActionCreator(text));
    };

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreater())
    }

    return (
        <Dialogs onMessageAreaChange={onMessageAreaChange} sendMessage={sendMessage}
                 contactsData={state.dialogsPage.contactsData}
                 messagesData={state.dialogsPage.messagesData} newMessageValue={state.dialogsPage.newMessageValue}/>
    )
};


export default DialogsContainer;
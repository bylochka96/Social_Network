import Dialogs from "./Dialogs";
import React from "react";
import {onMessageAreaChangeActionCreator, sendMessageActionCreater} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let onMessageAreaChange = (text) => {
                        store.dispatch(onMessageAreaChangeActionCreator(text));
                    };

                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreater())
                    }
                    return (<Dialogs onMessageAreaChange={onMessageAreaChange} sendMessage={sendMessage}
                                     contactsData={state.dialogsPage.contactsData}
                                     messagesData={state.dialogsPage.messagesData}
                                     newMessageValue={state.dialogsPage.newMessageValue}/>)
                }
            }
        </StoreContext.Consumer>

    )
};


export default DialogsContainer;
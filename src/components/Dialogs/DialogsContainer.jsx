import Dialogs from "./Dialogs";
import {onMessageAreaChangeActionCreator, sendMessageActionCreater} from "../../redux/dialogsReducer";
import {connect} from "react-redux";


let mapStateToProps = (store) => {
    return {
        contactsData: store.dialogsPage.contactsData,
        messagesData: store.dialogsPage.messagesData,
        newMessageValue: store.dialogsPage.newMessageValue
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageAreaChange: (text) => {
            dispatch(onMessageAreaChangeActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreater())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
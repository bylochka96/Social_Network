import style from './Message.module.css'

const Message = (message) => {
    return(
        <div className={style.message}>{message.text}</div>
    )
}
export default Message;
import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Messages = (props) => {
    return (
        <div className={s.appWrapper}>
            <div className={s.dialogs}>
                {
                    props.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
                }
            </div>

            <div className={s.messages}>
                {
                    props.messageData.map(el => <MessageItem message={el.message}/>)
                }
            </div>
        </div>
    );
}

export default Messages;